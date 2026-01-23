'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ワイヤーフレーム球体（メイン構造）- 大きく
function WireframeSphere() {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      ref.current.rotation.x = state.clock.elapsedTime * 0.04;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(4.5, 2);
    return new THREE.EdgesGeometry(geo);
  }, []);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#4f9fff" transparent opacity={0.7} />
    </lineSegments>
  );
}

// 内側のワイヤーフレーム球体
function InnerWireframe() {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.elapsedTime * 0.06;
      ref.current.rotation.z = state.clock.elapsedTime * 0.03;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(3.2, 1);
    return new THREE.EdgesGeometry(geo);
  }, []);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
    </lineSegments>
  );
}

// 最内側のワイヤーフレーム
function CoreWireframe() {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.12;
      ref.current.rotation.x = -state.clock.elapsedTime * 0.08;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.8, 1);
    return new THREE.EdgesGeometry(geo);
  }, []);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#06b6d4" transparent opacity={0.4} />
    </lineSegments>
  );
}

// 光の粒子（球体表面）
function SurfaceParticles() {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 5000;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 4.5 + (Math.random() - 0.5) * 0.15;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.06;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6bb3ff"
        size={0.025}
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
  const particlesCount = 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 5.0 + Math.random() * 3;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const posArray = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        posArray[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.003;
        posArray[i * 3 + 1] += Math.cos(state.clock.elapsedTime + i * 0.5) * 0.003;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.04}
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
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// 斜めのエネルギーリング
function DiagonalRing({ angle, radius }: { angle: number; radius: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <mesh ref={ref} rotation={[angle, angle * 0.5, 0]}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color="#4f9fff" transparent opacity={0.3} />
    </mesh>
  );
}

// 六角形のUIアイコン
function HexagonIcon({ position, scale, rotationSpeed }: { position: [number, number, number]; scale: number; rotationSpeed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * rotationSpeed;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.15;
    }
  });

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 6;
    const size = 0.25 * scale;
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
      <meshBasicMaterial color="#4f9fff" transparent opacity={0.7} side={THREE.DoubleSide} />
    </mesh>
  );
}

// 六角形の枠線アイコン
function HexagonOutline({ position, scale }: { position: [number, number, number]; scale: number }) {
  const ref = useRef<THREE.LineLoop>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0] * 2) * 0.12;
      const pulse = 0.8 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
      ref.current.scale.setScalar(pulse);
    }
  });

  const geometry = useMemo(() => {
    const points = [];
    const sides = 6;
    const size = 0.35 * scale;
    for (let i = 0; i <= sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
      points.push(new THREE.Vector3(Math.cos(angle) * size, Math.sin(angle) * size, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [scale]);

  return (
    <lineLoop ref={ref} position={position} geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.9} />
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
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#4f7cff" transparent opacity={0.1} />
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
      <sphereGeometry args={[5.5, 32, 32]} />
      <meshBasicMaterial color="#4f7cff" transparent opacity={0.03} side={THREE.BackSide} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={0.5} color="#4f9fff" />
      <pointLight position={[-15, -15, -15]} intensity={0.3} color="#8b5cf6" />

      {/* コア */}
      <CoreGlow />

      {/* ワイヤーフレーム構造 */}
      <WireframeSphere />
      <InnerWireframe />
      <CoreWireframe />

      {/* パーティクル */}
      <SurfaceParticles />
      <FloatingParticles />

      {/* エネルギーリング */}
      <EnergyRing radius={5.0} speed={0.1} color="#4f9fff" opacity={0.4} />
      <EnergyRing radius={5.5} speed={-0.07} color="#8b5cf6" opacity={0.3} />
      <EnergyRing radius={6.0} speed={0.04} color="#06b6d4" opacity={0.2} />
      <DiagonalRing angle={Math.PI / 4} radius={5.2} />
      <DiagonalRing angle={-Math.PI / 4} radius={4.8} />
      <DiagonalRing angle={Math.PI / 3} radius={5.8} />

      {/* 六角形UIアイコン */}
      <HexagonIcon position={[6.0, 2.5, 1.0]} scale={1.5} rotationSpeed={0.25} />
      <HexagonIcon position={[-5.5, -1.5, 1.5]} scale={1.0} rotationSpeed={-0.18} />
      <HexagonIcon position={[3.0, -4.5, 0.8]} scale={1.3} rotationSpeed={0.22} />
      <HexagonIcon position={[-3.5, 4.0, 1.2]} scale={0.9} rotationSpeed={-0.2} />
      <HexagonOutline position={[5.0, -3.0, 0.8]} scale={2.0} />
      <HexagonOutline position={[-6.0, 1.0, 1.2]} scale={1.5} />
      <HexagonOutline position={[-2.0, 5.0, 1.0]} scale={1.8} />
      <HexagonOutline position={[1.5, 5.5, 0.6]} scale={1.2} />
      <HexagonOutline position={[4.5, 4.0, 0.9]} scale={1.0} />

      {/* 外側グロー */}
      <OuterGlow />
    </>
  );
}

export default function ParticleSphere() {
  return (
    <div className="w-full h-screen relative">
      {/* グローエフェクト背景 - 大きく */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[#4f7cff]/8 blur-[120px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[#8b5cf6]/8 blur-[100px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#06b6d4]/5 blur-[80px]" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
