/**
 * Blazing Chess Academy - Application Constants
 * Brand identity: Ignite your potential
 */

import { CourseType, type OfferingCard } from './types';

// Brand configuration
export const BRAND = {
  name: 'Blazing Chess Academy',
  tagline: 'Ignite your potential',
  founder: 'Unknown Blaze',
  founderTitle: 'Competitive Strategist',
} as const;

// Color scheme (for reference, mainly using Tailwind)
export const COLORS = {
  primary: {
    black: '#000000',
    gold: '#FFD700',
    fireOrange: '#FF6B35',
  },
  accent: {
    amber: '#FBBF24',
    darkGray: '#1F2937',
  },
} as const;

// Offerings for landing page
export const OFFERINGS: OfferingCard[] = [
  {
    id: '2',
    title: 'Online One-on-One Coaching',
    description: 'Intensive tactical training, opening theory, endgame mastery, and personalized game analysis. Learn via Google Meet with arrow diagrams and live position analysis.',
    icon: '💻',
    type: CourseType.PRIVATE_MENTORSHIP,
    features: [
      'Opening systems & middle-game strategy',
      'Tactical puzzle training & calculation drills',
      'Endgame techniques & practical positions',
      'Game analysis & weakness identification',
      'Tournament preparation (FIDE-rated)',
      'All ages & levels (4-80+)',
    ],
    price: 'S$40-60/hour',
  },
  {
    id: '3',
    title: 'Face-to-Face Coaching',
    description: 'In-person intensive sessions (1.5 hours) at your home. Hands-on board work, live piece movement, and direct feedback from certified coaches.',
    icon: '🤝',
    type: CourseType.PRIVATE_MENTORSHIP,
    features: [
      'Board visualization & position analysis',
      'Opening repertoire development',
      'Tactical sharpness & calculation speed',
      'Endgame fundamentals & advanced techniques',
      'Tournament debut preparation',
      'All ages & levels (4-80+)',
    ],
    price: 'S$50-70/hour',
  },
  {
    id: '1',
    title: 'School CCA Programs',
    description: 'Structured chess curriculum for school groups. Build competitive players with systematic training in fundamentals, tactics, strategy, and tournament play.',
    icon: '🏫',
    type: CourseType.SCHOOL_CCA,
    features: [
      'Beginner to advanced progression system',
      'Foundational tactics & opening principles',
      'Middle-game planning & strategic thinking',
      'Tournament coaching & match preparation',
      'FIDE rating facilitation',
      'Flexible group scheduling (min. 4 students)',
    ],
    price: 'S$25-35/student',
  },
];

// Contact information
export const CONTACT = {
  phone: '+65 8178 0206',
  whatsapp: '+65 8178 0206',
  telegram: '@unknown_blaze',
  address: 'Singapore',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/blazingchessacademy',
  facebook: 'https://facebook.com/blazingchessacademy',
  youtube: 'https://youtube.com/@blazingchessacademy',
} as const;

// API endpoints (mocked for now)
export const API_ENDPOINTS = {
  registration: '/api/registration',
  contact: '/api/contact',
  courses: '/api/courses',
  tournaments: '/api/tournaments',
} as const;
