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
    renderer.shadowMap.enabled = true; // Enable shadow maps
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    mountRef.current.appendChild(renderer.domElement);

    // light setup
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 0); // top light
    light.castShadow = true; // Enable shadows for this light
    light.shadow.camera.left = -50;
    light.shadow.camera.right = 50;
    light.shadow.camera.top = 50;
    light.shadow.camera.bottom = -50;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 100;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // strong white light
    scene.add(ambientLight);

    // physics setup
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);

    // ground plane for Cannon.js
    const groundBody = new CANNON.Body({
      mass: 0, // this body is static : it doesn't move
      shape: new CANNON.Plane(),
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // horizontal plane
    world.addBody(groundBody);

    // ground texture
    const textureLoader = new THREE.TextureLoader();
    const groundTexture = textureLoader.load('/models/waves.jpg');
    groundTexture.wrapS = THREE.RepeatWrapping;
    groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    const groundMaterial = new THREE.MeshStandardMaterial({
      map: groundTexture,
    });

    const groundGeometry = new THREE.PlaneGeometry(1000, 1000); // large dimensions
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.receiveShadow = true; // Ground receives shadows
    groundMesh.rotation.x = -Math.PI / 2;
    scene.add(groundMesh);

    scene.background = new THREE.Color(0x87ceeb); // sky blue

    // load models
    const loader = new GLTFLoader();
    let trashBody, clawBody, trashCanBody;
    let trashBoxHelper, clawBoxHelper, trashCanBoxHelper;
    let trashModel, clawModel, trashCanModel;
    let isGrabbing = false;
    let isTrashRemoved = false; // flag to track if trash is removed

    /* 
      THIS IS SOME VERY MESSY CODE.
    */

    // Load trash model
    loader.load(
      '/models/trash.glb',
      (gltf) => {
        trashModel = gltf.scene;
        trashModel.position.set(5, 1, 0);
        trashModel.scale.set(2, 2, 2);
        scene.add(trashModel);

        // creating a physics body for the trash model
        trashBody = new CANNON.Body({
          mass: 1,
          shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
          position: new CANNON.Vec3(5, 1, 0),
        });
        world.addBody(trashBody);

        trashModel.traverse((node) => {
          if (node.isMesh) node.castShadow = true;
        });
      },
      undefined,
      (error) => {
        console.error('Error loading trash model:', error);
      }
    );

    // load claw model
    loader.load(
      '/models/claw.glb',
      (gltf) => {
        clawModel = gltf.scene;
        clawModel.position.set(0, 7, 0);
        clawModel.scale.set(0.1, 0.1, 0.1);
        scene.add(clawModel);

        // creating a physics body for the claw
        clawBody = new CANNON.Body({
          mass: 0, // static body
          shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
          position: new CANNON.Vec3(0, 7, 0),
        });
        world.addBody(clawBody);

        clawModel.traverse((node) => {
          if (node.isMesh) node.castShadow = true;
        });
      },
      undefined,
      (error) => {
        console.error('Error loading hand model:', error);
      }
    );

    // load trash can model
    loader.load(
      '/models/trashCan.glb',
      (gltf) => {
        trashCanModel = gltf.scene;
        trashCanModel.position.set(-8, 0, -3);
        trashCanModel.scale.set(0.01, 0.01, 0.01);
        scene.add(trashCanModel);

        // creating a physics body for the trash can
        trashCanBody = new CANNON.Body({
          mass: 0, // static body
          shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
          position: new CANNON.Vec3(-8, 0, -3),
        });
        world.addBody(trashCanBody);

        trashCanModel.traverse((node) => {
          if (node.isMesh) node.castShadow = true;
        });
      },
      undefined,
      (error) => {
        console.error('Error loading trash can model:', error);
      }
    );

    // collision detection function
    const checkCollision = () => {
      if (trashBody && trashCanBody) {
        const distance = trashBody.position.distanceTo(trashCanBody.position);
        if (distance < 3) { // collision threshold          
          // ensure the program doesnt crash when the trash is removed
          if (!isTrashRemoved) {
            if (trashModel) {
              scene.remove(trashModel); 
            }
            if (trashBody) {
              world.removeBody(trashBody);
            }

            isTrashRemoved = true;
          }

          // display a message to the user
          const message = document.createElement('div');
          message.style.position = 'absolute';
          message.style.width = 100;
          message.style.height = 100;
          message.style.backgroundColor = 'white';
          message.style.color = 'black';
          message.style.fontSize = '20px';
          message.style.padding = '20px';
          message.style.top = '50%';
          message.style.left = '50%';
          message.style.transform = 'translate(-50%, -50%)';
          message.innerHTML = 'Trash thrown in the trash can!';
          document.body.appendChild(message);
        }
      }
    };

    // handle user input for moving the hand
    const keyState = {};
    window.addEventListener('keydown', (event) => {
      keyState[event.code] = true;
      if (event.code === 'KeyG' && trashBody && trashBody.position.distanceTo(clawBody.position) < 2) { // grabbing only when close
        console.log('Grabbing the trash');
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
        if (clawBody.position.y < 1) clawBody.position.y = 1; // don't let the claw go below the ground

        // apply user input to clawBody (physics body)
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
      checkCollision();

      if (isGrabbing && trashBody && clawBody && !isTrashRemoved) {
        trashBody.position.copy(clawBody.position);
        trashBody.position.y -= 1;
        trashBody.velocity.set(0, 0, 0);
        trashBody.angularVelocity.set(0, 0, 0);
      }

      // sync the trash model's position and rotation with the physics body
      if (trashModel && trashBody && !isTrashRemoved) {
        trashModel.position.copy(trashBody.position);
        trashModel.quaternion.copy(trashBody.quaternion);

        // update the BoxHelper to match the physics body
        trashBoxHelper?.update();
      }

      // sync the claw model's position and rotation with the physics body
      if (clawModel && clawBody) {
        clawModel.position.copy(clawBody.position);
        clawModel.quaternion.copy(clawBody.quaternion);

        // update the BoxHelper to match the physics body
        clawBoxHelper?.update();
      }

      world.step(1 / 60); // update physics world : this is the physics engine's tick

      renderer.render(scene, camera);
    };

    update();
    camera.position.set(0, 5, 8);

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
