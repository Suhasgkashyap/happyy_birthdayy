import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Folder, Video, Music, Image as ImageIcon, CheckCircle2, Copy, Check } from 'lucide-react';

interface AssetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetGuideModal: React.FC<AssetGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#130E26] border border-pink-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-purple-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <Folder className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-white">
                Personalization & Asset Guide
              </h3>
              <p className="text-xs sm:text-sm text-purple-300/80">
                Where to put your birthday video, music, and memories
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            {/* 1. Video file */}
            <div className="p-4 rounded-2xl bg-[#1A1333] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-pink-300 font-semibold">
                  <Video className="w-4 h-4 text-pink-400" />
                  <span>1. Your Birthday Video (Crucial)</span>
                </div>
                <button
                  onClick={() => copyToClipboard('public/birthday-video.mp4')}
                  className="flex items-center gap-1 text-xs text-purple-300 hover:text-white bg-white/5 hover:bg-white/10 px-2 py-1 rounded"
                >
                  {copiedText === 'public/birthday-video.mp4' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy path</span>
                </button>
              </div>
              <p className="text-xs text-purple-200/80 mb-2">
                Place your personal video file directly in the public folder as:
              </p>
              <code className="block bg-black/40 text-amber-300 font-mono text-xs p-2.5 rounded-lg border border-white/5">
                public/birthday-video.mp4
              </code>
              <p className="text-[11px] text-purple-300/60 mt-2">
                Once saved, clicking the glowing PLAY button in the video section will instantly load and play your video in high-definition.
              </p>
            </div>

            {/* 2. Music file */}
            <div className="p-4 rounded-2xl bg-[#1A1333] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-purple-300 font-semibold">
                  <Music className="w-4 h-4 text-purple-400" />
                  <span>2. Background Music</span>
                </div>
                <button
                  onClick={() => copyToClipboard('public/birthday-music.mp3')}
                  className="flex items-center gap-1 text-xs text-purple-300 hover:text-white bg-white/5 hover:bg-white/10 px-2 py-1 rounded"
                >
                  {copiedText === 'public/birthday-music.mp3' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy path</span>
                </button>
              </div>
              <p className="text-xs text-purple-200/80 mb-2">
                Place your audio file in the public folder as:
              </p>
              <code className="block bg-black/40 text-amber-300 font-mono text-xs p-2.5 rounded-lg border border-white/5">
                public/birthday-music.mp3
              </code>
              <p className="text-[11px] text-purple-300/60 mt-2">
                The floating music button in the bottom-right corner will play it upon click (with play, pause, and mute).
              </p>
            </div>

            {/* 3. Photo memories */}
            <div className="p-4 rounded-2xl bg-[#1A1333] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <ImageIcon className="w-4 h-4 text-amber-400" />
                  <span>3. Photo Memories (8 Images)</span>
                </div>
              </div>
              <p className="text-xs text-purple-200/80 mb-2">
                Place your photos inside the <span className="text-white font-mono">public/images/</span> folder:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-pink-200">
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory1.jpg</span>
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory2.jpg</span>
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory3.jpg</span>
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory4.jpg</span>
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory5.jpg</span>
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory6.jpg</span>
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory7.jpg</span>
                <span className="bg-black/30 p-1.5 rounded border border-white/5">memory8.jpg</span>
              </div>
              <p className="text-[11px] text-purple-300/60 mt-2">
                While you prepare your photos, warm sisterhood photography placeholders are displayed automatically.
              </p>
            </div>

            {/* 4. Text customization */}
            <div className="p-4 rounded-2xl bg-[#1A1333] border border-white/10">
              <div className="flex items-center gap-2 text-rose-300 font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400" />
                <span>4. Personalizing Dates & Captions</span>
              </div>
              <p className="text-xs text-purple-200/80">
                You can edit <code className="text-pink-300 font-mono bg-white/5 px-1 py-0.5 rounded">src/data/content.ts</code> to customize captions, dates, and milestones to match your exact shared memories.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity"
            >
              Got It, Thank You!
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
