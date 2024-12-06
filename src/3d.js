import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // for 3D rendering
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // for glTF & glb models
import * as CANNON from 'cannon-es'; // for physics

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // camera setup
    // camera.position.set(6, 4, 6);
    // camera.lookAt(0, 0, 0);

    // light setup
    const light = new THREE.AmbientLight(0xffffff, 1); // could be directional light too
    scene.add(light);

    // physics setup
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);

    // ground plane for Cannon.js
    const groundBody = new CANNON.Body({
      mass: 0, // this body is static : it doesn't move
      shape: new CANNON.Plane(),
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // horizontal plane (like real life)
    world.addBody(groundBody);

    // ground texture
    const textureLoader = new THREE.TextureLoader();
    const groundTexture = textureLoader.load('/models/waves.jpg');
    groundTexture.wrapS = THREE.RepeatWrapping;
    groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(100, 100); // repeats the texture to create an "infinite" effect

    // create the ground material using the texture
    const groundMaterial = new THREE.MeshStandardMaterial({
      map: groundTexture,
      side: THREE.DoubleSide, // Both sides visible
    });

    // use a large plane for the ground
    const groundGeometry = new THREE.PlaneGeometry(1000, 1000); // Large dimensions to simulate infinity
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = -Math.PI / 2; // Horizontal orientation
    scene.add(groundMesh);

    scene.background = new THREE.Color(0x87ceeb); // sky blue

    // load models
    const loader = new GLTFLoader();
    let trashBody, clawBody;
    let trashBoxHelper, clawBoxHelper; 
    let trashModel, clawModel;
    let isGrabbing = false;

      // first model : trash
      loader.load(
        '/models/milkJug.glb',
        (gltf) => {
          trashModel = gltf.scene;
          trashModel.position.set(0, 0, 0); // on the ground
          scene.add(trashModel);
  
          // creating a physics body for the model
          trashBody = new CANNON.Body({
            mass: 1,
            shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
            position: new CANNON.Vec3(0, 0, 0),
          });
          world.addBody(trashBody);
  
          // create a BoxHelper to outline the trash body
          trashBoxHelper = new THREE.BoxHelper(trashModel, 0x00ff00); // green box for trash
          scene.add(trashBoxHelper);
  
          const animate = () => {
            requestAnimationFrame(animate);
  
            world.step(1 / 60); // update physics world : this is the physics engine's tick
  
            // sync the model's position and rotation with the physics body
            trashModel.position.copy(trashBody.position);
            trashModel.quaternion.copy(trashBody.quaternion);
  
            // sync the BoxHelper's position and rotation with the model
            trashBoxHelper.update();
  
            renderer.render(scene, camera);
          };
  
          animate();
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );
  
    
    

    // second model : claw
    loader.load(
      'models/heart.glb',
      (gltf) => {
        clawModel = gltf.scene;
        clawModel.position.set(0, 10, 0); // above the ground
        scene.add(clawModel);

        // creating a physics body for the model
        clawBody = new CANNON.Body({
          mass: 0, 
          shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)), 
          position: new CANNON.Vec3(0, 5, 0),
        });
        world.addBody(clawBody);

        // create a BoxHelper to outline the claw's body
        clawBoxHelper = new THREE.BoxHelper(clawModel, 0xff0000); // red box for claw
        scene.add(clawBoxHelper);

        const animate = () => {
          requestAnimationFrame(animate);

          world.step(1 / 60); 

          clawModel.position.copy(clawBody.position);
          clawModel.quaternion.copy(clawBody.quaternion);
          clawBoxHelper.update();

          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading hand model:', error);
      }
    )

     // handle user input for moving the hand
     const keyState = {};
     window.addEventListener('keydown', (event) => {
       keyState[event.code] = true;
        
        if (event.code === 'KeyG' && trashBody.position.distanceTo(clawBody.position) < 1) { // ONLY when the hand is close to the trash !!!!!! 
          isGrabbing = true;
        }
     });
     window.addEventListener('keyup', (event) => {
       keyState[event.code] = false;

        if (event.code === 'KeyG') {
          isGrabbing = false;
        }
     });
     
     const moveHand = () => {
      if (clawBody) {
        if(clawBody.position.y < 1) clawBody.position.y = 1; // don't let the claw go below the ground

        // apply user input to clawBody (physics body), NOT the clawModel (visual model)
        if (keyState['ArrowUp']) clawBody.position.z -= 0.1; // forward
        if (keyState['ArrowDown']) clawBody.position.z += 0.1; // backward
        if (keyState['ArrowLeft']) clawBody.position.x -= 0.1; // left
        if (keyState['ArrowRight']) clawBody.position.x += 0.1; // right
        if (keyState['Space']) clawBody.position.y -= 0.1; // down
        if (keyState['ShiftLeft']) clawBody.position.y += 0.1; // up
      }
    };

    // called once per frame
    const update = () => {
      requestAnimationFrame(update);
      moveHand();

      if(isGrabbing && trashBody && clawBody) {
        trashBody.position.copy(clawBody.position);
        
        if(isGrabbing) {
          trashBody.position.y -= 1;
          trashBody.velocity.set(0, 0, 0);
          trashBody.angularVelocity.set(0, 0, 0);
        }
      }

      // sync the trash model's position and rotation with the physics body
      if (trashModel && trashBody) {
        trashModel.position.copy(trashBody.position);
        trashModel.quaternion.copy(trashBody.quaternion);

        // update the BoxHelper to match the physics body
        trashBoxHelper.update();
      }

      // sync the claw model's position and rotation with the physics body
      if (clawModel && clawBody) {
        clawModel.position.copy(clawBody.position);
        clawModel.quaternion.copy(clawBody.quaternion);

        // update the BoxHelper to match the physics body
        clawBoxHelper.update();
      }

      // also update the physics world
      world.step(1 / 60);

      renderer.render(scene, camera);
    };
    
    update();
    camera.position.set(0, 3, 7);
   
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('keydown', (event) => {
        keyState[event.code] = true;
      });
      window.removeEventListener('keyup', (event) => {
        keyState[event.code] = false;
      });
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeScene;
