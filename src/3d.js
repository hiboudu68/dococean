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
    // camera.position.set(10, 10, 30); 
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

    // ground plane for Three.js
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x999999, side: THREE.DoubleSide }); // side means both sides are visible (front and back) but we only see one side
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = -Math.PI / 2; // horizontal plane (like real life)
    scene.add(groundMesh);

    // load models
    const loader = new GLTFLoader();
    let heartBody, pliersBody;
    let heartBoxHelper, pliersBoxHelper; 
    let heartModel, pliersModel;
    let isGrabbing = false;

    // first model : heart
    loader.load(
      '/models/heart.glb',
      (gltf) => {
        heartModel = gltf.scene;
        scene.add(heartModel);

        // creating a physics body for the model
        heartBody = new CANNON.Body({
          mass: 1,
          shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)), 
          position: new CANNON.Vec3(0, 5, 0),
        });
        world.addBody(heartBody);

        // create a BoxHelper to outline the heart body
        heartBoxHelper = new THREE.BoxHelper(heartModel, 0x00ff00); // green box for heart
        scene.add(heartBoxHelper);

        const animate = () => {
          requestAnimationFrame(animate);

          world.step(1 / 60); // update physics world : this is the physics engine's tick

          // sync the model's position and rotation with the physics body
          heartModel.position.copy(heartBody.position);
          heartModel.quaternion.copy(heartBody.quaternion);

          // sync the BoxHelper's position and rotation with the model
          heartBoxHelper.update();

          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // second model : medical pliers
    loader.load(
      'models/heart.glb',
      (gltf) => {
        pliersModel = gltf.scene;
        pliersModel.position.set(0, 10, 0); // above the ground
        scene.add(pliersModel);

        // creating a physics body for the model
        pliersBody = new CANNON.Body({
          mass: 0, 
          shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)), 
          position: new CANNON.Vec3(0, 10, 0),
        });
        world.addBody(pliersBody);

        // create a BoxHelper to outline the pliers body
        pliersBoxHelper = new THREE.BoxHelper(pliersModel, 0xff0000); // red box for pliers
        scene.add(pliersBoxHelper);

        const animate = () => {
          // make the pliers completely static (not affected by gravity)
          // pliersBody.position.set(0, 10, 0);
          // pliersBody.velocity.set(0, 0, 0);
          // pliersBody.angularVelocity.set(0, 0, 0);

          requestAnimationFrame(animate);

          world.step(1 / 60); 

          pliersModel.position.copy(pliersBody.position);
          pliersModel.quaternion.copy(pliersBody.quaternion);
          pliersBoxHelper.update();

          renderer.render(scene, camera);
        };

        animate();

        // world.addEventListener('postStep', () => {
        //   if (heartBody && pliersBody) {
        //     if (heartBody.position.distanceTo(pliersBody.position) < 1 && isGrabbing) {
        //       // heartbody follows pliersbody, as if the pliers are picking up the heart
        //       // dont copy the position directly, but set it to a point slightly below the pliers
        //       heartBody.position.copy(pliersBody.position);
        //       heartBody.position.y -= 1;
        //     }
        //   }
        // });
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

        if (event.code === 'KeyG') {
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
      if (pliersBody) {
        // apply user input to pliersBody (physics body), NOT the pliersModel
        if (keyState['ArrowUp']) pliersBody.position.z -= 0.1; // forward
        if (keyState['ArrowDown']) pliersBody.position.z += 0.1; // backward
        if (keyState['ArrowLeft']) pliersBody.position.x -= 0.1; // left
        if (keyState['ArrowRight']) pliersBody.position.x += 0.1; // right
        if (keyState['Space']) pliersBody.position.y -= 0.1; // down
        if (keyState['ShiftLeft']) pliersBody.position.y += 0.1; // up
      }
    };

    // called once per frame
    const update = () => {
      requestAnimationFrame(update);
      moveHand();

      if(isGrabbing && heartBody && pliersBody) {
        heartBody.position.copy(pliersBody.position);
        
        if(isGrabbing) {
          heartBody.position.y -= 1;
          heartBody.velocity.set(0, 0, 0);
          heartBody.angularVelocity.set(0, 0, 0);
        }
      }

      // sync the heart model's position and rotation with the physics body
      if (heartModel && heartBody) {
        heartModel.position.copy(heartBody.position);
        heartModel.quaternion.copy(heartBody.quaternion);

        // update the BoxHelper to match the physics body
        heartBoxHelper.update();
      }

      // sync the pliers model's position and rotation with the physics body
      if (pliersModel && pliersBody) {
        pliersModel.position.copy(pliersBody.position);
        pliersModel.quaternion.copy(pliersBody.quaternion);

        // update the BoxHelper to match the physics body
        pliersBoxHelper.update();
      }

      // also update the physics world
      world.step(1 / 60);



      renderer.render(scene, camera);
    };
    
    update();
    camera.position.set(0, 5, 10);
   
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
