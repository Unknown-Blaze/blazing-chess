'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { BRAND } from '@/lib/constants';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-lg'
          : 'bg-gradient-to-b from-amber-50/80 via-white/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#000000" stroke="url(#flameGradient)" strokeWidth="3"/>
                  <g transform="translate(50, 50)">
                    <rect x="-2" y="-28" width="4" height="10" fill="url(#flameGradient)"/>
                    <rect x="-6" y="-24" width="12" height="4" fill="url(#flameGradient)"/>
                    <circle cx="0" cy="-12" r="6" fill="url(#flameGradient)"/>
                    <path d="M -8,-8 L -10,15 L 10,15 L 8,-8 Z" fill="url(#flameGradient)"/>
                    <rect x="-12" y="15" width="24" height="6" fill="url(#flameGradient)"/>
                    <path d="M -14,21 L -12,25 L 12,25 L 14,21 Z" fill="url(#flameGradient)"/>
                  </g>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-gray-900 tracking-tight leading-none">
                  {BRAND.name}
                </div>
                <div className="text-xs text-amber-600 font-bold tracking-widest uppercase">
                  {BRAND.tagline}
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Items - Absolutely Centered (Desktop) */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2 text-sm font-bold transition-all duration-300 relative group uppercase tracking-wide ${
                  pathname === item.href
                    ? 'text-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-amber-200 md:hidden z-40">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg font-bold transition-all duration-300 uppercase tracking-wide ${
                      pathname === item.href
                        ? 'bg-amber-500 text-black'
                        : 'text-gray-700 hover:bg-amber-500/10 hover:text-amber-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button - Right Aligned */}
          <div className="flex items-center gap-4">
            <Link href="/programs">
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hidden sm:inline-flex uppercase tracking-wide text-xs"
              >
                Get Started
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-amber-200/60 hover:bg-amber-200 transition-colors text-amber-700"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
