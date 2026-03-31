import React from "react";
import PortfolioWrapper from '../components/PortfolioWrapper.jsx';

export default function Home() {
  return (
    <main className="h-screen w-full relative">
      <PortfolioWrapper />
      <div className="absolute top-10 left-10 z-10">
        <h1 className="text-4xl font-bold">Kavish Parmar</h1>
        <p className="text-xl">AI & Robotics Enthusiast</p>
      </div>
    </main>
  );
}
