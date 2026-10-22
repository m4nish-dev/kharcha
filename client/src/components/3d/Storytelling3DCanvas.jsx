import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Creates a high-res minted Rupee canvas texture.
 */
function createCoinFaceTexture(symbol = '₹', isGold = false) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Background radial metal gradient
  const grad = ctx.createRadialGradient(256, 256, 50, 256, 256, 256);
  if (isGold) {
    grad.addColorStop(0, '#fef3c7');
    grad.addColorStop(0.4, '#f59e0b');
    grad.addColorStop(0.85, '#d97706');
    grad.addColorStop(1, '#78350f');
  } else {
    grad.addColorStop(0, '#d1fae5');
    grad.addColorStop(0.35, '#34d399');
    grad.addColorStop(0.8, '#059669');
    grad.addColorStop(1, '#064e3b');
  }
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(256, 256, 254, 0, Math.PI * 2);
  ctx.fill();

  // Concentric milled border
  ctx.strokeStyle = isGold ? '#fbbf24' : '#6ee7b7';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(256, 256, 230, 0, Math.PI * 2);
  ctx.stroke();

  // Decorative serrations
  const numDots = 40;
  for (let i = 0; i < numDots; i++) {
    const angle = (i / numDots) * Math.PI * 2;
    const x = 256 + Math.cos(angle) * 230;
    const y = 256 + Math.sin(angle) * 230;
    ctx.fillStyle = isGold ? '#ffffff' : '#ecfdf5';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Embossed Rupee Symbol
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 4;
  ctx.font = 'bold 230px "Outfit", "Inter", -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(symbol, 256, 266);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * 3D Rupee Coin Mesh with smooth interpolated position and rotation per scene.
 */
function RupeeCoin({ index, isGold, targetPositions, targetRotations, targetScales }) {
  const meshRef = useRef();

  // Textures
  const texture = useMemo(() => createCoinFaceTexture('₹', isGold), [isGold]);

  const materials = useMemo(() => {
    const edgeMat = new THREE.MeshStandardMaterial({
      color: isGold ? '#d97706' : '#059669',
      metalness: 0.9,
      roughness: 0.22,
    });

    const faceMat = new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.85,
      roughness: 0.26,
    });

    // Top & bottom faces get texture, cylinder edge gets edgeMat
    return [edgeMat, faceMat, faceMat];
  }, [texture, isGold]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = Math.min(delta * 4.5, 1);

    const targetPos = targetPositions[index] || [0, 0, 0];
    const targetRot = targetRotations[index] || [0, 0, 0];
    const targetScale = targetScales[index] || 1;

    // Smooth position lerp
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetPos[0], t);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPos[1], t);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetPos[2], t);

    // Continuous gentle floating wobble + target rotation lerp
    const wobbleY = Math.sin(state.clock.elapsedTime * 1.5 + index) * 0.08;
    const wobbleX = Math.cos(state.clock.elapsedTime * 1.2 + index) * 0.06;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRot[0] + wobbleX, t);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRot[1] + wobbleY, t);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRot[2], t);

    // Scale lerp
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, t)
    );
  });

  return (
    <mesh ref={meshRef} material={materials} castShadow receiveShadow>
      <cylinderGeometry args={[0.75, 0.75, 0.12, 40]} />
    </mesh>
  );
}

/**
 * Stage Pedestal / Zone Rings in 3D
 */
