import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'; // for 3D rendering
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // for glTF & glb models
import * as CANNON from 'cannon-es'; // for physics

const ThreeScene = ({ onWin }) => {
  const mountRef = useRef(null);

  const [started, setStarted] = useState(false);
  const handleStart = () => {
    setStarted(true);
  }

  useEffect(() => {
    if (!started || !mountRef.current) {
      // skip initialization if the game hasn't started or the mountRef is not ready
      return;
    }

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
    light.castShadow = true; // enable shadows
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

    // load trash model
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

          onWin("spot4", "victory");

          return;
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
        if (keyState['KeyS']) clawBody.position.y -= 0.1; // down
        if (keyState['KeyW']) clawBody.position.y += 0.1; // up
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

    // add button to reset the game (bring the trash and claw back to their initial positions)
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.style.position = 'absolute';
    resetButton.style.top = '50px';
    resetButton.style.left = '100px';
    resetButton.style.zIndex = '100';
    resetButton.style.fontSize = '20px';
    resetButton.addEventListener('click', () => {
      if (trashModel && !scene.children.includes(trashModel)) {
        scene.add(trashModel);
      }
      if (trashBody && !world.bodies.includes(trashBody)) {
        world.addBody(trashBody);
      }
    
      isTrashRemoved = false;
      trashBody.position.set(5, 1, 0);
      trashBody.velocity.set(0, 0, 0);
      trashBody.angularVelocity.set(0, 0, 0);
      
      trashModel.position.copy(trashBody.position);
      trashModel.quaternion.copy(trashBody.quaternion);
    
      clawBody.position.set(0, 7, 0);
      clawBody.velocity.set(0, 0, 0);
      clawBody.angularVelocity.set(0, 0, 0);
    
      clawModel.position.copy(clawBody.position);
      clawModel.quaternion.copy(clawBody.quaternion);
    });
    mountRef.current.appendChild(resetButton);

    // add controls to top left
    const controls = document.createElement('div');
    controls.innerHTML = `  
      <h1>Contrôles</h1>
      <ul>
        <li> W: Monter</li>
        <li> S: Descendre</li>
        <li> Flèche haut: Avancer vers l'avant</li>
        <li> Flèche bas: Reculer</li>
        <li> Flèche gauche: Aller à gauche</li>  
        <li> Flèche droite: Aller à droite</li>
        <li> G: Attraper (Maintenir pressé)</li>
      </ul>
      <p>Dès que tu as attrapé le déchet, ramène-le à la poubelle pour gagner !</p>
      <p>Si tu es bloqué, clique sur le bouton "Reset" pour recommencer.</p>
    `;
    controls.style.position = 'absolute';
    controls.style.top = '100px';
    controls.style.right = '100px';
    controls.style.zIndex = '100';
    controls.style.fontSize = '20px';
    controls.style.color = 'black';
    controls.style.backgroundColor = 'white';
    controls.style.border = '1px solid black';
    controls.style.display = 'none';
    mountRef.current.appendChild(controls);

    // add controls button
    const controlsButton = document.createElement('button');
    controlsButton.textContent = 'Contrôles'; 
    controlsButton.style.position = 'absolute';
    controlsButton.style.top = '50px';
    controlsButton.style.right = '100px';
    controlsButton.style.zIndex = '100';
    controlsButton.style.fontSize = '20px';
    controlsButton.addEventListener('click', () => {
      controls.style.display = controls.style.display === 'none' ? 'block' : 'none';
    });
    mountRef.current.appendChild(controlsButton);


    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('keydown', (event) => {
        keyState[event.code] = true;
      });
      
      window.removeEventListener('keyup', (event) => {
        keyState[event.code] = false;
      });

    };
    
  }, [started]);

  return (
    <div className="3d_game">
    {!started &&
      <div className="container_start">
        <button onClick={handleStart}>Clique moi</button>
        <div class="instructions">
          <article>
            <header>
              <h1>Les Boutons du Corps Humain : Attention à l'Alerte Plastique ! 🚨🌊
              </h1>
            </header>
            <section>
              <p>Imagine que ton corps est couvert de boutons à cause d’une mauvaise habitude… Eh bien, nos océans ont aussi leurs boutons : ce sont les îles de plastique. Ces amas géants de déchets flottants, certains aussi grands qu’un pays, sont les symptômes d’un océan malade. 🗑️🌍
              </p>
            </section>
            <section>
              <p>Ces « boutons » se forment à cause de millions de tonnes de plastique jetées dans la nature chaque année. Les courants marins les rassemblent en d’énormes zones où le plastique flotte, se décompose en minuscules morceaux (les microplastiques) et devient impossible à nettoyer complètement. 🚮
              </p>
            </section>
            <section>
              <p>Le problème ? Les animaux marins, comme les tortues, les poissons ou les oiseaux, confondent souvent le plastique avec de la nourriture. Résultat : ils s’empoisonnent, et ce poison peut finir dans nos assiettes. 😨🐠
              </p>
            </section>
            <footer>
              <p>Ces îles de plastique ne disparaîtront pas toutes seules, alors à nous de changer les choses : moins de plastique, plus de recyclage, et surtout moins de déchets dans la nature. Ensemble, faisons la chasse à ces « boutons » pour un océan en meilleure santé ! 💪🌊</p>
            </footer>
          </article>
        </div>
      </div>
    }
    {started &&
      <div ref={mountRef} />
    }
  </div>
  );

};

export default ThreeScene;
