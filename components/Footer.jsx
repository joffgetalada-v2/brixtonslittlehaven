import Link from 'next/link';
import { business, navLinks } from '@/content/site';
import LogoImage from '@/components/LogoImage';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="Brixton's Little Haven home">
              <LogoImage width={56} height={56} />
              <span className="text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Brixton's
                <br />
                <span className="text-coral">Little Haven</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {business.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Safe. Structured. Focused on growth.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/50">
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href={business.phoneTel} className="flex items-start gap-2 hover:text-coral transition">
                  <span className="mt-0.5">📞</span>
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-start gap-2 hover:text-coral transition break-all">
                  <span className="mt-0.5">✉️</span>
                  {business.email}
                </a>
              </li>
              <li>
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-coral transition">
                  <span className="mt-0.5">💬</span>
                  Facebook / Messenger
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & address */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/50">
              Visit Us
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              📍 {business.address}
            </p>
            <p className="mt-3 text-sm text-white/80">
              🕐 {business.hours}
            </p>
            <a
              href={business.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 hover:border-coral hover:text-coral transition"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} Brixton's Little Haven. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Basak, Lapu-Lapu City, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
