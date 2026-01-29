'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { CoachesFeatures } from '@/components/coaches-features';

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Coaches Section */}
      <section className="py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
        <CoachesFeatures />
      </section>

      {/* Gallery/Images Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              See Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Academy</span> in Action
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-2">
              Get a glimpse of our coaching environment, students in action, and the journey to mastery
            </p>
          </div>

          {/* Image Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Image 1 */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-4 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl">🏫</div>
                <p className="text-gray-300 sm:text-gray-400 font-semibold text-sm sm:text-base">School CCA Sessions</p>
                <p className="text-gray-500 text-xs sm:text-sm">Add your image here</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 2 */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-4 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl">👨‍🏫</div>
                <p className="text-gray-300 sm:text-gray-400 font-semibold text-sm sm:text-base">Coaching Sessions</p>
                <p className="text-gray-500 text-xs sm:text-sm">Add your image here</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 3 */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-4 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl">🏆</div>
                <p className="text-gray-300 sm:text-gray-400 font-semibold text-sm sm:text-base">Tournament Moments</p>
                <p className="text-gray-500 text-xs sm:text-sm">Add your image here</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 4 */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-4 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl">🎯</div>
                <p className="text-gray-300 sm:text-gray-400 font-semibold text-sm sm:text-base">Training Focus</p>
                <p className="text-gray-500 text-xs sm:text-sm">Add your image here</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 5 */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-4 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl">💡</div>
                <p className="text-gray-300 sm:text-gray-400 font-semibold text-sm sm:text-base">Learning Moments</p>
                <p className="text-gray-500 text-xs sm:text-sm">Add your image here</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 6 */}
            <div className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-4 px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl">⚡</div>
                <p className="text-gray-300 sm:text-gray-400 font-semibold text-sm sm:text-base">Blitz Training</p>
                <p className="text-gray-500 text-xs sm:text-sm">Add your image here</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-gray-400 text-base sm:text-lg mb-6 px-2">
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
