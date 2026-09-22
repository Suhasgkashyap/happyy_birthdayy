import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Pause, Play, Sparkles } from 'lucide-react';
import { SISTER_INFO } from '../data/content';

interface MusicPlayerProps {
  isExternalPaused?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isExternalPaused }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [useSynthesizer, setUseSynthesizer] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Pause background music if video starts playing
  useEffect(() => {
    if (isExternalPaused && isPlaying) {
      pauseAudio();
    }
  }, [isExternalPaused]);

  // Handle HTML5 audio error (e.g. birthday-music.mp3 not yet placed)
  const handleAudioError = () => {
    setHasError(true);
    setUseSynthesizer(true);
  };

  // Web Audio API music box fallback (sweet soft pentatonic birthday lullaby)
  const startSynthesizedMelody = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Gentle music-box notes (C4, D4, E4, G4, A4, C5)
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63];
      let noteIndex = 0;

      const playTone = () => {
        if (!audioCtxRef.current || isMuted) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.8);

        noteIndex++;
      };

      playTone();
      synthTimerRef.current = window.setInterval(playTone, 800);
    } catch {
      // Audio context may not be supported
    }
  };

  const stopSynthesizedMelody = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const playAudio = () => {
    setIsPlaying(true);
    if (useSynthesizer) {
      startSynthesizedMelody();
      return;
    }

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setHasError(false);
        })
        .catch(() => {
          // If file fails or is missing, activate gentle music box synthesizer
          setUseSynthesizer(true);
          startSynthesizedMelody();
        });
    }
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynthesizedMelody();
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.muted = newMuted;
    }
  };

  return (
    <div
      id="floating-music-player"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={SISTER_INFO.musicSrc}
        loop
        onError={handleAudioError}
        preload="metadata"
      />

      {/* Expanded Controls Popover on hover/interaction */}
      {showControls && (
        <div className="bg-[#150F2C]/95 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-3 shadow-2xl flex items-center gap-3 text-xs text-purple-200 transition-all duration-300">
          <div className="flex flex-col">
            <span className="font-semibold text-white flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {useSynthesizer ? 'Melody Box (Preview)' : 'Background Music'}
            </span>
            <span className="text-[10px] text-purple-300/70">
              {useSynthesizer ? 'Put MP3 in public/birthday-music.mp3' : SISTER_INFO.musicSrc}
            </span>
          </div>

          <button
            id="music-mute-button"
            onClick={toggleMute}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-purple-200 hover:text-white transition-colors cursor-pointer"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-pink-300" />}
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          id="music-toggle-button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          className={`relative group flex items-center gap-2.5 px-4 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-r from-pink-600/90 to-purple-600/90 border-pink-400/50 text-white shadow-[0_0_25px_rgba(236,72,153,0.5)]'
              : 'bg-[#140F27]/90 hover:bg-[#1C1535] border-white/15 text-purple-200 hover:text-white'
          }`}
        >
          {/* Animated sound wave bars when playing */}
          {isPlaying && !isMuted ? (
            <div className="flex items-end gap-0.5 h-4">
              <span className="w-0.5 h-3 bg-pink-200 rounded-full animate-pulse" style={{ animationDuration: '0.6s' }} />
              <span className="w-0.5 h-4 bg-amber-200 rounded-full animate-pulse" style={{ animationDuration: '0.4s' }} />
              <span className="w-0.5 h-2 bg-purple-200 rounded-full animate-pulse" style={{ animationDuration: '0.8s' }} />
              <span className="w-0.5 h-3.5 bg-pink-200 rounded-full animate-pulse" style={{ animationDuration: '0.5s' }} />
            </div>
          ) : (
            <Music className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
          )}

          <span className="text-xs font-medium tracking-wide">
            {isPlaying ? 'Music Playing' : 'Play Birthday Song'}
          </span>

          <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-3 h-3 fill-white" />
            ) : (
              <Play className="w-3 h-3 fill-white translate-x-0.5" />
            )}
          </div>
        </button>

        {/* Quick mute icon if playing */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-3 rounded-full bg-[#140F27]/90 border border-white/15 text-purple-200 hover:text-white hover:bg-white/10 transition-colors shadow-lg cursor-pointer"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-pink-300" />}
          </button>
        )}
      </div>
    </div>
  );
};
