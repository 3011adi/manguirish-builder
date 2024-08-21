import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Image from 'next/image';
const Model = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Position the camera
const angle = 30; // Angle in degrees
const height = 1; // Height from the ground
const distance = height / Math.tan((angle * Math.PI) / 180); // Calculate the distance from the center of the scene
camera.position.set(0, height, distance);

// Make the camera look at the center of the scene
camera.lookAt(0, 0, 0);

    const buildtext = new THREE.TextureLoader().load('./build2.png');
    const buildtext1 = new THREE.TextureLoader().load('./build.jpg');
    const geometry = new THREE.CylinderGeometry(3, 5, 30, 5, 50);
    const material = new THREE.MeshStandardMaterial({ map: buildtext1 });
    const torus = new THREE.Mesh(geometry, material);
    torus.position.y = geometry.parameters.height / 2;
    scene.add(torus);

    const boxGeometry = new THREE.BoxGeometry(0.5, 6, 0.5);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Change the color as needed
const box = new THREE.Mesh(boxGeometry, boxMaterial);

// Position the box above the torus
box.position.y = torus.position.y + geometry.parameters.height / 2 + boxGeometry.parameters.height / 2;

scene.add(box);

    // Add a point light
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(100, 50000, 0x000000);
    //scene.add(lightHelper, gridHelper);
    // Create a PlaneGeometry
    // Create a directional light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 5);
scene.add(light);

// Load textures
const planeTexture = new THREE.TextureLoader().load('./normal.jpg');
const moonTexture = new THREE.TextureLoader().load('./floor.jpg');

// Create a PlaneGeometry
const planeGeometry = new THREE.PlaneGeometry(100, 100);
const planeMaterial = new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: planeTexture });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// Add the plane to the scene
scene.add(plane);


plane.rotation.x = - Math.PI / 2;
 

scene.add(plane);

    const controls = new OrbitControls(camera, renderer.domElement);

    function addbuild() {
      const geometry = new THREE.BoxGeometry(1, 8, 1);
      const material = new THREE.MeshStandardMaterial({ map: buildtext });
      const star = new THREE.Mesh(geometry, material);

      const x = THREE.MathUtils.randFloatSpread(100);
      const y = geometry.parameters.height / 2;
      const z = THREE.MathUtils.randFloatSpread(100);

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill().forEach(addbuild);

    function addtree() {
      // Create the cylinder for the tree trunk
      const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32); // Adjust dimensions as needed
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Brown color for the trunk
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  
      // Create the octagon for the tree top
      const octagonGeometry = new THREE.CylinderGeometry(0, 1.5, 3.5, 8); // Octagon with 8 sides
      const octagonMaterial = new THREE.MeshStandardMaterial({ color: 0x008000 }); // Light green color for the leaves
      const octagon = new THREE.Mesh(octagonGeometry, octagonMaterial);
  
      // Position the trunk and the octagon
      trunk.position.set(0, 1.5, 0); // Trunk's position
      octagon.position.set(0, 4, 0); // Octagon positioned on top of the trunk
  
      // Combine trunk and octagon into one group
      const tree = new THREE.Group();
      tree.add(trunk);
      tree.add(octagon);
  
      // Randomly position the tree in the scene
      const x = THREE.MathUtils.randFloatSpread(100);
      const z = THREE.MathUtils.randFloatSpread(100);
      tree.position.set(x, 0, z);
  
      // Add the tree to the scene
      scene.add(tree);
  }
  
  
      Array(150).fill().forEach(addtree);

    const spaceTexture = new THREE.TextureLoader().load('./space.jpeg');
    scene.background = spaceTexture;

    function animate() {
      requestAnimationFrame(animate);

      

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Cleanup function
    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg"></canvas>;
};

export default Model;
