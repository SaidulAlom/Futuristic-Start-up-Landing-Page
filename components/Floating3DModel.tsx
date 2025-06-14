'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Floating3DModelProps {
  className?: string;
  variant?: 'sphere' | 'torus' | 'brain';
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        emissive="#0066ff"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial
        color="#8b5cf6"
        metalness={0.8}
        roughness={0.2}
        emissive="#4c1d95"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const nodes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 1.5;
    return {
      position: [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius,
      ] as [number, number, number],
    };
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      {nodes.map((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        const distance = Math.sqrt(
          Math.pow(node.position[0] - nextNode.position[0], 2) +
          Math.pow(node.position[1] - nextNode.position[1], 2) +
          Math.pow(node.position[2] - nextNode.position[2], 2)
        );
        
        return (
          <mesh
            key={`line-${i}`}
            position={[
              (node.position[0] + nextNode.position[0]) / 2,
              (node.position[1] + nextNode.position[1]) / 2,
              (node.position[2] + nextNode.position[2]) / 2,
            ]}
          >
            <cylinderGeometry args={[0.01, 0.01, distance, 8]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Floating3DModel({ className = '', variant = 'sphere' }: Floating3DModelProps) {
  const renderModel = () => {
    switch (variant) {
      case 'torus':
        return <AnimatedTorus />;
      case 'brain':
        return <NeuralNetwork />;
      default:
        return <AnimatedSphere />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        {renderModel()}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}