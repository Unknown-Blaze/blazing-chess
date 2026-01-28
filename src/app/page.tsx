'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { RegistrationModal } from '@/components/registration-modal';
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
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-conic-gradient(
                  #ffffff 0deg 90deg,
                  #000000 90deg 180deg
                ),
                repeating-conic-gradient(
                  #000000 0deg 90deg,
                  #ffffff 90deg 180deg
                )
              `,
              backgroundSize: '120px 120px',
              backgroundPosition: '0 0, 60px 60px',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        {/* Hero Content - Centered */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <div className="flex justify-center">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/30 backdrop-blur-sm">
              <span className="text-amber-400 text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
                ♚ {BRAND.tagline.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight tracking-tighter px-2">
              <span className="block mb-2 sm:mb-3 text-white">Master</span>
              <span className="block bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                The Game
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-2">
              Elevate your chess strategy, thinking, and competitive spirit. World-class coaching for all levels, all ages.
            </p>
          </div>

          {/* CTA Buttons - Mobile Friendly */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-2">
            <RegistrationModal />
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 transition-all duration-300 text-sm sm:text-base font-bold py-5 sm:py-6 px-6 sm:px-8"
              onClick={() => {
                document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Programs
            </Button>
          </div>

          {/* Floating Stats - Mobile Optimized */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-16 max-w-xl mx-auto px-2">
            <div className="group space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-500 group-hover:scale-105 transition-transform duration-500">
                4-80
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide leading-tight">
                Student Age
              </div>
            </div>
            <div className="group space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 group-hover:scale-105 transition-transform duration-500">
                100%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide leading-tight">
                MoE Certified
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden */}
      </section>

      {/* Why Chess Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Why <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Chess</span> Matters
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light">Chess is more than a game. It&apos;s a proven way to develop skills that shape success in school, work, and life.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl p-8 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Strategic Thinking</h3>
              <p className="text-gray-300 leading-relaxed">
                Chess teaches players to think ahead, analyze consequences, and make smart decisions. These critical thinking skills apply directly to math, science, and problem-solving in everyday life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Character Building</h3>
              <p className="text-gray-300 leading-relaxed">
                Winning and losing teach resilience, humility, and perseverance. Players develop the mental toughness to handle challenges, bounce back from setbacks, and keep improving.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-orange-600/5 rounded-2xl p-8 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-red-300 mb-4">Focus & Discipline</h3>
              <p className="text-gray-300 leading-relaxed">
                Chess demands concentration and patience. Playing regularly builds the ability to focus deeply, block out distractions, and stay disciplined in pursuit of goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Why Choose <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Blazing Chess</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light">We&apos;re not just any chess academy. Here&apos;s what sets us apart.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-amber-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-amber-300 mb-2">Certified & Passionate</h3>
                <p className="text-gray-300 leading-relaxed">
                  All coaches are 100% MoE certified, bringing professional expertise combined with genuine love for chess. We hire coaches who care about your success.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-orange-300 mb-2">Your Coach, Your Choice</h3>
                <p className="text-gray-300 leading-relaxed">
                  You select the coach that fits your learning style and personality. No one-size-fits-all approach. Your comfort and progress come first.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-red-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-red-300 mb-2">Flexible for Everyone</h3>
                <p className="text-gray-300 leading-relaxed">
                  Online, in-person, group classes, or one-on-one lessons. Weekday or weekend. From 4 years old to 80 plus. We fit around your life.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">Free Trial, Zero Pressure</h3>
                <p className="text-gray-300 leading-relaxed">
                  Start with a risk-free trial class. Meet a coach, feel the vibe, and only commit if it&apos;s right for you. No hidden fees or long contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
