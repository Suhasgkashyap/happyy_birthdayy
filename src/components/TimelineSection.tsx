import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Coffee, MessageCircle, Star, Heart, Compass } from 'lucide-react';
import { TIMELINE_DATA } from '../data/content';

const iconMap = {
  sparkles: Sparkles,
  coffee: Coffee,
  message: MessageCircle,
  star: Star,
  heart: Heart,
};

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey-timeline" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-8 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm text-purple-300 mb-4">
            <Compass className="w-3.5 h-3.5 text-pink-400" />
            <span>Our Unwritten Story</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Our Journey Together
          </h2>

          <p className="mt-4 text-base sm:text-lg text-purple-200/80 max-w-xl mx-auto font-light leading-relaxed">
            From two strangers crossing paths to an unbreakable sister-brother bond.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Glowing central vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-pink-500/60 via-purple-500/50 to-amber-500/80 shadow-[0_0_15px_rgba(236,72,153,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_DATA.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const IconComp = iconMap[milestone.iconType] || Heart;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="ml-14 md:ml-0 md:w-1/2 md:px-8 w-[calc(100%-3.5rem)]"
                  >
                    <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#140F28]/90 backdrop-blur-md border border-white/10 hover:border-pink-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] group">
                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-xs font-medium text-pink-300">
                          {milestone.period}
                        </span>
                        <span className="text-xs text-purple-300/50 font-mono">
                          0{milestone.id}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white group-hover:text-pink-200 transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 text-sm sm:text-base text-purple-200/80 leading-relaxed font-light">
                        {milestone.description}
                      </p>

                      {/* Highlight chip */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-amber-300/90 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{milestone.highlight}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Node Circle on the Central Timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 md:top-auto flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className={`w-11 h-11 rounded-full flex items-center justify-center border-2 shadow-[0_0_20px_rgba(236,72,153,0.5)] z-20 ${
                        milestone.iconType === 'heart'
                          ? 'bg-gradient-to-tr from-rose-500 to-amber-500 border-amber-300 text-white animate-pulse'
                          : 'bg-[#150F2B] border-pink-400/80 text-pink-300'
                      }`}
                    >
                      <IconComp className={`w-5 h-5 ${milestone.iconType === 'heart' ? 'fill-white' : ''}`} />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
