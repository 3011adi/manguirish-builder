import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Model = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controlsRef = useRef<any>();
  const buildingsRef = useRef<THREE.Group>();
  const particlesRef = useRef<THREE.Points>();
  const vehiclesRef = useRef<THREE.Group>();
  const hologramsRef = useRef<THREE.Group>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with homepage colors
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.Fog(0x0f1419, 20, 300); // Dark navy fog

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 40, 80);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Simple controls (OrbitControls equivalent)
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // City ground with homepage-themed circuit patterns
    const groundGeometry = new THREE.PlaneGeometry(400, 400, 100, 100);
    const groundMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x1a1f2e) }, // Dark navy base
        color2: { value: new THREE.Color(0x2a3441) }  // Slightly lighter navy
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        
        void main() {
          vec2 grid = fract(vUv * 50.0);
          float lines = smoothstep(0.0, 0.1, grid.x) * smoothstep(0.0, 0.1, grid.y);
          float pulse = sin(time * 2.0 + vUv.x * 10.0) * 0.5 + 0.5;
          
          vec3 finalColor = mix(color1, color2, lines * pulse);
          // Golden accent lines
          finalColor += vec3(1.0, 0.6, 0.1) * lines * pulse * 0.4;
          
          gl_FragColor = vec4(finalColor, 0.9);
        }
      `,
      transparent: true
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Golden energy grid overlay
    const gridGeometry = new THREE.BufferGeometry();
    const gridPositions = [];
    const gridColors = [];
    
    for (let i = -200; i <= 200; i += 10) {
      // Vertical lines
      gridPositions.push(i, 0, -200, i, 0, 200);
      gridColors.push(1.0, 0.6, 0.1, 1.0, 0.6, 0.1, 1.0, 0.6, 0.1, 1.0, 0.6, 0.1); // Golden
      
      // Horizontal lines
      gridPositions.push(-200, 0, i, 200, 0, i);
      gridColors.push(1.0, 0.6, 0.1, 1.0, 0.6, 0.1, 1.0, 0.6, 0.1, 1.0, 0.6, 0.1); // Golden
    }
    
    gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(gridPositions, 3));
    gridGeometry.setAttribute('color', new THREE.Float32BufferAttribute(gridColors, 3));
    
    const gridMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.15
    });
    const gridLines = new THREE.LineSegments(gridGeometry, gridMaterial);
    gridLines.position.y = 0.1;
    scene.add(gridLines);

    // Buildings group
    const buildings = new THREE.Group();
    buildingsRef.current = buildings;
    scene.add(buildings);

    // Create homepage-themed futuristic buildings
    const createThemedBuilding = (x: number, z: number, height: number, type: number) => {
      const buildingGroup = new THREE.Group();

      if (type === 0) {
        // Golden Neo-Gothic Spire
        const mainGeometry = new THREE.CylinderGeometry(1, 4, height, 8);
        const mainMaterial = new THREE.MeshPhongMaterial({
          color: 0x2a3441, // Dark navy
          transparent: true,
          opacity: 0.9,
          emissive: 0x1a1f2e
        });
        const mainBuilding = new THREE.Mesh(mainGeometry, mainMaterial);
        mainBuilding.position.y = height / 2;
        mainBuilding.castShadow = true;
        buildingGroup.add(mainBuilding);

        // Golden energy rings
        for (let i = 0; i < 5; i++) {
          const ringGeometry = new THREE.TorusGeometry(3 + i * 0.5, 0.1, 8, 16);
          const ringMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(1.0, 0.6 + i * 0.05, 0.1), // Golden gradient
            transparent: true,
            opacity: 0.7
          });
          const ring = new THREE.Mesh(ringGeometry, ringMaterial);
          ring.position.y = height * 0.2 + i * (height * 0.15);
          ring.rotation.x = Math.PI / 2;
          buildingGroup.add(ring);
        }

        // Golden energy beam
        const beamGeometry = new THREE.CylinderGeometry(0.2, 0.2, height * 1.5, 8);
        const beamMaterial = new THREE.MeshBasicMaterial({
          color: 0xffa500, // Orange-gold
          transparent: true,
          opacity: 0.8
        });
        const beam = new THREE.Mesh(beamGeometry, beamMaterial);
        beam.position.y = height + height * 0.75;
        buildingGroup.add(beam);

      } else if (type === 1) {
        // Grey Steel Tower
        const crystalGeometry = new THREE.ConeGeometry(3, height, 6);
        const crystalMaterial = new THREE.MeshPhongMaterial({
          color: 0x4a4a4a, // Medium grey
          transparent: true,
          opacity: 0.9,
          emissive: 0x1a1a1a, // Dark grey emissive
          shininess: 30
        });
        const crystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
        crystal.position.y = height / 2;
        crystal.castShadow = true;
        buildingGroup.add(crystal);

        // Grey floating panels
        for (let i = 0; i < 8; i++) {
          const shardGeometry = new THREE.BoxGeometry(1, 0.1, 1);
          const shardMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0.6 + i * 0.02, 0.6 + i * 0.02, 0.6 + i * 0.02), // Grey variations
            transparent: true,
            opacity: 0.8
          });
          const shard = new THREE.Mesh(shardGeometry, shardMaterial);
          const angle = (i / 8) * Math.PI * 2;
          shard.position.set(
            Math.cos(angle) * 6,
            height + 3 + Math.sin(i) * 2,
            Math.sin(angle) * 6
          );
          buildingGroup.add(shard);
        }

      } else if (type === 2) {
        // Grey Mega Structure
        const baseGeometry = new THREE.BoxGeometry(6, height * 0.3, 6);
        const baseMaterial = new THREE.MeshPhongMaterial({
          color: 0x3a3a3a, // Dark grey
          emissive: 0x1a1a1a
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = height * 0.15;
        base.castShadow = true;
        buildingGroup.add(base);

        // Grey accent platforms
        for (let i = 1; i <= 4; i++) {
          const platformGeometry = new THREE.CylinderGeometry(4 - i * 0.5, 4 - i * 0.5, 0.5, 8);
          const platformMaterial = new THREE.MeshPhongMaterial({
            color: 0x555555, // Medium grey
            emissive: new THREE.Color(0.1, 0.1, 0.1) // Grey emissive
          });
          const platform = new THREE.Mesh(platformGeometry, platformMaterial);
          platform.position.y = height * 0.3 + i * (height * 0.15);
          buildingGroup.add(platform);

          // Grey energy conduits
          const conduitGeometry = new THREE.CylinderGeometry(0.1, 0.1, height * 0.15, 8);
          const conduitMaterial = new THREE.MeshBasicMaterial({
            color: 0x777777, // Light grey
            transparent: true,
            opacity: 0.9
          });
          for (let j = 0; j < 4; j++) {
            const conduit = new THREE.Mesh(conduitGeometry, conduitMaterial);
            const angle = (j / 4) * Math.PI * 2;
            conduit.position.set(
              Math.cos(angle) * 3,
              height * 0.3 + (i - 0.5) * (height * 0.15),
              Math.sin(angle) * 3
            );
            buildingGroup.add(conduit);
          }
        }

      } else {
        // Grey Twisted Helix Tower
        const helixGroup = new THREE.Group();
        
        for (let i = 0; i < height; i += 2) {
          const segmentGeometry = new THREE.BoxGeometry(2, 2, 1);
          const segmentMaterial = new THREE.MeshPhongMaterial({
            color: new THREE.Color(0.4 + i * 0.003, 0.4 + i * 0.003, 0.4 + i * 0.003), // Grey variations
            emissive: new THREE.Color(0.05, 0.05, 0.05) // Subtle grey emissive
          });
          const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);
          segment.position.y = i;
          segment.rotation.y = (i / height) * Math.PI * 2;
          segment.castShadow = true;
          helixGroup.add(segment);
        }
        
        buildingGroup.add(helixGroup);
      }

      buildingGroup.position.set(x, 0, z);
      return buildingGroup;
    };

    // Generate themed metropolis
    for (let i = 0; i < 80; i++) {
      const x = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;
      const height = Math.random() * 40 + 10;
      const type = Math.floor(Math.random() * 4);
      
      if (Math.sqrt(x * x + z * z) > 15) {
        buildings.add(createThemedBuilding(x, z, height, type));
      }
    }

    // Central Golden Nexus Tower
    const nexusGeometry = new THREE.CylinderGeometry(2, 8, 60, 12);
    const nexusMaterial = new THREE.MeshPhongMaterial({
      color: 0x3a3441, // Dark navy
      transparent: true,
      opacity: 0.9,
      emissive: 0x331100 // Golden emissive
    });
    const nexusTower = new THREE.Mesh(nexusGeometry, nexusMaterial);
    nexusTower.position.y = 30;
    nexusTower.castShadow = true;
    scene.add(nexusTower);

    // Golden nexus energy field
    const fieldGeometry = new THREE.SphereGeometry(12, 32, 32);
    const fieldMaterial = new THREE.MeshBasicMaterial({
      color: 0xffa500, // Golden orange
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    });
    const energyField = new THREE.Mesh(fieldGeometry, fieldMaterial);
    energyField.position.y = 30;
    scene.add(energyField);

    // Flying vehicles with golden accents
    const vehicles = new THREE.Group();
    vehiclesRef.current = vehicles;
    scene.add(vehicles);

    for (let i = 0; i < 15; i++) {
      const vehicleGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 8);
      const vehicleMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(1.0, 0.4 + Math.random() * 0.4, 0.0), // Golden variations
        transparent: true,
        opacity: 0.8
      });
      const vehicle = new THREE.Mesh(vehicleGeometry, vehicleMaterial);
      
      vehicle.position.set(
        (Math.random() - 0.5) * 150,
        Math.random() * 40 + 20,
        (Math.random() - 0.5) * 150
      );
      
      vehicle.userData = {
        speed: Math.random() * 0.02 + 0.01,
        radius: Math.random() * 50 + 30,
        angle: Math.random() * Math.PI * 2,
        height: vehicle.position.y
      };
      
      vehicles.add(vehicle);
    }

    // Golden holographic displays
    const holograms = new THREE.Group();
    hologramsRef.current = holograms;
    scene.add(holograms);

    for (let i = 0; i < 20; i++) {
      const holoGeometry = new THREE.PlaneGeometry(4, 6);
      const holoMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          opacity: { value: 0.6 }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float opacity;
          varying vec2 vUv;
          
          void main() {
            vec2 uv = vUv;
            float scanline = sin(uv.y * 20.0 + time * 10.0) * 0.5 + 0.5;
            float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
            
            // Golden color scheme
            vec3 color = vec3(1.0, 0.6, 0.1);
            color += vec3(1.0, 0.4, 0.0) * scanline;
            color += noise * 0.1;
            
            float alpha = opacity * (0.7 + scanline * 0.3);
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide
      });
      
      const hologram = new THREE.Mesh(holoGeometry, holoMaterial);
      hologram.position.set(
        (Math.random() - 0.5) * 100,
        Math.random() * 30 + 10,
        (Math.random() - 0.5) * 100
      );
      hologram.rotation.y = Math.random() * Math.PI * 2;
      
      holograms.add(hologram);
    }

    // Golden particle system
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 300;
      particlePositions[i * 3 + 1] = Math.random() * 100;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 300;
      
      // Golden particle colors
      const color = new THREE.Color(1.0, 0.4 + Math.random() * 0.4, Math.random() * 0.2);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // Homepage-themed lighting system
    const ambientLight = new THREE.AmbientLight(0x1a1f2e, 0.3); // Dark navy ambient
    scene.add(ambientLight);

    // Main directional light with golden tint
    const directionalLight = new THREE.DirectionalLight(0xffa500, 1.2); // Golden light
    directionalLight.position.set(30, 50, 30);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 200;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    scene.add(directionalLight);

    // Golden city lights
    const cityLights = [];
    for (let i = 0; i < 12; i++) {
      const light = new THREE.PointLight(
        new THREE.Color(1.0, 0.5 + Math.random() * 0.3, Math.random() * 0.2), // Golden variations
        2,
        80
      );
      light.position.set(
        (Math.random() - 0.5) * 150,
        Math.random() * 20 + 10,
        (Math.random() - 0.5) * 150
      );
      cityLights.push(light);
      scene.add(light);
    }

    // Homepage-themed skybox
    const skyboxGeometry = new THREE.SphereGeometry(500, 32, 32);
    const skyboxMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vWorldPosition;
        
        void main() {
          vec3 direction = normalize(vWorldPosition);
          float elevation = direction.y;
          
          // Homepage navy colors
          vec3 skyColor = vec3(0.06, 0.08, 0.1); // Dark navy
          vec3 horizonColor = vec3(0.1, 0.12, 0.18); // Lighter navy
          
          float mixFactor = pow(max(elevation, 0.0), 0.4);
          vec3 color = mix(horizonColor, skyColor, mixFactor);
          
          // Add golden aurora effect
          float aurora = sin(direction.x * 5.0 + time) * sin(direction.z * 3.0 + time * 0.7) * 0.15;
          if (elevation > 0.3) {
            // Golden aurora instead of blue
            color += vec3(aurora * 0.8, aurora * 0.4, 0.0) * max(0.0, elevation - 0.3);
          }
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide
    });
    const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    scene.add(skybox);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Simple camera rotation based on mouse
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;
      
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.lookAt(0, 0, 0);

      // Auto-rotate the camera around the scene
      const radius = 80;
      camera.position.x = Math.cos(time * 0.1) * radius;
      camera.position.z = Math.sin(time * 0.1) * radius;
      camera.lookAt(0, 10, 0);

      // Update ground shader
      if (ground.material.uniforms) {
        ground.material.uniforms.time.value = time;
      }

      // Animate buildings with golden emissive
      if (buildings) {
        buildings.children.forEach((building, index) => {
          building.rotation.y = time * 0.05 + index * 0.1;
          building.position.y = Math.sin(time * 0.5 + index) * 0.3;
          
          building.traverse((child: any) => {
            if (child.material && child.material.emissive) {
              // Check if it's a golden building (type 0) or grey building (types 1-3)
              const buildingType = index % 4;
              if (buildingType === 0) {
                // Golden emissive animation for golden buildings
                child.material.emissive.setRGB(
                  0.3 + Math.sin(time + index) * 0.1,
                  0.15 + Math.sin(time + index) * 0.05,
                  0.0
                );
              } else {
                // Grey emissive animation for grey buildings
                const greyIntensity = 0.1 + Math.sin(time + index) * 0.05;
                child.material.emissive.setRGB(greyIntensity, greyIntensity, greyIntensity);
              }
            }
          });
        });
      }

      // Animate nexus tower with golden glow
      if (nexusTower) {
        nexusTower.rotation.y = time * 0.1;
        nexusTower.material.emissive.setRGB(
          0.4 + Math.sin(time * 2) * 0.1,
          0.2 + Math.sin(time * 2) * 0.05,
          0.0
        );
      }

      // Animate energy field
      if (energyField) {
        energyField.rotation.x = time * 0.2;
        energyField.rotation.y = time * 0.15;
        energyField.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
      }

      // Animate flying vehicles
      if (vehicles) {
        vehicles.children.forEach((vehicle: any) => {
          vehicle.userData.angle += vehicle.userData.speed;
          vehicle.position.x = Math.cos(vehicle.userData.angle) * vehicle.userData.radius;
          vehicle.position.z = Math.sin(vehicle.userData.angle) * vehicle.userData.radius;
          vehicle.position.y = vehicle.userData.height + Math.sin(time + vehicle.userData.angle) * 3;
          vehicle.rotation.y = vehicle.userData.angle + Math.PI / 2;
        });
      }

      // Animate holograms
      if (holograms) {
        holograms.children.forEach((hologram: any, index) => {
          hologram.rotation.y += 0.01;
          hologram.position.y += Math.sin(time * 2 + index) * 0.02;
          if (hologram.material.uniforms) {
            hologram.material.uniforms.time.value = time;
          }
        });
      }

      // Animate particles
      if (particles) {
        particles.rotation.y = time * 0.02;
        const positions = particles.geometry.attributes.position.array as Float32Array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += 0.05;
          if (positions[i] > 100) positions[i] = 0;
        }
        particles.geometry.attributes.position.needsUpdate = true;
      }

      // Animate city lights
      cityLights.forEach((light, index) => {
        light.intensity = 2 + Math.sin(time * 3 + index) * 1;
      });

      // Update skybox
      if (skybox.material.uniforms) {
        skybox.material.uniforms.time.value = time;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full absolute inset-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, #1a1f2e 0%, #0f1419 70%)'
      }} 
    />
  );
};

export default Model;