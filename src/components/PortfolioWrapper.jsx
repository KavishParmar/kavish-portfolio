'use client';
import React from "react";
import dynamic from 'next/dynamic';

const PortfolioScene = dynamic(() => import('../../PortfolioScene.jsx'), { ssr: false });

export default function PortfolioWrapper() {
  return <PortfolioScene />;
}
