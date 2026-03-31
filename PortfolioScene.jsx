'use client';
import React, { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Text, MeshDistortMaterial } from '@react-three/drei';

function GlassCard({ position, color, title }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[2, 3, 0.2]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.1} 
          transparent={true} 
          opacity={0.8}
        />
        <Text position={[0, 0, 0.15]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
          {title}
        </Text>
      </mesh>
    </Float>
  );
}

export default function PortfolioScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <GlassCard position={[-3, 0, 0]} color="#4f46e5" title="AI Projects" />
      <GlassCard position={[0, 0, 0]} color="#db2777" title="Robotics" />
      <GlassCard position={[3, 0, 0]} color="#059669" title="Web Dev" />
      
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
