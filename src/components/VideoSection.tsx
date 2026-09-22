import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Film, Volume2, Info, Maximize, AlertCircle } from 'lucide-react';
import { SISTER_INFO } from '../data/content';

interface VideoSectionProps {
  onOpenAssetGuide?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenAssetGuide }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setVideoError(false);
    setVideoLoading(true);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsModalOpen(false);
  };

  const handleVideoCanPlay = () => {
    setVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may need user gesture or muted in some browser settings
      });
    }
  };

  const handleVideoError = () => {
    setVideoLoading(false);
    setVideoError(true);
  };

  return (
    <section id="video-section" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs sm:text-sm text-pink-300 mb-4">
            <Film className="w-3.5 h-3.5 text-pink-400" />
            <span>Special Screening</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            {SISTER_INFO.videoTitle}
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto font-light leading-relaxed">
            "{SISTER_INFO.videoSubtitle}"
          </p>
        </div>

        {/* Video Card with Poster & Glowing Play Button */}
        <div className="relative group max-w-4xl mx-auto">
          {/* Ambient Glow behind card */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-amber-600/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#130E24] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-center">
            {/* Cinematic Poster Backdrop */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                 style={{
                   backgroundImage: `radial-gradient(circle at center, rgba(19, 14, 36, 0.4) 0%, rgba(9, 7, 15, 0.95) 100%), url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80')`
                 }}
            />

            {/* Subtle Overlay Lines */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09070F] via-transparent to-[#09070F]/50" />

            {/* Glowing Big Circular PLAY Button in Center */}
            <div className="relative z-10 flex flex-col items-center">
              <button
                id="play-video-button"
                onClick={openModal}
                aria-label="Play birthday video"
                className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 text-white shadow-[0_0_40px_rgba(244,63,94,0.6)] group-hover:shadow-[0_0_65px_rgba(244,63,94,0.85)] group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {/* Expanding Glowing Waves */}
                <span className="absolute inset-0 rounded-full bg-pink-500/30 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: '2.5s' }} />
                <span className="absolute -inset-2 rounded-full border border-pink-400/40 animate-pulse pointer-events-none" />

                <Play className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 fill-white text-white translate-x-0.5 drop-shadow-md" />
              </button>

              <span className="mt-4 text-sm sm:text-base font-medium text-pink-100 tracking-wider drop-shadow-sm flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-pink-300 animate-pulse" />
                Click To Watch Your Video
              </span>
            </div>

            {/* Bottom bar inside card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-purple-200">
                Personal Birthday Message
              </span>
              <span className="text-xs text-purple-300/80 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                Full HD • Dedicated to You
              </span>
            </div>
          </div>
        </div>

        {/* Clear Instructions helper box */}
        <div className="mt-6 max-w-xl mx-auto text-center">
          <p className="text-xs text-purple-300/60 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-pink-400 shrink-0" />
            <span>
              Video file path: <code className="text-pink-300 bg-white/5 px-1.5 py-0.5 rounded">public/birthday-video.mp4</code>
            </span>
            {onOpenAssetGuide && (
              <button
                onClick={onOpenAssetGuide}
                className="underline hover:text-pink-300 transition-colors cursor-pointer ml-1"
              >
                View Asset Guide
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Cinematic Modal / Lightbox for HTML5 Video */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            id="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              id="video-modal-container"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#0e0a1b] rounded-2xl sm:rounded-3xl border border-white/15 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#140f25] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                  <span className="text-sm font-medium text-purple-100">
                    {SISTER_INFO.videoTitle}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-xs text-purple-300/50">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">ESC</kbd> or click outside to close
                  </span>
                  <button
                    id="close-video-modal"
                    onClick={closeModal}
                    aria-label="Close video modal"
                    className="p-1.5 rounded-full text-purple-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Player Area */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {videoLoading && !videoError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-200 z-10 bg-black/50 backdrop-blur-sm">
                    <div className="w-10 h-10 border-2 border-pink-500 border-t-transparent rounded-full animate-spin mb-3" />
                    <span className="text-sm">Loading your birthday video...</span>
                  </div>
                )}

                {/* HTML5 Video Element */}
                <video
                  ref={videoRef}
                  id="birthday-html5-video"
                  src={SISTER_INFO.videoSrc}
                  controls
                  playsInline
                  onCanPlay={handleVideoCanPlay}
                  onError={handleVideoError}
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Graceful helper if birthday-video.mp4 is not yet placed in public/ */}
                {videoError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#120D22]/95 z-20">
                    <div className="w-14 h-14 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                      <AlertCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Ready For Your Birthday Video
                    </h3>
                    <p className="text-sm text-purple-200/80 max-w-md mb-4 leading-relaxed">
                      We couldn't find <code className="text-pink-300 font-mono bg-white/10 px-1.5 py-0.5 rounded">public/birthday-video.mp4</code> yet.
                      Drop your MP4 video into the <code className="text-amber-300 font-mono bg-white/10 px-1.5 py-0.5 rounded">public/</code> folder, and it will play here seamlessly!
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          // Try reloading video
                          setVideoError(false);
                          setVideoLoading(true);
                          if (videoRef.current) {
                            videoRef.current.load();
                          }
                        }}
                        className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                      >
                        Retry Loading Video
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-purple-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                      >
                        Close For Now
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Footer Caption */}
              <div className="p-4 sm:p-5 bg-[#100b21] border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-purple-200/80">
                <span className="italic font-serif-display text-sm sm:text-base text-pink-200">
                  "{SISTER_INFO.videoSubtitle}"
                </span>
                <span className="text-xs text-purple-300/60 hidden sm:inline">
                  Full controls: Play/Pause, Volume, Fullscreen supported
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
