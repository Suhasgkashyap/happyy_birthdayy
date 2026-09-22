import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const BirthdayWishSection: React.FC = () => {
  return (
    <section id="birthday-wish" className="relative py-24 sm:py-36 px-4 sm:px-6 md:px-8 z-10 text-center">
      <div className="max-w-4xl mx-auto relative">
        {/* Glow halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-gradient-to-tr from-pink-600/20 via-purple-600/20 to-amber-500/20 rounded-full blur-[130px] pointer-events-none" />

        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs sm:text-sm font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>My Deepest Birthday Blessing</span>
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/60" />
        </motion.div>

        {/* The Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#18112D]/85 to-[#0E0A1B]/95 backdrop-blur-xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        >
          <div className="space-y-6 sm:space-y-8 font-serif-display text-xl sm:text-3xl md:text-4xl text-purple-100/90 leading-relaxed">
            <p className="hover:text-pink-200 transition-colors">
              May your smile never fade.
            </p>

            <p className="hover:text-amber-200 transition-colors">
              May your dreams become reality.
            </p>

            <p className="hover:text-purple-200 transition-colors">
              May life give you countless reasons to be happy.
            </p>

            <p className="text-pink-300 italic font-semibold hover:text-pink-200 transition-colors">
              And may our crazy sister-brother bond stay forever.
            </p>

            <div className="pt-8 border-t border-white/10">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
                Happy Birthday{' '}
                <span className="inline-block text-rose-500 drop-shadow-[0_0_35px_rgba(244,63,94,0.7)] animate-pulse">
                  ❤️
                </span>
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
