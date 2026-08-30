'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { navLinks } from '@/content/site';
import LogoImage from '@/components/LogoImage';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();

  // Sticky at -1px: the header clips by one pixel once it pins, so an
  // IntersectionObserver at threshold 1 detects "stuck" without any scroll listener.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(entry.intersectionRatio < 1),
      { threshold: [1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render is React's documented pattern for reacting to a changed value; an
  // effect would queue a second render pass and paint the open menu first.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      ref={ref}
      className={`sticky -top-px z-50 transition-shadow duration-300 ${
        stuck ? 'bg-cream/95 shadow-sm backdrop-blur-md' : 'bg-cream'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Brixton's Little Haven home">
          <LogoImage width={44} height={44} priority />
          <span className="hidden font-heading text-base font-bold leading-tight text-navy sm:block">
            Brixton&apos;s
            <br />
            <span className="text-coral-ink">Little Haven</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? 'bg-coral-tint text-coral-ink'
                  : 'text-navy hover:bg-coral-tint hover:text-coral-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-coral-deep px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-coral-ink active:scale-[0.98] sm:block"
          >
            Book a Free Trial
          </Link>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full hover:bg-coral-tint lg:hidden"
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

      {/* Mobile menu — grid-rows animation (no clipped content), inert while closed
          so its links leave the tab order and accessibility tree. */}
      <div
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col border-t border-navy/10 bg-cream px-4 pb-4 pt-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-base font-semibold ${
                  isActive(link.href)
                    ? 'bg-coral-tint text-coral-ink'
                    : 'text-navy hover:bg-coral-tint hover:text-coral-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 rounded-full bg-coral-deep px-5 py-3 text-center text-base font-bold text-white transition hover:bg-coral-ink active:scale-[0.98]"
            >
              Book a Free Trial
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
