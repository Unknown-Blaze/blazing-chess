'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { ContactSection } from '@/components/contact-section';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-gray-900">
      <Navbar />

      {/* Contact Section */}
      <section className="py-24 sm:py-28 md:py-32 bg-gradient-to-b from-white via-amber-50 to-white min-h-screen flex items-center justify-center">
        <ContactSection />
      </section>
    </main>
  );
}
