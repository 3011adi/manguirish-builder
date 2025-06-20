import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const B = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create the scene with premium background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    // Create the camera with optimized parameters for better fit
    const camera = new THREE.PerspectiveCamera(35, 280/240, 0.1, 1000);
    camera.position.set(3.5, 2.5, 5.5);
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
    directionalLight.position.set(6, 9, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Premium accent lighting
    const pointLight1 = new THREE.PointLight(0x00bfff, 0.5, 50);
    pointLight1.position.set(-3, 5, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4169e1, 0.3, 50);
    pointLight2.position.set(3, -3, 4);
    scene.add(pointLight2);

    // Premium materials
    const buildingMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2c3e50,
      shininess: 120,
      specular: 0x1a1a1a,
      transparent: true,
      opacity: 0.9
    });

    const accentMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3498db,
      shininess: 150,
      specular: 0xffffff,
      emissive: 0x001122,
      transparent: true,
      opacity: 0.8
    });

    const glassMaterial = new THREE.MeshPhongMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.4,
      shininess: 200,
      specular: 0xffffff
    });

    const metalMaterial = new THREE.MeshPhongMaterial({
      color: 0x708090,
      shininess: 300,
      specular: 0xffffff,
      metalness: 0.8
    });

    // Create main cylindrical tower - scaled down
    const mainGeometry = new THREE.CylinderGeometry(0.6, 0.7, 2.5, 16);
    const mainBuilding = new THREE.Mesh(mainGeometry, buildingMaterial);
    mainBuilding.castShadow = true;
    mainBuilding.receiveShadow = true;
    scene.add(mainBuilding);

    // Create circular glass windows - adjusted for smaller scale
    for (let level = 0; level < 6; level++) {
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 0.65 - (level * 0.015);
        
        const windowGeometry = new THREE.BoxGeometry(0.08, 0.2, 0.03);
        const window = new THREE.Mesh(windowGeometry, glassMaterial);
        
        window.position.set(
          Math.cos(angle) * radius,
          (level - 2.5) * 0.35,
          Math.sin(angle) * radius
        );
        
        window.lookAt(0, window.position.y, 0);
        mainBuilding.add(window);
      }
    }

    // Create spire on top - scaled down
    const spireGeometry = new THREE.ConeGeometry(0.1, 1.0, 8);
    const spire = new THREE.Mesh(spireGeometry, accentMaterial);
    spire.position.y = mainGeometry.parameters.height / 2 + spireGeometry.parameters.height / 2;
    spire.castShadow = true;
    scene.add(spire);

    // Create decorative rings - scaled down
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(0.8 + (i * 0.06), 0.03, 6, 12);
      const ring = new THREE.Mesh(ringGeometry, metalMaterial);
      ring.position.y = -0.7 + (i * 1.0);
      ring.castShadow = true;
      mainBuilding.add(ring);
    }

    // Create base platform - scaled down
    const baseGeometry = new THREE.CylinderGeometry(1.3, 1.3, 0.2, 20);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 50
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -1.35;
    base.receiveShadow = true;
    scene.add(base);

    // Create premium outline effect - scaled down
    const outlineGeometry = new THREE.CylinderGeometry(0.65, 0.75, 2.6, 16);
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0x3498db,
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
      time += 0.01;

      // Smooth rotation - different speed for variety
      mainBuilding.rotation.y += 0.006;
      spire.rotation.y += 0.012;
      outline.rotation.y += 0.006;

      // Subtle floating animation
      mainBuilding.position.y = Math.sin(time * 0.8) * 0.08;
      spire.position.y = (mainGeometry.parameters.height / 2 + spireGeometry.parameters.height / 2) + Math.sin(time * 0.8) * 0.08;

      // Dynamic lighting with blue theme
      pointLight1.intensity = 0.6 + Math.sin(time * 1.8) * 0.2;
      pointLight2.intensity = 0.4 + Math.cos(time * 1.3) * 0.15;

      // Pulsing rings
      mainBuilding.children.forEach((child, index) => {
        if (child.geometry instanceof THREE.TorusGeometry) {
          child.rotation.z = time * (0.5 + index * 0.2);
        }
      });

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
      <canvas ref={canvasRef} className="rounded-xl shadow-premium max-w-full max-h-full" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-2 w-1 h-1 bg-sky-300 rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  );
};

export default B;