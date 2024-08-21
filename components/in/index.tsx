import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/build.glb'); // Update with the correct path
  return <primitive object={scene} />;
};

const In = () => {
  return (
    <Canvas style={{ height: '80vh' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default In;
