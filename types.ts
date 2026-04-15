import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'open' | 'waitlist' | 'closed';
  date?: string;
  image?: string;
}

export interface AIAnalysisResponse {
  archetype: string;
  insight: string;
  recommendation: string;
}

export enum Section {
  HERO = 'hero',
  RAIO_X = 'raiox',
  FINANCEIRA = 'financeira',
  TRANSFORMAMENTE = 'transformamente',
  MMP = 'mmp',
  ABOUT = 'about',
  AGENDA = 'agenda',
  TESTIMONIALS = 'testimonials',
  APPLY = 'apply',
}

// Add window type extension for aistudio
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
}