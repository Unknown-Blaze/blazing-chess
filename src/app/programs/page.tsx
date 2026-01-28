'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { RegistrationModal } from '@/components/registration-modal';
import { OFFERINGS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Programs Section - Mobile Optimized */}
      <section className="py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-black relative min-h-screen">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Programs</span>
            </h1>
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
                    <Button 
                      onClick={() => window.location.href = '/contact'}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black text-sm sm:text-base py-5 sm:py-6 shadow-lg hover:shadow-amber-500/50 transition-all duration-300 uppercase tracking-wide"
                    >
                      Start Trial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
              Ready to <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Start</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-light px-2 max-w-2xl mx-auto">
              Start with a free trial class. No pressure, no commitment, just pure chess mastery.
            </p>
            <RegistrationModal
              trigger={
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-8 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 uppercase tracking-wide">
                  Book Your Trial
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
