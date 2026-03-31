'use client';
import React from "react";
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Box } from '@react-three/drei';

export default function PortfolioScene() {
  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Box args={[2, 2, 2]}>
          <meshStandardMaterial color="hotpink" />
        </Box>
      </Float>
      <OrbitControls />
    </Canvas>
  );
}
