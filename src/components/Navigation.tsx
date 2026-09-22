import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, FolderOpen, Film, Camera, BookOpen, Clock, Menu, X } from 'lucide-react';
import { fireCelebrationConfetti } from '../utils/confetti';

interface NavigationProps {
  onOpenAssetGuide: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenAssetGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Video', id: 'video-section', icon: Film },
    { label: 'Memories', id: 'memories-section', icon: Camera },
    { label: 'Letter', id: 'message-section', icon: BookOpen },
    { label: 'Special Bond', id: 'special-section', icon: Heart },
    { label: 'Our Journey', id: 'journey-timeline', icon: Clock },
    { label: 'Wishes', id: 'birthday-wish', icon: Sparkles },
  ];

  return (
    <nav
      id="top-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#09070F]/85 backdrop-blur-xl border-b border-pink-500/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand / Title */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display text-sm sm:text-base font-bold text-white tracking-wide">
              To My Sister
            </span>
            <span className="text-[10px] text-pink-300/80 -mt-1 font-light">
              Not By Blood ❤️
            </span>
          </div>
        </button>

        {/* Desktop Quick Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#150F2C]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-purple-200/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5 text-pink-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Actions (Confetti + Asset Guide Button) */}
        <div className="flex items-center gap-2">
          {/* Confetti button */}
          <button
            onClick={fireCelebrationConfetti}
            title="Celebrate with Confetti"
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 hover:text-white hover:bg-pink-500/30 transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Celebrate</span>
          </button>

          {/* Asset Guide button */}
          <button
            onClick={onOpenAssetGuide}
            title="Asset & Personalization Guide"
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-200 hover:text-white hover:bg-purple-500/30 transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          >
            <FolderOpen className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden sm:inline">Asset Guide</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-purple-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0A20]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-4 mt-2 shadow-2xl flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm text-purple-200 hover:text-white hover:bg-white/10 text-left transition-colors"
              >
                <Icon className="w-4 h-4 text-pink-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};
