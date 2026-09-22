import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { fireCelebrationConfetti } from '../utils/confetti';

interface HeroSectionProps {
  onOpenSurprise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSurprise }) => {
  const handleOpenClick = () => {
    fireCelebrationConfetti();
    onOpenSurprise();
  };

  return (
    <header
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-20 z-10"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Delicate Sisterhood Monogram / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/25 bg-pink-500/10 backdrop-blur-md mb-8 text-xs sm:text-sm font-medium text-pink-200 shadow-[0_0_20px_rgba(244,114,182,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="tracking-widest uppercase text-[11px] sm:text-xs">A Special Celebration Just For You</span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/50" />
        </motion.div>

        {/* Main Title: "Happy Birthday, My Sister ❤️" */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white"
        >
          Happy Birthday,{' '}
          <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
            My Sister
          </span>{' '}
          <span className="inline-block text-rose-500 drop-shadow-[0_0_25px_rgba(244,63,94,0.6)] animate-pulse">
            ❤️
          </span>
        </motion.h1>

        {/* Subtitle with high emotional gravitas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-purple-200/90 font-light leading-relaxed tracking-wide">
            Not connected by blood,
            <br className="hidden sm:inline" />
            {' '}but connected by something much stronger —
            <br />
            <span className="font-serif-display italic text-amber-200 font-normal">
              a bond I will always cherish.
            </span>
          </p>
        </motion.div>

        {/* Action Button: "Open Your Surprise 🎁" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col items-center"
        >
          <button
            id="open-surprise-button"
            onClick={handleOpenClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 text-white font-medium text-base sm:text-lg shadow-[0_0_35px_rgba(236,72,153,0.4)] hover:shadow-[0_0_55px_rgba(236,72,153,0.65)] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-white/20"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <span className="relative flex items-center gap-2 tracking-wide font-medium">
              Open Your Surprise
              <span className="text-xl inline-block group-hover:rotate-12 transition-transform duration-300">🎁</span>
            </span>
          </button>

          <p className="text-xs sm:text-sm text-purple-300/60 mt-3 font-light tracking-wider">
            Scroll down or tap to unfold the memories
          </p>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.button
        id="scroll-indicator-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={handleOpenClick}
        aria-label="Scroll to surprise"
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-purple-300/50 hover:text-purple-200 transition-colors cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-widest mb-1">Begin Journey</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-pink-400" />
      </motion.button>
    </header>
  );
};
