'use client'; // This directive is necessary for components using client-side hooks like useEffect and useRef.

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// It's recommended to add the 'Inter' font to your global CSS or Next.js _document.js file.
// For example, in your globals.css: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');

const CrystalSpire = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Guard against re-renders
        if (!mountRef.current || mountRef.current.children.length > 0) {
            return;
        }

        // === GLOBAL VARIABLES ===
        let scene, camera, renderer, controls, clock;
        let crystalTower, particleSystem;
        const orbitingLights = new THREE.Group();
        
        const currentMount = mountRef.current;

        // === MAIN INITIALIZATION FUNCTION ===
        const init = () => {
            // --- Scene Setup ---
            scene = new THREE.Scene();
            clock = new THREE.Clock();

            // --- Renderer Setup ---
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            currentMount.appendChild(renderer.domElement);

            // --- Camera Setup ---
            camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            camera.position.set(12, 8, 12);

            // --- Controls ---
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.minDistance = 10;
            controls.maxDistance = 30;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 1.0;
            controls.target.set(0, 4, 0);
            controls.maxPolarAngle = Math.PI * 0.85;
            controls.minPolarAngle = Math.PI * 0.15;

            // --- Lighting ---
            const ambientLight = new THREE.AmbientLight(0x4040ff, 0.8);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
            directionalLight.position.set(10, 15, 5);
            directionalLight.castShadow = true;
            scene.add(directionalLight);
            
            const rimLight = new THREE.DirectionalLight(0x00bfff, 0.8);
            rimLight.position.set(-10, 10, -5);
            scene.add(rimLight);
            
            scene.add(orbitingLights);
            
            // --- Create Scene Content ---
            createCrystalTower();
            createGround();
            createParticles();
            createOrbitingLights();
        };

        // === GEOMETRY AND MESH CREATION ===
        const createCrystalTower = () => {
            crystalTower = new THREE.Group();
            const numCrystals = 12;
            const crystalHeight = 8;

            const material = new THREE.MeshPhysicalMaterial({
                color: 0x87ceeb,
                metalness: 0.1,
                roughness: 0.05,
                transmission: 0.9,
                ior: 1.5,
                thickness: 0.5,
                transparent: true,
                opacity: 0.9,
                side: THREE.DoubleSide,
                clearcoat: 1.0,
                clearcoatRoughness: 0.1
            });

            // Create main central tower
            const mainHeight = 10;
            const mainRadius = 0.8;
            const mainGeo = new THREE.CylinderGeometry(mainRadius * 0.3, mainRadius, mainHeight, 8);
            const mainCrystal = new THREE.Mesh(mainGeo, material);
            mainCrystal.position.set(0, mainHeight / 2, 0);
            crystalTower.add(mainCrystal);

            // Create surrounding crystals
            for (let i = 0; i < numCrystals; i++) {
                const height = Math.random() * crystalHeight + 3;
                const radius = Math.random() * 0.3 + 0.15;
                const geo = new THREE.CylinderGeometry(radius * 0.2, radius, height, 6);
                const crystal = new THREE.Mesh(geo, material);

                const angle = (i / numCrystals) * Math.PI * 2;
                const distance = Math.random() * 2 + 1.5;
                crystal.position.set(
                    Math.cos(angle) * distance, 
                    height / 2, 
                    Math.sin(angle) * distance
                );
                crystal.rotation.y = angle + Math.random() * 0.5;
                crystal.rotation.x = (Math.random() - 0.5) * 0.2;
                crystal.rotation.z = (Math.random() - 0.5) * 0.2;
                crystalTower.add(crystal);
            }
            
            // Scale down the entire tower group
            crystalTower.scale.setScalar(0.8);
            scene.add(crystalTower);
        };

        const createGround = () => {
            const geo = new THREE.CylinderGeometry(8, 8, 0.1, 32);
            const mat = new THREE.MeshStandardMaterial({ 
                color: 0x1a1a2a, 
                metalness: 0.9, 
                roughness: 0.2,
                transparent: true,
                opacity: 0.8
            });
            const ground = new THREE.Mesh(geo, mat);
            ground.position.y = -0.05;
            scene.add(ground);
        };

        const createParticles = () => {
            const particleCount = 1500;
            const positions = new Float32Array(particleCount * 3);
            const geometry = new THREE.BufferGeometry();
            for (let i = 0; i < particleCount; i++) {
                positions[i*3] = (Math.random() - 0.5) * 15;
                positions[i*3 + 1] = Math.random() * 15;
                positions[i*3 + 2] = (Math.random() - 0.5) * 15;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const material = new THREE.PointsMaterial({
                color: 0x00bfff,
                size: 0.03,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                opacity: 0.6
            });
            particleSystem = new THREE.Points(geometry, material);
            scene.add(particleSystem);
        };
        
        const createOrbitingLights = () => {
            for(let i = 0; i < 4; i++) {
                const light = new THREE.PointLight(0x00bfff, 3, 15);
                const sphereGeo = new THREE.SphereGeometry(0.08, 12, 12);
                const sphereMat = new THREE.MeshBasicMaterial({ 
                    color: 0x87cefa,
                    transparent: true,
                    opacity: 0.8
                });
                light.add(new THREE.Mesh(sphereGeo, sphereMat));
                orbitingLights.add(light);
            }
        };

        // === ANIMATION AND RESIZE HANDLERS ===
        const onWindowResize = () => {
            if (!renderer || !camera) return;
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };
        
        window.addEventListener('resize', onWindowResize);
        
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Animate particles
            const positions = particleSystem.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += 0.008;
                if (positions[i + 1] > 15) positions[i + 1] = -1;
            }
            particleSystem.geometry.attributes.position.needsUpdate = true;

            // Animate orbiting lights
            orbitingLights.children.forEach((light, index) => {
                const angle = elapsedTime * 0.3 + index * (Math.PI * 2 / 4);
                const radius = 4 + Math.sin(elapsedTime * 0.5 + index) * 0.5;
                light.position.x = Math.cos(angle) * radius;
                light.position.z = Math.sin(angle) * radius;
                light.position.y = Math.sin(angle * 2 + index) * 1.5 + 5;
            });

            // Gentle crystal rotation
            if (crystalTower) {
                crystalTower.rotation.y = elapsedTime * 0.1;
            }
            
            controls.update();
            renderer.render(scene, camera);
        };

        // --- Start the application ---
        init();
        animate();

        // --- Cleanup on unmount ---
        return () => {
            window.removeEventListener('resize', onWindowResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            scene.traverse(object => {
                if(object.geometry) object.geometry.dispose();
                if(object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
            if(currentMount && renderer.domElement){
                currentMount.removeChild(renderer.domElement);
            }
        };

    }, []);

    return (
        <div style={{
            width: '100%', 
            height: '100%', 
            position: 'relative', 
            overflow: 'hidden',
            backgroundColor: 'transparent'
        }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default CrystalSpire;