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
    title: 'Online One-on-One Classes',
    description: 'Personalized online coaching with flexible scheduling. Learn from young, passionate coaches dedicated to your progress.',
    icon: '💻',
    type: CourseType.PRIVATE_MENTORSHIP,
    features: [
      'Choose your preferred coach',
      'Personalized learning plan',
      'MoE Certified young adult coaches',
      'Flexible scheduling (weekdays & weekends)',
      'Free trial class included',
      'All ages welcome',
    ],
    price: 'From S$50/hour',
  },
  {
    id: '3',
    title: 'Face-to-Face Classes',
    description: 'Learn directly from our coaches in a personal, interactive environment. Perfect for hands-on chess mastery.',
    icon: '🤝',
    type: CourseType.PRIVATE_MENTORSHIP,
    features: [
      'One-on-one or small group sessions',
      'Direct feedback from coaches',
      'MoE Certified young adult coaches',
      'Free trial class included',
      'Weekdays & weekends available',
      'All ages welcome',
    ],
    price: 'From S$60/hour',
  },
  {
    id: '1',
    title: 'School CCA Coaching',
    description: 'Comprehensive chess training programs tailored for school Co-Curricular Activities. Build your school\'s chess champions with expert guidance.',
    icon: '🏫',
    type: CourseType.SCHOOL_CCA,
    features: [
      'Structured curriculum aligned with school schedules',
      'Group sessions for 8-15 students',
      'MoE Certified coaches',
      'Tournament preparation',
      'Free trial class available',
      'Available weekdays & weekends',
    ],
    price: 'From S$25/student/month',
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
