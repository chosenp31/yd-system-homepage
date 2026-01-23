'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ワイヤーフレーム球体（メイン構造）
function WireframeSphere() {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.2, 2);
    return new THREE.EdgesGeometry(geo);
  }, []);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#4f9fff" transparent opacity={0.6} />
    </lineSegments>
  );
}

// 内側のワイヤーフレーム球体
function InnerWireframe() {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.elapsedTime * 0.08;
      ref.current.rotation.z = state.clock.elapsedTime * 0.03;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 1);
    return new THREE.EdgesGeometry(geo);
  }, []);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
    </lineSegments>
  );
}

// 光の粒子（球体表面）
function SurfaceParticles() {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 2.2 + (Math.random() - 0.5) * 0.1;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6bb3ff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// 浮遊する光の粒子（周囲）
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 500;

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const vel = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 2.5 + Math.random() * 1.5;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
      vel[i * 3] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    return { positions: pos, velocities: vel };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const posArray = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        posArray[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.002;
        posArray[i * 3 + 1] += Math.cos(state.clock.elapsedTime + i * 0.5) * 0.002;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// エネルギーウェーブリング
function EnergyRing({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// 斜めのエネルギーリング
function DiagonalRing({ angle, radius }: { angle: number; radius: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ref} rotation={[angle, angle * 0.5, 0]}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color="#4f9fff" transparent opacity={0.25} />
    </mesh>
  );
}

// 六角形のUIアイコン
function HexagonIcon({ position, scale, rotationSpeed }: { position: [number, number, number]; scale: number; rotationSpeed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * rotationSpeed;
      // 浮遊アニメーション
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.1;
    }
  });

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 6;
    const size = 0.15 * scale;
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return new THREE.ShapeGeometry(shape);
  }, [scale]);

  return (
    <mesh ref={ref} position={position} geometry={geometry}>
      <meshBasicMaterial color="#4f9fff" transparent opacity={0.6} side={THREE.DoubleSide} />
    </mesh>
  );
}

// 六角形の枠線アイコン
function HexagonOutline({ position, scale }: { position: [number, number, number]; scale: number }) {
  const ref = useRef<THREE.LineLoop>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0] * 2) * 0.08;
      const pulse = 0.8 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
      ref.current.scale.setScalar(pulse);
    }
  });

  const geometry = useMemo(() => {
    const points = [];
    const sides = 6;
    const size = 0.2 * scale;
    for (let i = 0; i <= sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
      points.push(new THREE.Vector3(Math.cos(angle) * size, Math.sin(angle) * size, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [scale]);

  return (
    <lineLoop ref={ref} position={position} geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.8} />
    </lineLoop>
  );
}

// 内側のグロー効果
function CoreGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const pulse = 0.8 + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial color="#4f7cff" transparent opacity={0.08} />
    </mesh>
  );
}

// 外側のグロー
function OuterGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshBasicMaterial color="#4f7cff" transparent opacity={0.02} side={THREE.BackSide} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4f9fff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

      {/* コア */}
      <CoreGlow />

      {/* ワイヤーフレーム構造 */}
      <WireframeSphere />
      <InnerWireframe />

      {/* パーティクル */}
      <SurfaceParticles />
      <FloatingParticles />

      {/* エネルギーリング */}
      <EnergyRing radius={2.4} speed={0.12} color="#4f9fff" opacity={0.35} />
      <EnergyRing radius={2.6} speed={-0.08} color="#8b5cf6" opacity={0.25} />
      <EnergyRing radius={2.8} speed={0.05} color="#06b6d4" opacity={0.15} />
      <DiagonalRing angle={Math.PI / 4} radius={2.5} />
      <DiagonalRing angle={-Math.PI / 4} radius={2.3} />

      {/* 六角形UIアイコン */}
      <HexagonIcon position={[2.8, 1.2, 0.5]} scale={1.2} rotationSpeed={0.3} />
      <HexagonIcon position={[-2.5, -0.8, 0.8]} scale={0.8} rotationSpeed={-0.2} />
      <HexagonIcon position={[1.5, -2.2, 0.3]} scale={1.0} rotationSpeed={0.25} />
      <HexagonOutline position={[2.2, -1.5, 0.4]} scale={1.5} />
      <HexagonOutline position={[-2.8, 0.5, 0.6]} scale={1.0} />
      <HexagonOutline position={[-1.2, 2.0, 0.5]} scale={1.3} />
      <HexagonOutline position={[0.5, 2.5, 0.3]} scale={0.9} />

      {/* 外側グロー */}
      <OuterGlow />
    </>
  );
}

export default function ParticleSphere() {
  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[700px] relative">
      {/* グローエフェクト背景 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#4f7cff]/10 blur-[100px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-[#8b5cf6]/10 blur-[80px]" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
