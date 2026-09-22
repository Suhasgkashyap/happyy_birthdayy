/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';

export default function App() {
  const [isAssetGuideOpen, setIsAssetGuideOpen] = useState(false);

  const handleOpenSurprise = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09070F] text-[#F3EDF8] selection:bg-pink-500/30 selection:text-pink-100 overflow-x-hidden font-sans">
      {/* Background Animated Particle Canvas & Glows */}
      <BackgroundEffects />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Happy Birthday Hero Section */}
        <HeroSection onOpenSurprise={handleOpenSurprise} />

        {/* 2. Personal Birthday Video Section */}
        <VideoSection onOpenAssetGuide={() => setIsAssetGuideOpen(true)} />
      </main>
    </div>
  );
}
