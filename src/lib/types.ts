/**
 * Blazing Chess Academy - Type Definitions
 * Brand: Ignite your potential
 */

// Student interface
export interface Student {
  id: string;
  name: string;
  parentName: string;
  currentElo?: number;
  school: string;
  contactNumber: string;
  dateOfBirth?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Course interface
export interface Course {
  id: string;
  title: string;
  description: string;
  type: CourseType;
  level: CourseLevel;
  duration: string; // e.g., "8 weeks", "3 months"
  price: number;
  currency: string;
  maxStudents: number;
  currentEnrollment: number;
  instructor: string;
  schedule?: {
    dayOfWeek: string;
    time: string;
  }[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Course type enum
export enum CourseType {
  SCHOOL_CCA = 'school_cca',
  PRIVATE_MENTORSHIP = 'private_mentorship',
  ONLINE_BLITZ = 'online_blitz',
  GROUP_LESSONS = 'group_lessons',
}

// Course level enum
export enum CourseLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  MASTER = 'master',
}

// Registration request interface
export interface RegistrationRequest {
  parentName: string;
  studentName: string;
  currentElo?: number | null;
  school: string;
  contactNumber: string;
  courseId?: string;
  message?: string;
  preferredSchedule?: string;
}

// Registration response interface
export interface RegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
  error?: string;
}

// Offering card data interface (for landing page)
export interface OfferingCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: CourseType;
  features: string[];
  price?: string;
}

// Tournament interface (for future use)
export interface Tournament {
  id: string;
  name: string;
  type: 'blitz' | 'rapid' | 'classical';
  date: Date;
  registrationDeadline: Date;
  maxParticipants: number;
  currentParticipants: number;
  prizePool?: number;
  isOnline: boolean;
  status: 'upcoming' | 'ongoing' | 'completed';
}
