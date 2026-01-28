/**
 * Blazing Chess Academy - Form Validation Schemas
 * Using Zod for type-safe validation
 */

import { z } from 'zod';

// Singapore phone number regex (8 digits)
const singaporePhoneRegex = /^[3689]\d{7}$/;

// Registration form validation schema
export const registrationSchema = z.object({
  parentName: z
    .string()
    .min(2, 'Parent name must be at least 2 characters')
    .max(100, 'Parent name must be less than 100 characters')
    .trim(),
  
  studentName: z
    .string()
    .min(2, 'Student name must be at least 2 characters')
    .max(100, 'Student name must be less than 100 characters')
    .trim(),
  
  currentElo: z
    .number()
    .int()
    .min(100, 'Elo must be at least 100')
    .max(3000, 'Elo must be less than 3000')
    .optional()
    .nullable(),
  
  school: z
    .string()
    .min(2, 'School name must be at least 2 characters')
    .max(200, 'School name must be less than 200 characters')
    .trim(),
  
  contactNumber: z
    .string()
    .regex(singaporePhoneRegex, 'Please enter a valid Singapore phone number (8 digits starting with 3, 6, 8, or 9)')
    .trim(),
  
  courseId: z.string().optional(),
  
  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional(),
  
  preferredSchedule: z.string().optional(),
});

// Type inference from schema
export type RegistrationFormData = z.infer<typeof registrationSchema>;

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .trim(),
  
  phone: z
    .string()
    .regex(singaporePhoneRegex, 'Please enter a valid Singapore phone number')
    .optional()
    .or(z.literal('')),
  
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(150, 'Subject must be less than 150 characters')
    .trim(),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
