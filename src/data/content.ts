import { MemoryItem, SpecialReason, TimelineMilestone } from '../types';

/**
 * ====================================================================
 * HOW TO CUSTOMIZE THIS WEBSITE:
 * 1. VIDEO: Place your video file at "public/birthday-video.mp4"
 * 2. MUSIC: Place your audio file at "public/birthday-music.mp3"
 * 3. PHOTOS: Place your 8 photos at "public/images/memory1.jpg" ... "memory8.jpg"
 * 4. TEXT & DATES: Update the strings below to match your unique memories!
 * ====================================================================
 */

export const SISTER_INFO = {
  nickname: "Sister",
  siteTitle: "To My Sister, Not By Blood ❤️",
  heroSubtitle:
    "Not connected by blood, but connected by something much stronger — a bond I will always cherish.",
  videoTitle: "A Little Memory For You 🎥",
  videoSubtitle: "Some moments are better remembered than explained.",
  videoSrc: "https://drive.google.com/uc?export=download&id=1DHJJOGABo3TMpPn6d5D8cH4b8A_8eBwU",
  musicSrc: "/birthday-music.mp3",
};

// 8 Photo Memories (Point to /images/memory1.jpg through memory8.jpg)
// Fallback images are warm, aesthetic sisterhood/friendship photographs
export const MEMORIES_DATA: MemoryItem[] = [
  {
    id: 1,
    image: "/images/memory1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
    title: "That Random Day",
    date: "A Cherished Afternoon",
    caption: "The day we talked about everything and nothing for hours, laughing till our stomachs hurt.",
  },
  {
    id: 2,
    image: "/images/memory2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
    title: "Unstoppable Laughs",
    date: "Late Night Talks",
    caption: "When the jokes made zero sense to anyone else, but we couldn't stop tearing up from laughter.",
  },
  {
    id: 3,
    image: "/images/memory3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    title: "Always In My Corner",
    date: "Quiet Encouragement",
    caption: "Whenever things felt heavy, just a single text or call from you put everything back in place.",
  },
  {
    id: 4,
    image: "/images/memory4.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
    title: "Our Crazy Adventures",
    date: "Spontaneous Outing",
    caption: "No plan, no worries, just the two of us making memories that are etched in my heart forever.",
  },
  {
    id: 5,
    image: "/images/memory5.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    title: "The Golden Hours",
    date: "Sunsets & Dreams",
    caption: "Sharing our biggest dreams, fears, and knowing we have each other's back forever.",
  },
  {
    id: 6,
    image: "/images/memory6.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    title: "Unconditional Support",
    date: "Through Every Season",
    caption: "You taught me what genuine loyalty looks like. Blood couldn't make this any purer.",
  },
  {
    id: 7,
    image: "/images/memory7.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1000&q=80",
    title: "Silly Shenanigans",
    date: "Too Funny to Forget",
    caption: "All the goofy faces, inside jokes, and candid moments that only we understand.",
  },
  {
    id: 8,
    image: "/images/memory8.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
    title: "Forever Bond",
    date: "Today & Always",
    caption: "Another year celebrating the incredible soul you are. Proud to call you my sister.",
  },
];

// Why You Are Special Cards
export const WHY_SPECIAL_CARDS: SpecialReason[] = [
  {
    id: "choice",
    icon: "Heart",
    title: "Family By Choice",
    description: "Blood doesn't define every family.",
    detail: "We didn't grow up under the same roof, but life brought us together in the most meaningful way.",
  },
  {
    id: "memories",
    icon: "Sparkles",
    title: "Countless Memories",
    description: "Every memory with you is something worth keeping.",
    detail: "From hilarious misunderstandings to heartfelt heart-to-hearts, each chapter with you is a treasure.",
  },
  {
    id: "always-there",
    icon: "Handshake",
    title: "Always There",
    description: "Through good days and bad days.",
    detail: "A true sister isn't just there for the celebrations; she stands beside you in the quiet storms.",
  },
  {
    id: "bond-for-life",
    icon: "Infinity",
    title: "A Bond For Life",
    description: "Some connections simply don't need a blood relation.",
    detail: "Years will pass, seasons will shift, but the understanding between us stays unwavering.",
  },
];

// Our Journey Timeline
export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: 1,
    title: "First Meeting",
    period: "The Beginning",
    description: "Two strangers who had no idea they were about to build one of life's most precious bonds.",
    highlight: "Where our story began",
    iconType: "sparkles",
  },
  {
    id: 2,
    title: "First Crazy Memory",
    period: "Breaking the Ice",
    description: "The moment that broke all formalities and turned regular friends into partners in crime.",
    highlight: "Endless uncontrollable laughter",
    iconType: "coffee",
  },
  {
    id: 3,
    title: "Countless Conversations",
    period: "Deepening Trust",
    description: "Hours talking about our lives, our hopes, and realizing how deeply we understand each other.",
    highlight: "Safe space to be 100% ourselves",
    iconType: "message",
  },
  {
    id: 4,
    title: "Unforgettable Moments",
    period: "Becoming Family",
    description: "Through highs, lows, and milestones, you stopped being just a friend. You became my sister.",
    highlight: "A bond stronger than circumstance",
    iconType: "star",
  },
  {
    id: 5,
    title: "Today ❤️",
    period: "Your Special Birthday",
    description: "Celebrating the amazing human being you are and making a promise that this bond stays forever.",
    highlight: "Happy Birthday, My Sister!",
    iconType: "heart",
  },
];
