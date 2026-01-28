'use client';

/**
 * Blazing Chess Academy - Registration Modal
 * A beautiful dark-themed modal with form validation
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { registrationSchema, type RegistrationFormData } from '@/lib/validations';
import { API_ENDPOINTS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface RegistrationModalProps {
  trigger?: React.ReactNode;
  courseId?: string;
  defaultOpen?: boolean;
}

export function RegistrationModal({
  trigger,
  courseId,
  defaultOpen = false,
}: RegistrationModalProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      courseId,
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Mock API call (replace with actual Supabase call later)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulated API call
      console.log('Registration data:', data);
      
      // TODO: Replace with actual Supabase call
      // const response = await fetch(API_ENDPOINTS.registration, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      setSubmitStatus({
        type: 'success',
        message: 'Registration successful! We\'ll contact you within 24 hours.',
      });

      // Reset form and close modal after 2 seconds
      setTimeout(() => {
        reset();
        setOpen(false);
        setSubmitStatus({ type: null, message: '' });
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
          >
            Join the Academy
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="bg-gray-950 border-amber-500/20 text-white sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Join Blazing Chess Academy
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill in your details below. We&apos;ll reach out within 24 hours to discuss the perfect program for you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Parent Name */}
          <div className="space-y-2">
            <Label htmlFor="parentName" className="text-gray-200">
              Parent Name <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="parentName"
              {...register('parentName')}
              className={cn(
                'bg-gray-900 border-gray-800 text-white placeholder:text-gray-500',
                'focus:border-amber-500 focus:ring-amber-500/20',
                errors.parentName && 'border-red-500 focus:border-red-500'
              )}
              placeholder="Enter parent's full name"
            />
            {errors.parentName && (
              <p className="text-sm text-red-400">{errors.parentName.message}</p>
            )}
          </div>

          {/* Student Name */}
          <div className="space-y-2">
            <Label htmlFor="studentName" className="text-gray-200">
              Student Name <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="studentName"
              {...register('studentName')}
              className={cn(
                'bg-gray-900 border-gray-800 text-white placeholder:text-gray-500',
                'focus:border-amber-500 focus:ring-amber-500/20',
                errors.studentName && 'border-red-500 focus:border-red-500'
              )}
              placeholder="Enter student's full name"
            />
            {errors.studentName && (
              <p className="text-sm text-red-400">{errors.studentName.message}</p>
            )}
          </div>

          {/* Current Elo (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="currentElo" className="text-gray-200">
              Current Elo Rating <span className="text-gray-500 text-sm">(Optional)</span>
            </Label>
            <Input
              id="currentElo"
              type="number"
              {...register('currentElo', {
                setValueAs: (v) => (v === '' ? null : parseInt(v, 10)),
              })}
              className={cn(
                'bg-gray-900 border-gray-800 text-white placeholder:text-gray-500',
                'focus:border-amber-500 focus:ring-amber-500/20',
                errors.currentElo && 'border-red-500 focus:border-red-500'
              )}
              placeholder="e.g., 1200"
            />
            {errors.currentElo && (
              <p className="text-sm text-red-400">{errors.currentElo.message}</p>
            )}
          </div>

          {/* School */}
          <div className="space-y-2">
            <Label htmlFor="school" className="text-gray-200">
              School <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="school"
              {...register('school')}
              className={cn(
                'bg-gray-900 border-gray-800 text-white placeholder:text-gray-500',
                'focus:border-amber-500 focus:ring-amber-500/20',
                errors.school && 'border-red-500 focus:border-red-500'
              )}
              placeholder="Enter school name"
            />
            {errors.school && (
              <p className="text-sm text-red-400">{errors.school.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <Label htmlFor="contactNumber" className="text-gray-200">
              Contact Number <span className="text-orange-500">*</span>
            </Label>
            <Input
              id="contactNumber"
              {...register('contactNumber')}
              className={cn(
                'bg-gray-900 border-gray-800 text-white placeholder:text-gray-500',
                'focus:border-amber-500 focus:ring-amber-500/20',
                errors.contactNumber && 'border-red-500 focus:border-red-500'
              )}
              placeholder="91234567"
              maxLength={8}
            />
            {errors.contactNumber && (
              <p className="text-sm text-red-400">{errors.contactNumber.message}</p>
            )}
            <p className="text-xs text-gray-500">Singapore mobile number (8 digits)</p>
          </div>

          {/* Message (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-200">
              Additional Message <span className="text-gray-500 text-sm">(Optional)</span>
            </Label>
            <Textarea
              id="message"
              {...register('message')}
              className={cn(
                'bg-gray-900 border-gray-800 text-white placeholder:text-gray-500',
                'focus:border-amber-500 focus:ring-amber-500/20 min-h-[80px]',
                errors.message && 'border-red-500 focus:border-red-500'
              )}
              placeholder="Any specific requirements or questions?"
            />
            {errors.message && (
              <p className="text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Status */}
          {submitStatus.type && (
            <div
              className={cn(
                'p-3 rounded-lg text-sm',
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              )}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Registration'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
