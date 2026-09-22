export interface MemoryItem {
  id: number;
  image: string;
  fallbackImage: string;
  title: string;
  date: string;
  caption: string;
}

export interface SpecialReason {
  id: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
}

export interface TimelineMilestone {
  id: number;
  title: string;
  period: string;
  description: string;
  highlight: string;
  iconType: 'sparkles' | 'coffee' | 'message' | 'star' | 'heart';
}
