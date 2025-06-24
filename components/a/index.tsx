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
            camera.position.set(0, 12, 15);

            // --- Controls ---
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.minDistance = 12;
            controls.maxDistance = 40;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5;
            controls.target.set(0, 8, 0);
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

            // Burj Khalifa-inspired materials
            const glassMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x87ceeb,
                metalness: 0.1,
                roughness: 0.1,
                transmission: 0.8,
                ior: 1.5,
                thickness: 0.1,
                transparent: true,
                opacity: 0.7,
                side: THREE.DoubleSide,
                clearcoat: 1.0,
                clearcoatRoughness: 0.05
            });

            const steelMaterial = new THREE.MeshStandardMaterial({
                color: 0x404040,
                metalness: 0.9,
                roughness: 0.1,
                envMapIntensity: 1.0
            });

            // Create the main tower with Burj Khalifa-like design
            const totalHeight = 15;
            const numLevels = 8;
            const levelHeight = totalHeight / numLevels;

            for (let level = 0; level < numLevels; level++) {
                const progress = level / (numLevels - 1);
                const heightFromBottom = level * levelHeight;
                
                // Tapering: wider at bottom, narrower at top
                const baseRadius = 1.2 * (1 - progress * 0.7);
                const topRadius = baseRadius * 0.85;
                
                // Create main building segment
                const geo = new THREE.CylinderGeometry(topRadius, baseRadius, levelHeight, 8);
                const building = new THREE.Mesh(geo, glassMaterial);
                building.position.y = heightFromBottom + levelHeight / 2;
                
                // Add slight twist like Burj Khalifa
                building.rotation.y = progress * Math.PI * 0.3;
                
                crystalTower.add(building);

                // Add steel frame details every few levels
                if (level % 2 === 0) {
                    const frameGeo = new THREE.CylinderGeometry(baseRadius + 0.02, baseRadius + 0.02, 0.1, 8);
                    const frame = new THREE.Mesh(frameGeo, steelMaterial);
                    frame.position.y = heightFromBottom;
                    crystalTower.add(frame);
                }

                // Add setbacks (step-ins) at certain levels
                if (level === 3 || level === 5) {
                    const setbackGeo = new THREE.CylinderGeometry(topRadius * 0.9, baseRadius * 0.9, levelHeight * 0.1, 8);
                    const setback = new THREE.Mesh(setbackGeo, steelMaterial);
                    setback.position.y = heightFromBottom + levelHeight;
                    crystalTower.add(setback);
                }
            }

            // Add the iconic spire at the top
            const spireHeight = 3;
            const spireGeo = new THREE.CylinderGeometry(0.05, 0.15, spireHeight, 6);
            const spire = new THREE.Mesh(spireGeo, steelMaterial);
            spire.position.y = totalHeight + spireHeight / 2;
            crystalTower.add(spire);

            // Add antenna at the very top
            const antennaGeo = new THREE.CylinderGeometry(0.01, 0.01, 1, 4);
            const antenna = new THREE.Mesh(antennaGeo, steelMaterial);
            antenna.position.y = totalHeight + spireHeight + 0.5;
            crystalTower.add(antenna);

            // Add LED lighting strips (decorative elements)
            for (let i = 0; i < 6; i++) {
                const lightStripGeo = new THREE.BoxGeometry(0.02, totalHeight * 0.8, 0.02);
                const lightStripMat = new THREE.MeshStandardMaterial({
                    color: 0x00ff88,
                    emissive: 0x004422,
                    transparent: true,
                    opacity: 0.6,
                    metalness: 0.1,
                    roughness: 0.3
                });
                const lightStrip = new THREE.Mesh(lightStripGeo, lightStripMat);
                
                const angle = (i / 6) * Math.PI * 2;
                const radius = 0.8;
                lightStrip.position.x = Math.cos(angle) * radius;
                lightStrip.position.z = Math.sin(angle) * radius;
                lightStrip.position.y = totalHeight * 0.4;
                
                crystalTower.add(lightStrip);
            }

            // Scale and position the tower
            crystalTower.scale.setScalar(0.8);
            crystalTower.position.y = 0;
            scene.add(crystalTower);
        };

        const createGround = () => {
            // Main plaza base
            const geo = new THREE.CylinderGeometry(10, 10, 0.2, 32);
            const mat = new THREE.MeshStandardMaterial({ 
                color: 0x2a2a3a, 
                metalness: 0.7, 
                roughness: 0.3,
                transparent: true,
                opacity: 0.9
            });
            const ground = new THREE.Mesh(geo, mat);
            ground.position.y = -0.1;
            scene.add(ground);

            // Add some surrounding smaller buildings for context
            for (let i = 0; i < 8; i++) {
                const height = Math.random() * 2 + 1;
                const width = Math.random() * 0.5 + 0.3;
                const buildingGeo = new THREE.BoxGeometry(width, height, width);
                const buildingMat = new THREE.MeshStandardMaterial({
                    color: 0x404050,
                    metalness: 0.8,
                    roughness: 0.2
                });
                const building = new THREE.Mesh(buildingGeo, buildingMat);
                
                const angle = (i / 8) * Math.PI * 2;
                const distance = 6 + Math.random() * 2;
                building.position.set(
                    Math.cos(angle) * distance,
                    height / 2,
                    Math.sin(angle) * distance
                );
                scene.add(building);
            }
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