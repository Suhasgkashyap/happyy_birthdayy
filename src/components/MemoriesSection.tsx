import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Calendar, X, ZoomIn, Heart, Sparkles } from 'lucide-react';
import { MEMORIES_DATA } from '../data/content';
import { MemoryItem } from '../types';

interface MemoriesSectionProps {
  onOpenAssetGuide?: () => void;
}

export const MemoriesSection: React.FC<MemoriesSectionProps> = ({ onOpenAssetGuide }) => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  return (
    <section id="memories-section" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm text-purple-300 mb-4">
            <Camera className="w-3.5 h-3.5 text-pink-400" />
            <span>Captured Chapters</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Our Little Memories 📸
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto font-light leading-relaxed">
            Snapshots of shared laughter, quiet comfort, and the moments that turned us into family.
          </p>

          <p className="text-xs text-purple-300/50 mt-2">
            Tip: Replace photos in <code className="text-pink-300 bg-white/5 px-1 py-0.5 rounded">public/images/memory1.jpg ... memory8.jpg</code>
          </p>
        </div>

        {/* Memories Grid (8 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {MEMORIES_DATA.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
              onSelect={() => setSelectedMemory(memory)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox for Selected Photo */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#140F27] border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-default"
            >
              {/* Image preview */}
              <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
                <img
                  src={memoryImageSrc(selectedMemory)}
                  alt={selectedMemory.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to beautiful Unsplash photography if local file not yet added
                    e.currentTarget.src = selectedMemory.fallbackImage;
                  }}
                />
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Caption & details */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-pink-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedMemory.date}
                  </span>
                  <span className="text-xs text-purple-300/60">
                    Memory #{selectedMemory.id}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
                  {selectedMemory.title}
                </h3>

                <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
                  {selectedMemory.caption}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-300/60">
                  <span className="flex items-center gap-1 text-pink-300">
                    <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                    Cherished Sisterhood
                  </span>
                  <span>File: public{selectedMemory.image}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Memory Card Component
const MemoryCard: React.FC<{
  memory: MemoryItem;
  index: number;
  onSelect: () => void;
}> = ({ memory, index, onSelect }) => {
  const [imgSrc, setImgSrc] = useState(memory.image);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      onClick={onSelect}
      className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-[#130E26]/80 backdrop-blur-md border border-white/10 hover:border-pink-500/40 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(236,72,153,0.2)] cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0714]">
        <img
          src={imgSrc}
          alt={memory.title}
          loading="lazy"
          onError={() => {
            if (!hasError) {
              setHasError(true);
              setImgSrc(memory.fallbackImage);
            }
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#130E26] via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Date / Memory Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-pink-200">
            <Calendar className="w-3 h-3 text-pink-400" />
            {memory.date}
          </span>
        </div>

        {/* Zoom icon on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center">
            <ZoomIn className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white group-hover:text-pink-200 transition-colors">
            {memory.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-purple-200/80 line-clamp-3 leading-relaxed">
            {memory.caption}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-purple-300/50">
          <span>Memory #{memory.id}</span>
          <span className="text-pink-400/80 group-hover:text-pink-300 group-hover:translate-x-0.5 transition-all">
            View details →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

function memoryImageSrc(memory: MemoryItem): string {
  return memory.image;
}
