import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Handshake, Infinity as InfinityIcon, Star } from 'lucide-react';
import { WHY_SPECIAL_CARDS } from '../data/content';

const iconMap = {
  Heart: Heart,
  Sparkles: Sparkles,
  Handshake: Handshake,
  Infinity: InfinityIcon,
};

const emojiMap: Record<string, string> = {
  choice: '❤️',
  memories: '✨',
  'always-there': '🤝',
  'bond-for-life': '♾️',
};

const gradientMap: Record<string, string> = {
  choice: 'from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-300',
  memories: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300',
  'always-there': 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-300',
  'bond-for-life': 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30 text-fuchsia-300',
};

export const WhySpecialSection: React.FC = () => {
  return (
    <section id="special-section" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs sm:text-sm text-pink-300 mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400" />
            <span>Forever Cherished</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Why You Are So Special To Me
          </h2>

          <p className="mt-4 text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto font-light leading-relaxed">
            The qualities and moments that make our sisterhood unlike anything else.
          </p>
        </div>

        {/* 4 Animated Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WHY_SPECIAL_CARDS.map((card, idx) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap] || Heart;
            const emoji = emojiMap[card.id] || '❤️';
            const colorScheme = gradientMap[card.id] || gradientMap['choice'];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative rounded-3xl p-7 sm:p-8 bg-[#140F27]/80 backdrop-blur-md border border-white/10 hover:border-pink-500/40 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(236,72,153,0.15)] flex flex-col justify-between"
              >
                {/* Ambient glow on hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-amber-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${colorScheme} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl filter drop-shadow">{emoji}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                    {card.title}
                  </h3>

                  {/* Primary Quote */}
                  <p className="text-base sm:text-lg font-medium text-pink-300/90 mb-3 italic font-serif-display">
                    "{card.description}"
                  </p>

                  {/* Detail paragraph */}
                  <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed font-light">
                    {card.detail}
                  </p>
                </div>

                {/* Subtle bottom separator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-purple-300/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Unconditional Sisterhood</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
