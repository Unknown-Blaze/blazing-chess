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
          ? 'bg-black/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg'
          : 'bg-gradient-to-b from-black via-black/80 to-transparent'
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
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">♚</span>
              <div className="text-left">
                <div className="text-lg font-black text-white tracking-tight leading-none">
                  {BRAND.name}
                </div>
                <div className="text-xs text-amber-400 font-bold tracking-widest uppercase">
                  {BRAND.tagline}
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Items - Absolutely Centered */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2 text-sm font-bold transition-all duration-300 relative group uppercase tracking-wide ${
                  pathname === item.href
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
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

            {/* Mobile menu button - placeholder */}
            <button className="md:hidden p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition-colors text-amber-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
