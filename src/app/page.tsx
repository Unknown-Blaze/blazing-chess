'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { CoachesFeatures } from '@/components/coaches-features';
import { ContactSection } from '@/components/contact-section';
import { BRAND, OFFERINGS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-amber-50 text-gray-900 page-fade">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Warm Photo Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/chess_board_with_players_around_it.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 via-white/80 to-amber-50/95" />

        {/* Hero Content - Centered */}
        <div className="relative z-10 w-full pb-12 pt-6 sm:px-12 lg:px-12 text-center space-y-6 sm:space-y-8">
          {/* <div className="flex justify-center"> */}
            {/* <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/30 backdrop-blur-sm">
              <span className="text-amber-400 text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
                ♚ {BRAND.tagline.toUpperCase()}
              </span>
            </div> */}
          {/* </div> */}

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold">
              🇸🇬 Singapore-based • MoE-certified coaches
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight tracking-tighter px-2">
              <span className="block mb-2 sm:mb-3 text-gray-900">Build Your</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                Chess Mastery
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light px-2">
              From tactical brilliance to endgame precision. Singapore-based FIDE-rated coaching for tournament players and rising talents. All ages, all levels.
            </p>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              MoE-Certified Coaches • Tournament-Ready Training
            </p>
          </div>

          {/* CTA Buttons - Mobile Friendly */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-2">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold py-5 sm:py-6 px-6 sm:px-8 shadow-lg hover:shadow-amber-500/50 transition-all duration-300 text-sm sm:text-base"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Book Your Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-amber-600 text-amber-800 hover:bg-amber-200/70 hover:text-amber-900 transition-all duration-300 text-sm sm:text-base font-bold py-5 sm:py-6 px-6 sm:px-8"
              onClick={() => {
                window.location.href = '/programs';
              }}
            >
              View Programs
            </Button>
          </div>

          {/* Floating Stats - Mobile Optimized */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-16 max-w-xl mx-auto px-2">
            <div className="group space-y-2 sm:space-y-3 bg-white/60 rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-600 group-hover:scale-105 transition-transform duration-500">
                4-80
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold uppercase tracking-wide">
                Student Age
              </div>
            </div>
            <div className="group space-y-2 sm:space-y-3 bg-white/60 rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-500 group-hover:scale-105 transition-transform duration-500">
                100%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold uppercase tracking-wide">
                MoE Certified
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden */}
      </section>

      {/* Why Chess Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Why <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Chess</span> Matters
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto font-light">Chess is more than a game. It&apos;s a proven way to develop skills that shape success in school, work, and life.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-8 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/40">
              <div className="text-5xl mb-4">♞</div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Opening Theory</h3>
              <p className="text-gray-700 leading-relaxed">
                Master popular openings like the Sicilian, Ruy Lopez, and French Defence. Learn opening principles—control the center, develop quickly, king safety—and why they matter in modern chess.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/40">
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Tactical Mastery</h3>
              <p className="text-gray-700 leading-relaxed">
                Intensive tactical training covering pins, forks, skewers, discovered attacks, and sacrifices. Daily puzzle training sharpens calculation speed and tactical vision.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:shadow-red-200/40">
              <div className="text-5xl mb-4">♟️</div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">Endgame Technique</h3>
              <p className="text-gray-700 leading-relaxed">
                Essential endgames—King & Pawn, Rook, Minor pieces. Strategic thinking in simplified positions. Win your games in the final phase with precision and pawn structure mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/two_serious_players_playing_chess.jpg')" }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Why Choose <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Blazing Chess</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto font-light">Competitive tournament coaching with a focus on real chess development.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-amber-600 pl-6 py-4 bg-white/70 rounded-r-xl">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">FIDE-Rated Coaching</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our coaches guide students through official tournament play and FIDE rating progression. We facilitate tournament debuts and support competitive development at every level.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6 py-4 bg-white/70 rounded-r-xl">
                <h3 className="text-2xl font-bold text-orange-800 mb-2">Personalized Game Analysis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each student gets detailed game analysis. We identify weaknesses in opening preparation, tactical blindness, and endgame handling to create targeted improvement plans.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-red-600 pl-6 py-4 bg-white/70 rounded-r-xl">
                <h3 className="text-2xl font-bold text-red-800 mb-2">Multiple Coaching Formats</h3>
                <p className="text-gray-700 leading-relaxed">
                  Online 1-on-1, in-person sessions, school CCA programs, or group coaching. Google Meet for arrow diagrams, or board play for tactical sharpness. We adapt to your learning style.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-white/70 rounded-r-xl">
                <h3 className="text-2xl font-bold text-yellow-700 mb-2">Free Trial, Risk-Free</h3>
                <p className="text-gray-700 leading-relaxed">
                  Start with a free trial lesson. Experience the coaching style, meet your potential coach, and only commit if it fits. No pressure, no long-term contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
