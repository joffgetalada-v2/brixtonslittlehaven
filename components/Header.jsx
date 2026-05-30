'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { business, navLinks } from '@/content/site';
import LogoImage from '@/components/LogoImage';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-cream'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={close} aria-label="Brixton's Little Haven home">
          <LogoImage width={44} height={44} priority />
          <span
            className="hidden text-base font-bold leading-tight text-navy sm:block"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Brixton's
            <br />
            <span className="text-coral">Little Haven</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-semibold text-navy transition-colors hover:bg-coral/10 hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-coral px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-opacity-90 sm:block"
          >
            Book a Free Trial
          </Link>

          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full hover:bg-coral/10 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className={`h-0.5 w-5 bg-navy transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-navy transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-navy transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col border-t border-navy/10 bg-cream px-4 pb-4 pt-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-xl px-4 py-3 text-base font-semibold text-navy hover:bg-coral/10 hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={close}
            className="mt-3 rounded-full bg-coral px-5 py-3 text-center text-base font-bold text-white"
          >
            Book a Free Trial ✨
          </Link>
        </nav>
      </div>
    </header>
  );
}
