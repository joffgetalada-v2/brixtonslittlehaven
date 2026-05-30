'use client';
// Client component so that next/image onError (a browser event) is allowed.
import Image from 'next/image';
import { business } from '@/content/site';

export default function LogoImage({ width = 44, height = 44, priority = false, className = '' }) {
  return (
    <div className="relative shrink-0" style={{ width, height }}>
      <Image
        src={business.logo}
        alt={business.logoAlt}
        fill
        sizes={`${Math.max(width, height)}px`}
        className={`object-contain ${className}`}
        priority={priority}
        unoptimized={business.logo.endsWith('.svg')}
        onError={(e) => {
          // Fallback to SVG placeholder if the configured logo file is missing
          if (!e.currentTarget.src.endsWith('/logo.svg')) {
            e.currentTarget.src = '/logo.svg';
          }
        }}
      />
    </div>
  );
}
