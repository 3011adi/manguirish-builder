import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene } = useGLTF('/build.glb');
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (scene) {
      // Calculate the bounding box to properly scale and center the model
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Scale the model to fit properly in the scene
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim; // Adjust this value to make model larger/smaller
      scene.scale.setScalar(scale);

      // Center the model
      scene.position.copy(center).multiplyScalar(-scale);
      scene.position.y = -size.y * scale / 2; // Place on ground

      // Traverse and enhance materials for premium look
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Enhance materials for premium appearance
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat: any) => {
                if (mat.isMeshStandardMaterial) {
                  mat.envMapIntensity = 0.8;
                  mat.roughness = 0.3;
                  mat.metalness = 0.1;
                }
              });
            } else if (child.material.isMeshStandardMaterial) {
              child.material.envMapIntensity = 0.8;
              child.material.roughness = 0.3;
              child.material.metalness = 0.1;
            }
          }
        }
      });
    }
  }, [scene]);

  // Subtle floating animation
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      modelRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return scene ? <primitive ref={modelRef} object={scene} /> : null;
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center space-y-4">
      <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto"></div>
      <p className="font-body text-gray-400 text-sm">Loading 3D Model...</p>
    </div>
  </div>
);

const ErrorFallback = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-amber-500/20 rounded-full mx-auto flex items-center justify-center">
        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <div>
        <h3 className="font-heading text-amber-400 font-semibold mb-2">3D Interior Model</h3>
        <p className="font-body text-gray-400 text-sm">Interactive model preview</p>
      </div>
    </div>
  </div>
);

const In = () => {
  return (
    <div className="w-full h-full absolute inset-0 rounded-2xl overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{
            position: [3, 2, 4],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          shadows
          className="w-full h-full"
          onError={() => <ErrorFallback />}
        >
          {/* Premium Lighting Setup */}
          <ambientLight intensity={0.4} />
          
          {/* Main directional light with shadows */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          
          {/* Accent lighting for premium effect */}
          <pointLight position={[-3, 3, 3]} intensity={0.5} color="#ffd700" />
          <pointLight position={[3, 3, -3]} intensity={0.3} color="#ffa500" />
          
          {/* Environment for realistic reflections */}
          <Environment preset="apartment" />
          
          {/* Contact shadows for grounding */}
          <ContactShadows
            opacity={0.3}
            scale={10}
            blur={2}
            far={4}
            resolution={256}
            color="#000000"
          />
          
          {/* 3D Model */}
          <Model />
          
          {/* Enhanced Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.8}
            autoRotate={false}
            autoRotateSpeed={0.5}
            dampingFactor={0.05}
            enableDamping={true}
          />
        </Canvas>
      </Suspense>
      
      {/* Floating UI Elements */}
      <div className="absolute top-4 right-4 glass-gold px-3 py-2 rounded-lg">
        <span className="font-heading text-amber-200 text-xs uppercase tracking-wider">3D View</span>
      </div>
      
      <div className="absolute bottom-4 left-4 glass-gold px-3 py-2 rounded-lg">
        <span className="font-body text-gray-300 text-xs">Drag to rotate • Scroll to zoom</span>
      </div>
    </div>
  );
};

// Preload the model for better performance
useGLTF.preload('/build.glb');

export default In;
