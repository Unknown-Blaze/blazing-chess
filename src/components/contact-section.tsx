'use client';

/**
 * Blazing Chess Academy - Contact Section Component
 * Multi-channel contact with tabs
 */

import { useState } from 'react';
import { CONTACT, BRAND } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ContactChannel = 'whatsapp' | 'telegram';

export function ContactSection() {
  const [activeChannel, setActiveChannel] = useState<ContactChannel>('whatsapp');

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
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
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-3">
            <div className="text-4xl">✓</div>
            <h4 className="text-white font-black text-lg">Quick Response</h4>
            <p className="text-gray-400">We reply within 24 hours</p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🎓</div>
            <h4 className="text-white font-black text-lg">Trial Class</h4>
            <p className="text-gray-400">Free trial to find your ideal coach</p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">📅</div>
            <h4 className="text-white font-black text-lg">Flexible Times</h4>
            <p className="text-gray-400">Classes at your convenience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
