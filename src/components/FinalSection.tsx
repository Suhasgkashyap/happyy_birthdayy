import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Heart, Sparkles } from 'lucide-react';
import { fireCelebrationConfetti, fireHeartConfetti } from '../utils/confetti';

interface FinalSectionProps {
  onReplay: () => void;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ onReplay }) => {
  const handleReplayClick = () => {
    fireCelebrationConfetti();
    fireHeartConfetti();
    onReplay();
  };

  return (
    <footer id="final-section" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-24 sm:py-32 z-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Soft Lead-in */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg tracking-widest uppercase text-pink-300/80 font-medium mb-6 font-mono"
        >
          One last thing...
        </motion.p>

        {/* Heart Icon pulse */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-rose-400 mb-8 shadow-[0_0_30px_rgba(244,63,94,0.4)]"
        >
          <Heart className="w-8 h-8 fill-rose-500 text-rose-500 animate-pulse" />
        </motion.div>

        {/* The message */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-normal text-purple-100/95 leading-relaxed max-w-2xl"
        >
          "Thank you for being my sister,
          <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200">
            even when life didn't make us sisters by blood.
          </span>"
        </motion.h3>

        {/* Birthday reaffirmation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 mb-12"
        >
          <p className="font-serif-display text-3xl sm:text-5xl font-bold text-white">
            Happy Birthday <span className="inline-block text-rose-500 animate-pulse">❤️</span>
          </p>
        </motion.div>

        {/* Button: "Replay My Birthday Surprise 🎁" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button
            id="replay-surprise-button"
            onClick={handleReplayClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 text-white font-medium text-base sm:text-lg shadow-[0_0_35px_rgba(236,72,153,0.4)] hover:shadow-[0_0_55px_rgba(236,72,153,0.7)] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-white/20"
          >
            <RotateCcw className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-500 text-pink-200" />
            <span>Replay My Birthday Surprise 🎁</span>
          </button>
        </motion.div>

        <div className="mt-16 text-center text-xs text-purple-300/40 tracking-wider">
          Made with unconditional love & cherished sisterhood
        </div>
      </div>
    </footer>
  );
};
