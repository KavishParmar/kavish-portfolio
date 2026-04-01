'use client';
import React, { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Text, ScrollControls, Scroll, useScroll } from '@react-three/drei';

function SceneContent() {
  const scroll = useScroll();
  
  useFrame((state) => {
    const r = scroll.offset;
    state.camera.position.set(0, 0, 10 - r * 10); 
  });

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text fontSize={1} position={[0, 2, 0]}>Kavish Parmar</Text>
        <Text fontSize={0.5} position={[0, 0, 0]}>AI & Robotics Enthusiast</Text>
      </Float>
    </>
  );
}

export default function PortfolioScene() {
  return (
    <Canvas className="h-screen w-full">
      <ScrollControls pages={3} damping={0.2}>
        <SceneContent />
        <Scroll html>
          <div className="h-screen w-screen flex items-center justify-center"><h1>Scroll Down</h1></div>
          <div className="h-screen w-screen flex items-center justify-center"><h1>About Me</h1></div>
          <div className="h-screen w-screen flex items-center justify-center"><h1>Projects</h1></div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
