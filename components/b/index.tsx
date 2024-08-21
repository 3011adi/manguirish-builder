import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const B = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create the scene
    const scene = new THREE.Scene();

    // Create the camera with a smaller field of view
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3; // Move the camera closer to the cube

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(400, 400); // Set a smaller size for the renderer

    // Create the cube geometry and material
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2.8, 12);
    const material = new THREE.MeshBasicMaterial({ color:  0x0000ff, wireframe: true }); // Green color

    // Create the cube mesh and add it to the scene
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create another cube and place it on top of the existing cube
const geometry1 = new THREE.BoxGeometry(0.1,0.8,0.1);
const cube2 = new THREE.Mesh(geometry1, material);
cube2.position.y = geometry.parameters.height / 2 + geometry1.parameters.height / 2; // Adjust the y position to place it on top of the existing cube
scene.add(cube2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cubes
      cube.rotation.y += 0.01;
      cube2.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default B;