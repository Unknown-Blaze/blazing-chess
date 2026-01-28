import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * Used throughout the app for conditional styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format phone number for display (SG format)
 * e.g., 91234567 -> 9123 4567
 */
export function formatPhoneNumber(phone: string): string {
  if (phone.length !== 8) return phone;
  return `${phone.slice(0, 4)} ${phone.slice(4)}`;
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, currency: string = 'SGD'): string {
  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-SG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Validate Singapore phone number
 */
export function isValidSGPhone(phone: string): boolean {
  return /^[3689]\d{7}$/.test(phone);
}
