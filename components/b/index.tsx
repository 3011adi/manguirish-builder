import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const A = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create the scene with premium background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    // Create the camera with optimized parameters for better fit
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
    camera.position.set(3, 2, 5);
    camera.lookAt(0, 0, 0);

    // Create the renderer with premium settings
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(280, 240);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Premium lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(8, 8, 4);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Gold accent lighting
    const pointLight1 = new THREE.PointLight(0xffd700, 0.5, 50);
    pointLight1.position.set(-3, 4, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffa500, 0.3, 50);
    pointLight2.position.set(3, -3, 2);
    scene.add(pointLight2);

    // Premium materials
    const buildingMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2a2a2a,
      shininess: 80,
      specular: 0x111111,
      transparent: true,
      opacity: 0.9
    });

    const accentMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffd700,
      shininess: 120,
      specular: 0xffffff,
      emissive: 0x221100,
      transparent: true,
      opacity: 0.8
    });

    const glassMaterial = new THREE.MeshPhongMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.4,
      shininess: 150,
      specular: 0xffffff
    });

    // Create main building structure - scaled down
    const mainGeometry = new THREE.BoxGeometry(0.8, 2.5, 0.8);
    const mainBuilding = new THREE.Mesh(mainGeometry, buildingMaterial);
    mainBuilding.castShadow = true;
    mainBuilding.receiveShadow = true;
    scene.add(mainBuilding);

    // Create glass windows grid - adjusted for smaller scale
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 3; x++) {
        const windowGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.03);
        const window = new THREE.Mesh(windowGeometry, glassMaterial);
        window.position.set(
          (x - 1) * 0.2,
          (y - 2) * 0.4,
          0.42
        );
        mainBuilding.add(window);
      }
    }

    // Create architectural accent on top - scaled down
    const accentGeometry = new THREE.CylinderGeometry(0.08, 0.12, 0.8, 8);
    const accent = new THREE.Mesh(accentGeometry, accentMaterial);
    accent.position.y = mainGeometry.parameters.height / 2 + accentGeometry.parameters.height / 2;
    accent.castShadow = true;
    scene.add(accent);

    // Create base platform - scaled down
    const baseGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.15, 16);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 40
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -1.3;
    base.receiveShadow = true;
    scene.add(base);

    // Create premium outline effect - scaled down
    const outlineGeometry = new THREE.BoxGeometry(0.85, 2.55, 0.85);
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.08
    });
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
    scene.add(outline);

    // Animation variables
    let time = 0;

    // Premium animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.008;

      // Smooth rotation
      mainBuilding.rotation.y += 0.004;
      accent.rotation.y += 0.006;
      outline.rotation.y += 0.004;

      // Subtle floating animation
      mainBuilding.position.y = Math.sin(time) * 0.08;
      accent.position.y = (mainGeometry.parameters.height / 2 + accentGeometry.parameters.height / 2) + Math.sin(time) * 0.08;

      // Dynamic lighting
      pointLight1.intensity = 0.5 + Math.sin(time * 2) * 0.15;
      pointLight2.intensity = 0.3 + Math.cos(time * 1.5) * 0.1;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = 280 / 240;
      camera.updateProjectionMatrix();
      renderer.setSize(280, 240);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-full w-full relative">
      <canvas ref={canvasRef} className="rounded-xl shadow-gold max-w-full max-h-full" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-amber-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
      </div>
    </div>
  );
};

export default A;