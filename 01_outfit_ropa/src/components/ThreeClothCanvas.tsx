import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeClothCanvasProps {
  theme: 'cream' | 'dark' | 'red';
  mode?: 'hero-overlay' | 'showroom' | 'product-sculpt';
  accentColor?: string;
  wireframe?: boolean;
  interactiveLabel?: string;
}

export const ThreeClothCanvas: React.FC<ThreeClothCanvasProps> = ({
  theme,
  mode = 'hero-overlay',
  accentColor,
  wireframe = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, mode === 'showroom' ? 6.2 : 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Theme-aware colors
    const palette = {
      cream: {
        primary: accentColor || '#141414',
        emissive: '#ff0001',
        wire: '#ff0001',
        light1: '#ffffff',
        light2: '#ff0001',
      },
      dark: {
        primary: accentColor || '#ede4dd',
        emissive: '#ff0001',
        wire: '#ff0001',
        light1: '#ede4dd',
        light2: '#ff0001',
      },
      red: {
        primary: accentColor || '#ff0001',
        emissive: '#000000',
        wire: '#000000',
        light1: '#ede4dd',
        light2: '#000000',
      },
    }[theme];

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(palette.light1, 2.6);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.PointLight(palette.light2, 3.8, 14);
    dirLight2.position.set(-3, -2, 3);
    scene.add(dirLight2);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Sculptural Woven Cloth / Torus Knot / Kinetic Fabric Geometry
    const geometry =
      mode === 'showroom'
        ? new THREE.TorusKnotGeometry(1.35, 0.42, 220, 48, 2, 3)
        : mode === 'product-sculpt'
        ? new THREE.IcosahedronGeometry(1.55, 24)
        : new THREE.PlaneGeometry(5.6, 2.7, 96, 48);

    // Store base positions for organic cloth wave vertex displacement
    const posAttr = geometry.attributes.position;
    const basePositions = new Float32Array(posAttr.array.length);
    basePositions.set(posAttr.array);

    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(palette.primary),
      roughness: 0.28,
      metalness: 0.18,
      clearcoat: 0.65,
      clearcoatRoughness: 0.2,
      wireframe: wireframe,
      side: THREE.DoubleSide,
    });

    const mainMesh = new THREE.Mesh(geometry, material);
    group.add(mainMesh);

    // Secondary architectural wireframe cage for Awwwards technical look
    const wireGeo =
      mode === 'hero-overlay'
        ? new THREE.TorusKnotGeometry(0.95, 0.26, 120, 20)
        : new THREE.OctahedronGeometry(2.15, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(palette.wire),
      wireframe: true,
      transparent: true,
      opacity: mode === 'hero-overlay' ? 0.32 : 0.22,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    // Floating archival particles around the sculpture
    const particleCount = 90;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 9;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(palette.wire),
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse & Scroll Reactivity
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isDown: false };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerDown = () => {
      mouse.isDown = true;
    };
    const handlePointerUp = () => {
      mouse.isDown = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Displace vertices like wind-blown heavyweight studio fabric
      const positions = posAttr.array as Float32Array;
      const waveAmp = mouse.isDown ? 0.36 : 0.22;
      for (let i = 0; i < positions.length; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];

        const dist = Math.sqrt((bx - mouse.x * 2.2) ** 2 + (by - mouse.y * 1.4) ** 2);
        const ripple = Math.sin(bx * 1.8 + t * 2.1) * Math.cos(by * 1.6 + t * 1.7) * waveAmp;
        const cursorPush = Math.max(0, 1.35 - dist) * 0.32 * Math.sin(t * 3.5);

        if (mode === 'hero-overlay') {
          positions[i + 2] = bz + ripple + cursorPush;
        } else {
          const factor = 1 + (ripple * 0.35 + cursorPush * 0.4);
          positions[i] = bx * factor;
          positions[i + 1] = by * factor;
          positions[i + 2] = bz * factor;
        }
      }
      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      // Rotate sculpture smoothly
      if (mode === 'hero-overlay') {
        mainMesh.rotation.x = -0.35 + mouse.y * 0.28;
        mainMesh.rotation.y = mouse.x * 0.35 + Math.sin(t * 0.4) * 0.15;
        wireMesh.rotation.x = t * 0.35 + mouse.y * 0.5;
        wireMesh.rotation.y = t * 0.45 + mouse.x * 0.5;
      } else {
        group.rotation.y = t * 0.35 + mouse.x * 0.9;
        group.rotation.x = Math.sin(t * 0.5) * 0.25 + mouse.y * 0.6;
        wireMesh.rotation.z = -t * 0.2;
      }

      particles.rotation.y = -t * 0.06 + mouse.x * 0.15;
      dirLight2.position.x = mouse.x * 4;
      dirLight2.position.y = mouse.y * 3;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || 420;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [theme, mode, accentColor, wireframe]);

  return (
    <div
      ref={mountRef}
      className="relative h-full w-full select-none"
      data-cursor="drag"
    />
  );
};
