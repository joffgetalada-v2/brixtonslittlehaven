import Link from 'next/link';
import { business, navLinks } from '@/content/site';
import LogoImage from '@/components/LogoImage';
import Icon from '@/components/Icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="Brixton's Little Haven home">
              <LogoImage width={56} height={56} />
              <span className="font-heading text-lg font-bold leading-tight">
                Brixton's
                <br />
                <span className="text-sun">Little Haven</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-muted">
              {business.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-muted">
              Safe. Structured. Focused on growth.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-navy-muted">
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white transition hover:text-sun"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-navy-muted">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={business.phoneTel} className="flex items-start gap-2 text-warm-white transition hover:text-sun">
                  <Icon name="phone" size={18} className="mt-0.5 shrink-0" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-start gap-2 break-all text-warm-white transition hover:text-sun">
                  <Icon name="mail" size={18} className="mt-0.5 shrink-0" />
                  {business.email}
                </a>
              </li>
              <li>
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-warm-white transition hover:text-sun">
                  <Icon name="messenger" size={18} className="mt-0.5 shrink-0" />
                  Facebook / Messenger
                </a>
              </li>
              <li>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-warm-white transition hover:text-sun">
                  <Icon name="instagram" size={18} className="mt-0.5 shrink-0" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & address */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-navy-muted">
              Visit Us
            </h3>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-warm-white">
              <Icon name="pin" size={18} className="mt-0.5 shrink-0" />
              {business.address}
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm text-warm-white">
              <Icon name="clock" size={18} className="mt-0.5 shrink-0" />
              {business.hours}
            </p>
            <a
              href={business.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full border border-navy-muted px-4 py-1.5 text-xs font-semibold text-warm-white transition hover:border-sun hover:text-sun"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-navy-muted">
            © {year} Brixton's Little Haven. All rights reserved.
          </p>
          <span className="flex items-center gap-4">
            <Link href="/parent-handbook" className="text-xs text-navy-muted transition hover:text-sun">
              Parent Handbook
            </Link>
            <Link href="/privacy-policy" className="text-xs text-navy-muted transition hover:text-sun">
              Privacy Policy
            </Link>
          </span>
          <p className="text-xs text-navy-muted">
            Basak, Lapu-Lapu City, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
