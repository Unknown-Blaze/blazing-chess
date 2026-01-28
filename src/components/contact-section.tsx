'use client';

/**
 * Blazing Chess Academy - Contact Section Component
 * Multi-channel contact with form
 */

import { useState } from 'react';
import { CONTACT, BRAND } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ContactChannel = 'whatsapp' | 'telegram';

interface FormData {
  studentName: string;
  contactNumber: string;
  contactRepresentative: string;
  elo: string;
  ageGroup: string;
}

export function ContactSection() {
  const [activeChannel, setActiveChannel] = useState<ContactChannel>('whatsapp');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    contactNumber: '',
    contactRepresentative: '',
    elo: '',
    ageGroup: '',
  });

  const channels = [
    {
      id: 'whatsapp' as const,
      label: 'WhatsApp',
      icon: '💬',
      value: CONTACT.whatsapp,
      description: 'Fast & Convenient',
      action: `https://wa.me/65${CONTACT.whatsapp.replace('+65 ', '').replace(/\s/g, '')}`,
      isLink: true,
    },
    {
      id: 'telegram' as const,
      label: 'Telegram',
      icon: '✈️',
      value: CONTACT.telegram,
      description: 'Private & Secure',
      action: `https://t.me/${CONTACT.telegram.replace('@', '')}`,
      isLink: true,
    },
  ];

  const activeChannelData = channels.find((c) => c.id === activeChannel);

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black">
            Get in{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
            Reach out through WhatsApp or Telegram for inquiries, trial classes, and coaching guidance
          </p>
        </div>

        {/* Contact Tabs */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 sm:p-12 border border-amber-500/20 hover:border-amber-500/30 transition-all duration-300">
          {/* Channel Buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            {channels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                className={cn(
                  'px-8 py-4 rounded-xl font-bold transition-all duration-300 text-base uppercase tracking-wide flex items-center justify-center gap-2',
                  activeChannel === channel.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg shadow-amber-500/50 scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-amber-500/50'
                )}
              >
                <span className="text-2xl">{channel.icon}</span>
                {channel.label}
              </button>
            ))}
          </div>

          {/* Active Channel Content - Centered */}
          {activeChannelData && (
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-black/60 rounded-2xl p-8 border border-amber-500/30 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="text-7xl">{activeChannelData.icon}</div>
                  <h3 className="text-3xl font-black text-white">{activeChannelData.label}</h3>
                  <p className="text-amber-400 text-base font-bold uppercase tracking-wide">{activeChannelData.description}</p>
                  <p className="text-3xl font-black text-amber-300 font-mono tracking-wider">
                    {activeChannelData.value}
                  </p>
                </div>
              </div>

              {/* Messages by Channel */}
              <div className="bg-black/40 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm">
                <div className="space-y-4 text-gray-300 text-base text-center">
                  {activeChannelData.id === 'whatsapp' && (
                    <>
                      <p className="font-semibold">✓ Quick responses to inquiries</p>
                      <p className="font-semibold">✓ Share class schedules and updates</p>
                      <p className="font-semibold">✓ Book trial classes easily</p>
                      <p className="font-semibold">✓ Get coaching recommendations</p>
                    </>
                  )}

                  {activeChannelData.id === 'telegram' && (
                    <>
                      <p className="font-semibold">✓ Private and secure messaging</p>
                      <p className="font-semibold">✓ Direct contact with coaches</p>
                      <p className="font-semibold">✓ Share chess resources and tips</p>
                      <p className="font-semibold">✓ Exclusive coach announcements</p>
                    </>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Button
                onClick={() => window.open(activeChannelData.action, '_blank')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black py-7 text-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 uppercase tracking-wide rounded-xl"
              >
                Contact us on {activeChannelData.label}
              </Button>
            </div>
          )}
        </div>

        {/* Additional Info - Centered */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 text-center">
          <Button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black py-8 text-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 uppercase tracking-wide rounded-2xl h-auto flex flex-col items-center justify-center gap-3"
          >
            <div className="text-4xl">📝</div>
            <span>Fill a Form</span>
          </Button>
          <div className="space-y-3 p-6 rounded-2xl border-2 border-amber-500/30">
            <div className="text-4xl">⚡</div>
            <h4 className="text-white font-black text-lg">Quick Response</h4>
            <p className="text-gray-400">We reply within 24 hours</p>
          </div>
        </div>

        {/* Contact Form - Hidden by default */}
        {isFormOpen && (
          <div className="mt-16 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-2xl p-8 border border-amber-500/20">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-white mb-2">Tell us about yourself</h3>
              <p className="text-gray-400">Fill in the details and we&apos;ll get back to you shortly</p>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitMessage('');

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                  });

                  const result = await response.json();

                  if (response.ok) {
                    setSubmitMessage('✓ Thank you! We&apos;ll contact you soon.');
                    setFormData({
                      studentName: '',
                      contactNumber: '',
                      contactRepresentative: '',
                      elo: '',
                      ageGroup: '',
                    });
                    setTimeout(() => setIsFormOpen(false), 2000);
                  } else {
                    setSubmitMessage('Error submitting form. Please try again.');
                  }
                } catch (error) {
                  setSubmitMessage('Error submitting form. Please try again.');
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="space-y-6"
            >
              {/* Student Name */}
              <div>
                <label className="block text-sm font-bold text-amber-400 mb-2">Student Name *</label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full bg-black/50 border border-amber-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                  placeholder="Enter student&apos;s name"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm font-bold text-amber-400 mb-2">Contact Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  className="w-full bg-black/50 border border-amber-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                  placeholder="+65 XXXX XXXX"
                />
              </div>

              {/* Contact Representative */}
              <div>
                <label className="block text-sm font-bold text-amber-400 mb-2">Contact Representative (Parent/Guardian) *</label>
                <input
                  type="text"
                  required
                  value={formData.contactRepresentative}
                  onChange={(e) => setFormData({ ...formData, contactRepresentative: e.target.value })}
                  className="w-full bg-black/50 border border-amber-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                  placeholder="Parent/Guardian name"
                />
              </div>

              {/* Age Group */}
              <div>
                <label className="block text-sm font-bold text-amber-400 mb-2">Age Group *</label>
                <select
                  required
                  value={formData.ageGroup}
                  onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                  className="w-full bg-black/50 border border-amber-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select age group</option>
                  <option value="4-8">4-8 years</option>
                  <option value="9-12">9-12 years</option>
                  <option value="13-18">13-18 years</option>
                  <option value="18+">18+ years</option>
                </select>
              </div>

              {/* Current ELO */}
              <div>
                <label className="block text-sm font-bold text-amber-400 mb-2">Current ELO (Online)</label>
                <input
                  type="text"
                  value={formData.elo}
                  onChange={(e) => setFormData({ ...formData, elo: e.target.value })}
                  className="w-full bg-black/50 border border-amber-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                  placeholder="e.g., 1200 (optional)"
                />
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg text-center font-bold ${
                  submitMessage.includes('✓') 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black py-3 text-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 uppercase tracking-wide rounded-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </Button>

              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="w-full text-gray-400 hover:text-gray-300 py-2 text-sm transition-colors"
              >
                Close
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
