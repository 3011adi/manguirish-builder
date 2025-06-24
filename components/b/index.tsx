'use client'; // This directive is necessary for components using client-side hooks like useEffect and useRef.

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// It's recommended to add the 'Inter' font to your global CSS or Next.js _document.js file.
// For example, in your globals.css: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');

const NewYorkCityscape = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Guard against re-renders
        if (!mountRef.current || mountRef.current.children.length > 0) {
            return;
        }

        // === GLOBAL VARIABLES ===
        let scene, camera, renderer, controls, clock;
        let nycSkyline, particleSystem;
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
            const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
            scene.add(ambientLight);
            
            // Sunlight
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
            directionalLight.position.set(10, 15, 5);
            directionalLight.castShadow = true;
            scene.add(directionalLight);
            
            // City glow/rim light
            const rimLight = new THREE.DirectionalLight(0xff8844, 0.4);
            rimLight.position.set(-10, 8, -5);
            scene.add(rimLight);
            
            // Evening city atmosphere
            const cityGlow = new THREE.DirectionalLight(0xffaa33, 0.3);
            cityGlow.position.set(0, 5, 10);
            scene.add(cityGlow);
            
            scene.add(orbitingLights);
            
            // --- Create Scene Content ---
            createNYCSkyline();
            createGround();
            createParticles();
            createOrbitingLights();
        };

        // === GEOMETRY AND MESH CREATION ===
        const createNYCSkyline = () => {
            nycSkyline = new THREE.Group();

            // NYC Building Materials
            const glassMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x6eb5ff,
                metalness: 0.1,
                roughness: 0.1,
                transmission: 0.6,
                ior: 1.5,
                thickness: 0.1,
                transparent: true,
                opacity: 0.8,
                side: THREE.DoubleSide,
                clearcoat: 1.0,
                clearcoatRoughness: 0.1
            });

            const artDecoMaterial = new THREE.MeshStandardMaterial({
                color: 0xc0c0c0,
                metalness: 0.8,
                roughness: 0.2,
                envMapIntensity: 1.2
            });

            const brickMaterial = new THREE.MeshStandardMaterial({
                color: 0x8b4513,
                metalness: 0.1,
                roughness: 0.8
            });

            const modernGlassMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x87ceeb,
                metalness: 0.0,
                roughness: 0.1,
                transmission: 0.9,
                ior: 1.5,
                transparent: true,
                opacity: 0.6
            });

            // EMPIRE STATE BUILDING (Center-left)
            const empireStateGroup = new THREE.Group();
            
            // Base section
            const baseGeo = new THREE.BoxGeometry(1.5, 8, 1.5);
            const base = new THREE.Mesh(baseGeo, artDecoMaterial);
            base.position.y = 4;
            empireStateGroup.add(base);

            // Middle section with setbacks
            const midGeo = new THREE.BoxGeometry(1.2, 6, 1.2);
            const mid = new THREE.Mesh(midGeo, artDecoMaterial);
            mid.position.y = 11;
            empireStateGroup.add(mid);

            // Top section
            const topGeo = new THREE.BoxGeometry(0.8, 4, 0.8);
            const top = new THREE.Mesh(topGeo, artDecoMaterial);
            top.position.y = 16;
            empireStateGroup.add(top);

            // Spire
            const spireGeo = new THREE.CylinderGeometry(0.05, 0.2, 2, 8);
            const spire = new THREE.Mesh(spireGeo, artDecoMaterial);
            spire.position.y = 19;
            empireStateGroup.add(spire);

            empireStateGroup.position.set(-2, 0, 1);
            nycSkyline.add(empireStateGroup);

            // CHRYSLER BUILDING (Center-right)
            const chryslerGroup = new THREE.Group();
            
            // Main tower
            const chryslerMainGeo = new THREE.BoxGeometry(1.3, 12, 1.3);
            const chryslerMain = new THREE.Mesh(chryslerMainGeo, artDecoMaterial);
            chryslerMain.position.y = 6;
            chryslerGroup.add(chryslerMain);

            // Distinctive crown/top
            const crownLevels = 6;
            for (let i = 0; i < crownLevels; i++) {
                const scale = 1 - (i * 0.15);
                const crownGeo = new THREE.BoxGeometry(1.3 * scale, 0.8, 1.3 * scale);
                const crown = new THREE.Mesh(crownGeo, artDecoMaterial);
                crown.position.y = 12 + i * 0.7;
                chryslerGroup.add(crown);
            }

            // Spire
            const chryslerSpireGeo = new THREE.CylinderGeometry(0.02, 0.15, 1.5, 8);
            const chryslerSpire = new THREE.Mesh(chryslerSpireGeo, artDecoMaterial);
            chryslerSpire.position.y = 16.5;
            chryslerGroup.add(chryslerSpire);

            chryslerGroup.position.set(2.5, 0, -0.5);
            nycSkyline.add(chryslerGroup);

            // ONE WORLD TRADE CENTER (Back center)
            const oneWTCGroup = new THREE.Group();
            
            // Main glass tower
            const oneWTCGeo = new THREE.BoxGeometry(1.4, 16, 1.4);
            const oneWTC = new THREE.Mesh(oneWTCGeo, modernGlassMaterial);
            oneWTC.position.y = 8;
            oneWTCGroup.add(oneWTC);

            // Beveled top
            const bevelGeo = new THREE.ConeGeometry(1, 2, 4);
            const bevel = new THREE.Mesh(bevelGeo, modernGlassMaterial);
            bevel.position.y = 17;
            bevel.rotation.y = Math.PI / 4;
            oneWTCGroup.add(bevel);

            oneWTCGroup.position.set(0, 0, -3);
            nycSkyline.add(oneWTCGroup);

            // FLATIRON BUILDING (Front left)
            const flatironGroup = new THREE.Group();
            
            // Triangular base
            const flatironShape = new THREE.Shape();
            flatironShape.moveTo(0, 0);
            flatironShape.lineTo(1.5, 0);
            flatironShape.lineTo(0.75, 2);
            flatironShape.lineTo(0, 0);
            
            const flatironGeo = new THREE.ExtrudeGeometry(flatironShape, { depth: 10, bevelEnabled: false });
            const flatiron = new THREE.Mesh(flatironGeo, brickMaterial);
            flatiron.position.set(-0.75, 5, -1);
            flatiron.rotation.x = -Math.PI / 2;
            flatironGroup.add(flatiron);

            flatironGroup.position.set(-4, 0, 2);
            nycSkyline.add(flatironGroup);

            // ADDITIONAL SKYSCRAPERS
            const buildingPositions = [
                { x: 4, z: 2, height: 10, width: 1, material: glassMaterial },
                { x: -1, z: -2, height: 8, width: 0.8, material: brickMaterial },
                { x: 3, z: -3, height: 12, width: 1.1, material: modernGlassMaterial },
                { x: -3, z: -1, height: 7, width: 0.9, material: artDecoMaterial },
                { x: 1, z: 3, height: 9, width: 0.7, material: glassMaterial },
                { x: -2, z: -4, height: 6, width: 0.8, material: brickMaterial },
            ];

            buildingPositions.forEach((building, index) => {
                const buildingGeo = new THREE.BoxGeometry(building.width, building.height, building.width);
                const buildingMesh = new THREE.Mesh(buildingGeo, building.material);
                buildingMesh.position.set(building.x, building.height / 2, building.z);
                nycSkyline.add(buildingMesh);

                // Add some windows/details
                if (building.material === glassMaterial || building.material === modernGlassMaterial) {
                    for (let floor = 1; floor < building.height; floor += 1.5) {
                        const windowGeo = new THREE.PlaneGeometry(building.width * 0.8, 0.8);
                        const windowMat = new THREE.MeshBasicMaterial({ 
                            color: 0xffff88, 
                            transparent: true, 
                            opacity: 0.6 
                        });
                        const window1 = new THREE.Mesh(windowGeo, windowMat);
                        window1.position.set(building.x, floor, building.z + building.width/2 + 0.01);
                        nycSkyline.add(window1);
                        
                        const window2 = new THREE.Mesh(windowGeo, windowMat);
                        window2.position.set(building.x + building.width/2 + 0.01, floor, building.z);
                        window2.rotation.y = Math.PI / 2;
                        nycSkyline.add(window2);
                    }
                }
            });

            // Position the entire cityscape
            nycSkyline.position.y = 0;
            scene.add(nycSkyline);
        };

        const createGround = () => {
            // Manhattan street grid base
            const groundGeo = new THREE.PlaneGeometry(20, 20);
            const groundMat = new THREE.MeshStandardMaterial({ 
                color: 0x333333, 
                metalness: 0.1, 
                roughness: 0.8
            });
            const ground = new THREE.Mesh(groundGeo, groundMat);
            ground.rotation.x = -Math.PI / 2;
            ground.position.y = -0.1;
            scene.add(ground);

            // Create street grid pattern
            const streetMat = new THREE.MeshStandardMaterial({ 
                color: 0x1a1a1a, 
                metalness: 0.2, 
                roughness: 0.7
            });

            // North-South streets
            for (let i = -3; i <= 3; i++) {
                const streetGeo = new THREE.PlaneGeometry(0.3, 20);
                const street = new THREE.Mesh(streetGeo, streetMat);
                street.rotation.x = -Math.PI / 2;
                street.position.set(i * 2.5, 0, 0);
                scene.add(street);
            }

            // East-West streets
            for (let i = -3; i <= 3; i++) {
                const streetGeo = new THREE.PlaneGeometry(20, 0.3);
                const street = new THREE.Mesh(streetGeo, streetMat);
                street.rotation.x = -Math.PI / 2;
                street.position.set(0, 0, i * 2.5);
                scene.add(street);
            }

            // Add some perimeter buildings for NYC skyline effect
            const perimeterBuildings = [
                { x: -8, z: -8, width: 1.5, height: 4 },
                { x: -8, z: 8, width: 1.2, height: 6 },
                { x: 8, z: -8, width: 1.3, height: 5 },
                { x: 8, z: 8, width: 1.4, height: 7 },
                { x: -8, z: 0, width: 1.1, height: 3 },
                { x: 8, z: 0, width: 1.6, height: 8 },
                { x: 0, z: -8, width: 1.2, height: 4 },
                { x: 0, z: 8, width: 1.3, height: 5 },
            ];

            perimeterBuildings.forEach(building => {
                const buildingGeo = new THREE.BoxGeometry(building.width, building.height, building.width);
                const buildingMat = new THREE.MeshStandardMaterial({
                    color: 0x505060,
                    metalness: 0.3,
                    roughness: 0.7
                });
                const buildingMesh = new THREE.Mesh(buildingGeo, buildingMat);
                buildingMesh.position.set(building.x, building.height / 2, building.z);
                scene.add(buildingMesh);

                // Add windows
                for (let floor = 1; floor < building.height; floor += 1) {
                    const windowGeo = new THREE.PlaneGeometry(building.width * 0.7, 0.3);
                    const windowMat = new THREE.MeshBasicMaterial({ 
                        color: 0xffff66, 
                        transparent: true, 
                        opacity: 0.4 
                    });
                    const window1 = new THREE.Mesh(windowGeo, windowMat);
                    window1.position.set(building.x, floor, building.z + building.width/2 + 0.01);
                    scene.add(window1);
                }
            });

            // Add Central Park representation (green rectangle)
            const parkGeo = new THREE.PlaneGeometry(3, 6);
            const parkMat = new THREE.MeshStandardMaterial({ 
                color: 0x228B22, 
                metalness: 0.0, 
                roughness: 1.0 
            });
            const park = new THREE.Mesh(parkGeo, parkMat);
            park.rotation.x = -Math.PI / 2;
            park.position.set(-6, 0.01, -2);
            scene.add(park);

            // Add some trees in the park
            for (let i = 0; i < 12; i++) {
                const treeHeight = Math.random() * 0.5 + 0.8;
                const treeGeo = new THREE.CylinderGeometry(0.1, 0.1, treeHeight, 6);
                const treeMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
                const tree = new THREE.Mesh(treeGeo, treeMat);
                
                const foliageGeo = new THREE.SphereGeometry(0.3, 8, 6);
                const foliageMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
                const foliage = new THREE.Mesh(foliageGeo, foliageMat);
                foliage.position.y = treeHeight;
                tree.add(foliage);

                tree.position.set(
                    -6 + (Math.random() - 0.5) * 2.5,
                    treeHeight / 2,
                    -2 + (Math.random() - 0.5) * 5
                );
                scene.add(tree);
            }
        };

        const createParticles = () => {
            const particleCount = 800;
            const positions = new Float32Array(particleCount * 3);
            const geometry = new THREE.BufferGeometry();
            for (let i = 0; i < particleCount; i++) {
                positions[i*3] = (Math.random() - 0.5) * 25;
                positions[i*3 + 1] = Math.random() * 20 + 5; // Higher in the sky
                positions[i*3 + 2] = (Math.random() - 0.5) * 25;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const material = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.02,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                opacity: 0.4
            });
            particleSystem = new THREE.Points(geometry, material);
            scene.add(particleSystem);
        };
        
        const createOrbitingLights = () => {
            // Airplane lights circling the city
            for(let i = 0; i < 3; i++) {
                const light = new THREE.PointLight(0xff4444, 2, 12);
                const sphereGeo = new THREE.SphereGeometry(0.05, 8, 8);
                const sphereMat = new THREE.MeshBasicMaterial({ 
                    color: 0xff6666,
                    transparent: true,
                    opacity: 0.9
                });
                light.add(new THREE.Mesh(sphereGeo, sphereMat));
                orbitingLights.add(light);
            }
            
            // Add some helicopter/police lights
            for(let i = 0; i < 2; i++) {
                const light = new THREE.PointLight(0x4444ff, 1.5, 10);
                const sphereGeo = new THREE.SphereGeometry(0.04, 8, 8);
                const sphereMat = new THREE.MeshBasicMaterial({ 
                    color: 0x6666ff,
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

            // Animate particles (snow/dust in the city air)
            const positions = particleSystem.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += 0.005; // Slower drift
                positions[i] += Math.sin(elapsedTime + i) * 0.002; // Slight wind effect
                if (positions[i + 1] > 25) positions[i + 1] = 5;
            }
            particleSystem.geometry.attributes.position.needsUpdate = true;

            // Animate orbiting lights (aircraft circling NYC)
            orbitingLights.children.forEach((light, index) => {
                const speed = index < 3 ? 0.2 : 0.4; // Different speeds for airplanes vs helicopters
                const angle = elapsedTime * speed + index * (Math.PI * 2 / 5);
                const radius = 8 + Math.sin(elapsedTime * 0.3 + index) * 2;
                light.position.x = Math.cos(angle) * radius;
                light.position.z = Math.sin(angle) * radius;
                light.position.y = index < 3 ? 15 + Math.sin(angle * 0.5) * 2 : 8 + Math.sin(elapsedTime + index) * 1;
            });

            // Subtle city rotation for dynamic effect
            if (nycSkyline) {
                nycSkyline.rotation.y = elapsedTime * 0.02;
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

export default NewYorkCityscape;