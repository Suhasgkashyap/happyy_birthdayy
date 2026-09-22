import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Quote } from 'lucide-react';

export const LetterSection: React.FC = () => {
  return (
    <section id="message-section" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Tag */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Straight From The Heart</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            A Letter To My Sister
          </h2>
        </div>

        {/* Elegant Cinematic Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-b from-[#18112C]/90 to-[#100B20]/95 backdrop-blur-xl border border-pink-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        >
          {/* Subtle Golden/Rose ambient glow */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-pink-400/30 text-xs tracking-widest font-mono">
            ✦ SISTERHOOD ✦
          </div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-amber-400/30">
            <Quote className="w-7 h-7 rotate-180" />
          </div>

          {/* Heart / Wax Seal Medallion */}
          <div className="flex justify-center mb-8">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-pink-600 to-amber-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.5)] border-2 border-white/30">
              <Heart className="w-6 h-6 fill-white text-white drop-shadow" />
              <div className="absolute -inset-1 rounded-full border border-pink-400/40 animate-pulse" />
            </div>
          </div>

          {/* The Exact Emotional Message */}
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <p className="text-lg sm:text-2xl text-purple-100/95 font-serif-display leading-relaxed">
              Some people enter our lives without sharing our blood,
              <br />
              yet somehow become family.
            </p>

            <p className="text-xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 font-serif-display">
              You are one of those people.
            </p>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent mx-auto my-4" />

            <p className="text-base sm:text-xl text-purple-200/90 leading-relaxed font-light">
              Through all the random conversations,
              <br />
              laughs, arguments, stupid moments,
              <br />
              beautiful memories, and everything in between,
              <br />
              you became more than just a friend.
            </p>

            <p className="text-2xl sm:text-4xl font-bold text-white font-serif-display tracking-tight py-2">
              You became my sister.
            </p>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto my-4" />

            <p className="text-base sm:text-xl text-purple-200/90 leading-relaxed font-light">
              I may not have been born with you,
              <br />
              but I am grateful that life gave me a sister like you.
            </p>

            <p className="text-base sm:text-xl text-purple-200/90 leading-relaxed font-light">
              On your birthday, I just want you to know
              <br />
              how special you are to me.
            </p>

            <p className="text-base sm:text-xl text-amber-200/95 font-serif-display italic">
              No matter where life takes us,
              <br />
              I hope this bond always remains.
            </p>

            <div className="pt-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-white">
                Happy Birthday to my unblooded sister.
              </p>
              <div className="mt-3 text-3xl sm:text-4xl inline-block animate-pulse">
                ❤️
              </div>
            </div>

            {/* Subtle Handwritten Signature Style */}
            <div className="pt-6 font-handwriting text-2xl sm:text-3xl text-pink-300">
              With all my love & gratitude, always
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
