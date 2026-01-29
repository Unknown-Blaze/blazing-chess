'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { CoachesFeatures } from '@/components/coaches-features';

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-gray-900 page-fade">
      <Navbar />

      {/* Coaches Section */}
      <section className="py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-amber-50 min-h-screen">
        <CoachesFeatures />
      </section>

      {/* Gallery/Images Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6 bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-amber-200 shadow-lg shadow-amber-200/30">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              See Our <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Academy</span> in Action
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light px-2">
              Get a glimpse of our coaching environment, students in action, and the journey to mastery in Singapore
            </p>
          </div>

          {/* Image Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/40">
              <Image
                src="/school_giis_playing.jpg"
                alt="School CCA chess session in Singapore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">School CCA Sessions</div>
            </div>

            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/40">
              <Image
                src="/coach_teaching_private_student_informal.jpg"
                alt="Coach teaching a private student"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">Personal Coaching</div>
            </div>

            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/40">
              <Image
                src="/slightly_blurred_tournament.jpg"
                alt="Tournament moments"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold">Tournament Moments</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-gray-700 text-base sm:text-lg mb-6 px-2">
              Ready to start your chess journey?
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-2">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base uppercase tracking-wide w-full sm:w-auto rounded-lg transition-all duration-300"
              >
                Book Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