function SceneAnchors({ currentScene }) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z += delta * 0.2;
  });

  if (currentScene === 2) {
    // Understanding: Glowing Daily Budget Safe Zone
    return (
      <group position={[1.3, -0.6, -0.2]}>
        <mesh ref={ringRef} rotation={[-Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[1.3, 1.45, 32]} />
          <meshBasicMaterial color="#34d399" transparent opacity={0.45} side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
  }

  if (currentScene === 3) {
    // Savings: Vault pedestal
    return (
      <group position={[0, -0.8, -0.2]}>
        <mesh rotation={[-Math.PI / 2.2, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.8, 0.15, 36]} />
          <meshStandardMaterial color="#064e3b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 0.1, 0]}>
          <ringGeometry args={[1.6, 1.75, 32]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
  }

  return null;
}

/**
 * 3D Storytelling Stage
 */
export default function Storytelling3DCanvas({ currentScene = 0 }) {
  // Target coordinates for 5 coins across the 4 storytelling scenes
  const sceneConfigurations = useMemo(
    () => ({
      // Scene 0: Income (Central floating cascade)
      0: {
        positions: [
          [0, 0.5, 0.3],
          [-0.75, -0.2, 0.1],
          [0.85, -0.15, 0.2],
          [-0.3, -0.9, -0.2],
          [0.6, 0.85, -0.1],
        ],
        rotations: [
          [0.4, 0.3, 0.1],
          [-0.3, 0.5, -0.2],
          [0.5, -0.4, 0.3],
          [0.1, 0.6, 0],
          [-0.4, -0.2, 0.2],
        ],
        scales: [1, 0.95, 0.95, 0.88, 0.92],
      },
      // Scene 1: Spending (Dispersed outwards into categories)
      1: {
        positions: [
          [-2.4, 0.9, 0],    // Food & Dining
          [-2.7, -0.1, 0.2], // Food
          [-0.1, -1.3, 0.1], // Groceries
          [2.3, 0.85, 0],    // Shopping
          [2.6, -0.3, 0.2],  // Bills
        ],
        rotations: [
          [0.6, 0.8, 0.3],
          [0.2, 1.0, -0.2],
          [-0.5, 0.3, 0.6],
          [0.4, -0.8, 0.2],
          [-0.3, -0.6, -0.3],
        ],
        scales: [0.85, 0.85, 0.85, 0.85, 0.85],
      },
      // Scene 2: Understanding (Left: spent / Right: safe daily allowance stack)
      2: {
        positions: [
          [-2.1, -0.3, 0],   // Spent money (dimmer)
          [-2.3, 0.5, -0.2], // Spent money
          [1.3, -0.4, 0.1],  // Safe Daily allowance
          [1.3, 0.2, 0.2],   // Daily allowance
          [1.3, 0.8, 0.3],   // Daily allowance top
        ],
        rotations: [
          [0.2, 0.4, -0.4],
          [0.5, -0.3, 0.2],
          [Math.PI / 2.3, 0.1, 0],
          [Math.PI / 2.3, 0.1, 0],
          [Math.PI / 2.3, 0.1, 0],
        ],
        scales: [0.78, 0.78, 0.95, 0.95, 0.95],
      },
      // Scene 3: Savings (Coins arcing into savings vault goal)
      3: {
        positions: [
          [-0.5, -0.2, 0.1], // Saved in vault
          [0.45, -0.15, 0.2], // Saved in vault
          [0, 0.4, 0.3],     // Target milestone
          [1.8, 0.9, -0.2],  // Future compound growth
          [-1.8, 0.8, -0.2], // Growth
        ],
        rotations: [
          [0.4, 0.2, 0.1],
          [-0.2, 0.4, -0.2],
          [0.1, 0.8, 0],
          [0.5, -0.5, 0.3],
          [-0.4, 0.3, -0.2],
        ],
        scales: [1, 1, 1.08, 0.85, 0.85],
      },
    }),
    []
  );

  const activeConfig = sceneConfigurations[currentScene] || sceneConfigurations[0];

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6.4]} fov={44} />

        {/* 3-Point Cinematic Lighting Rig */}
        <ambientLight intensity={0.9} color="#d1fae5" />
        <directionalLight
          position={[4, 6, 4]}
          intensity={2.0}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-4, -2, 3]} intensity={1.5} color="#34d399" />
        <pointLight position={[3, -3, -2]} intensity={1.0} color="#f59e0b" />

        {/* Scene Anchors / Rings */}
        <SceneAnchors currentScene={currentScene} />

        {/* Floating Dimensional Rupee Coins */}
        <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.4}>
          <group>
            {[0, 1, 2, 3, 4].map((i) => (
              <RupeeCoin
                key={i}
                index={i}
                isGold={i % 2 === 1}
                targetPositions={activeConfig.positions}
                targetRotations={activeConfig.rotations}
                targetScales={activeConfig.scales}
              />
            ))}
          </group>
        </Float>
      </Canvas>
    </div>
  );
}
