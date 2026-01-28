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
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto px-2">
            <div className="group space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-300">
                20-26
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide leading-tight">
                Coach Age
              </div>
            </div>
            <div className="group space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-500 group-hover:scale-110 transition-transform duration-300">
                4-80
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide leading-tight">
                Student Range
              </div>
            </div>
            <div className="group space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide leading-tight">
                MoE Certified
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-7 h-7 text-amber-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Why <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-4 px-2">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-amber-500 rounded-full" />
              <div className="text-amber-400 text-xl sm:text-2xl flex-shrink-0">♚</div>
              <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-amber-500 rounded-full" />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-2xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-3 sm:mb-4">Strategic Excellence</h3>
              <p>
                We believe chess is more than a game—it's a powerful tool for developing critical thinking, strategic planning, and resilience. Our coaches, aged 20-26, bring fresh perspectives and energy to every lesson, making learning engaging and effective for students of all ages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-3 sm:mb-4">Your Choice, Your Coach</h3>
              <p>
                Every student learns differently. That's why we empower you to select the coach who best matches your learning style and goals. All our coaches are MoE certified professionals committed to your success, with expertise spanning beginner to advanced levels.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-900/20 to-gray-900/20 rounded-2xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-300 mb-3 sm:mb-4">Accessible to Everyone</h3>
              <p>
                Whether you're 4 years old taking your first steps on the board or 80 years old rediscovering the game, chess is for everyone. We offer flexible scheduling across weekdays and weekends, with options for school groups, one-on-one online coaching, and face-to-face instruction tailored to your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Mobile Optimized */}
      <section id="offerings" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="absolute inset-0 opacity-3 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-600 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-2">
              Choose the program that fits your journey. From school groups to personalized coaching, we have the perfect fit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {OFFERINGS.map((offering, idx) => (
              <Card
                key={offering.id}
                className="bg-gradient-to-br from-gray-900 to-gray-950 border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-3 group flex flex-col h-full"
              >
                <CardHeader className="space-y-3 sm:space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    {offering.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {offering.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      {offering.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col space-y-6">
                  <ul className="space-y-2 sm:space-y-3 flex-1">
                    {offering.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base leading-relaxed group/item">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4 pt-4 border-t border-gray-800">
                    <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-xl p-4 border border-amber-500/30">
                      <div className="text-amber-300 font-black text-xl sm:text-2xl">
                        {offering.price}
                      </div>
                      <div className="text-gray-400 text-xs font-semibold mt-1 uppercase tracking-wide">
                        Flexible Rates
                      </div>
                    </div>
                    <RegistrationModal
                      trigger={
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black text-sm sm:text-base py-5 sm:py-6 shadow-lg hover:shadow-amber-500/50 transition-all duration-300 uppercase tracking-wide">
                          Start Trial
                        </Button>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
            Ready to <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Ignite</span> Your Potential?
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-400 leading-relaxed font-light px-2">
            Start with a free trial class. No pressure, no commitment—just pure chess mastery.
          </p>
          <RegistrationModal
            trigger={
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-8 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 uppercase tracking-wide">
                Book Your Trial
              </Button>
            }
          />
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <CoachesFeatures />
      </section>

      {/* Gallery/Images Section - Mobile Optimized */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
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
              Want to see more? Follow us on social media for daily updates and coaching tips
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-2">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base uppercase tracking-wide w-full sm:w-auto">
                Follow Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-black to-black">
        <ContactSection />
      </section>
    </main>
  );
}
