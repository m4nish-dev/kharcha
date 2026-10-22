import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Creates a high-resolution canvas texture for the Rupee coin face.
 */
function createCoinTexture(symbol = '₹', isGold = false) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) return null;

  // Background radial metal gradient
  const grad = ctx.createRadialGradient(256, 256, 50, 256, 256, 256);
  if (isGold) {
    grad.addColorStop(0, '#fef3c7');
    grad.addColorStop(0.5, '#f59e0b');
    grad.addColorStop(0.85, '#d97706');
    grad.addColorStop(1, '#92400e');
  } else {
    grad.addColorStop(0, '#d1fae5');
    grad.addColorStop(0.4, '#34d399');
    grad.addColorStop(0.8, '#059669');
    grad.addColorStop(1, '#064e3b');
  }
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(256, 256, 254, 0, Math.PI * 2);
  ctx.fill();

  // Concentric milled border ring
  ctx.strokeStyle = isGold ? '#fbbf24' : '#6ee7b7';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(256, 256, 230, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = isGold ? 'rgba(146, 64, 14, 0.6)' : 'rgba(6, 78, 59, 0.6)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(256, 256, 215, 0, Math.PI * 2);
  ctx.stroke();

  // Edge ridges / beads
  const numDots = 48;
  for (let i = 0; i < numDots; i++) {
    const angle = (i / numDots) * Math.PI * 2;
    const x = 256 + Math.cos(angle) * 230;
    const y = 256 + Math.sin(angle) * 230;
    ctx.fillStyle = isGold ? '#ffffff' : '#ecfdf5';
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Embossed Rupee Symbol
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 4;
  ctx.font = 'bold 220px "JetBrains Mono", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(symbol, 256, 264);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  return texture;
}

export default function RupeeCoinsScene() {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl =
        testCanvas.getContext('webgl') ||
        testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 4. Lighting setup (Studio Rig)
    const ambientLight = new THREE.AmbientLight(0x0e2417, 1.2);
    scene.add(ambientLight);

    // Main directional key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    // Mint rim backlight
    const rimLight = new THREE.DirectionalLight(0x34d399, 3.2);
    rimLight.position.set(-4, -3, -2);
    scene.add(rimLight);

    // Warm specular fill
    const fillLight = new THREE.DirectionalLight(0xfef08a, 1.5);
    fillLight.position.set(0, -4, 4);
    scene.add(fillLight);

    // 5. Textures
    const mintTexture = createCoinTexture('₹', false);
    const goldTexture = createCoinTexture('₹', true);

    // 6. Coin Geometries & Materials
    const coinGeometry = new THREE.CylinderGeometry(1.4, 1.4, 0.16, 48);

    const emeraldCoinMaterial = [
      new THREE.MeshStandardMaterial({
        color: 0x065f46,
        metalness: 0.85,
        roughness: 0.3,
      }), // side edge
      new THREE.MeshStandardMaterial({
        map: mintTexture,
        metalness: 0.65,
        roughness: 0.25,
      }), // top
      new THREE.MeshStandardMaterial({
        map: mintTexture,
        metalness: 0.65,
        roughness: 0.25,
      }), // bottom
    ];

    const goldCoinMaterial = [
      new THREE.MeshStandardMaterial({
        color: 0xb45309,
        metalness: 0.9,
        roughness: 0.25,
      }),
      new THREE.MeshStandardMaterial({
        map: goldTexture,
        metalness: 0.75,
        roughness: 0.2,
      }),
      new THREE.MeshStandardMaterial({
        map: goldTexture,
        metalness: 0.75,
        roughness: 0.2,
      }),
    ];

    // Primary Emerald Hero Coin
    const primaryCoin = new THREE.Mesh(coinGeometry, emeraldCoinMaterial);
    primaryCoin.position.set(-0.2, 0.1, 0.4);
    primaryCoin.rotation.set(0.65, -0.45, 0.2);
    scene.add(primaryCoin);

    // Secondary Gold Accent Coin (Offset right & back)
    const secondaryCoin = new THREE.Mesh(
      new THREE.CylinderGeometry(0.95, 0.95, 0.12, 40),
      goldCoinMaterial
    );
    secondaryCoin.position.set(1.65, -0.7, -0.8);
    secondaryCoin.rotation.set(-0.5, 0.75, -0.3);
    scene.add(secondaryCoin);

    // Tertiary Small Mint Coin (Offset top-left & back)
    const tertiaryCoin = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 0.7, 0.1, 36),
      emeraldCoinMaterial
    );
    tertiaryCoin.position.set(-1.8, 1.2, -1.2);
    tertiaryCoin.rotation.set(0.4, 0.8, -0.2);
    scene.add(tertiaryCoin);

    // 7. Mouse tracking parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // 8. Animation Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Primary Coin Float & Oscillation
      primaryCoin.position.y = 0.1 + Math.sin(elapsedTime * 1.4) * 0.12;
      primaryCoin.rotation.y = -0.45 + Math.sin(elapsedTime * 0.8) * 0.2 + mouseX * 0.8;
      primaryCoin.rotation.x = 0.65 + Math.cos(elapsedTime * 0.9) * 0.15 + mouseY * 0.8;

      // Secondary Coin Float
      secondaryCoin.position.y = -0.7 + Math.sin(elapsedTime * 1.2 + 1.2) * 0.15;
      secondaryCoin.rotation.y = 0.75 + elapsedTime * 0.25 + mouseX * 0.5;

      // Tertiary Coin Float
      tertiaryCoin.position.y = 1.2 + Math.cos(elapsedTime * 1.5 + 2) * 0.14;
      tertiaryCoin.rotation.x = 0.4 + elapsedTime * 0.35 + mouseY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coinGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      {/* Graceful Fallback if WebGL unavailable */}
      {!webglSupported && (
        <div
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, #34d399 0%, #059669 60%, #064e3b 100%)',
            border: '6px solid #6ee7b7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow:
              '0 20px 50px rgba(16, 185, 129, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
            fontFamily: 'var(--font-mono)',
            fontSize: '5rem',
            fontWeight: 800,
            color: '#ffffff',
          }}
        >
          ₹
        </div>
      )}
    </div>
  );
}
