'use client';
import Image from 'next/image';
import { business } from '@/content/site';

export default function LogoImage({ width = 44, height = 44, priority = false, className = '' }) {
  return (
    // rounded-full + overflow-hidden clips the black corners of the JPG,
    // leaving only the circular logo design visible.
    <div
      className="relative shrink-0 rounded-full overflow-hidden"
      style={{ width, height }}
    >
      <Image
        src={business.logo}
        alt={business.logoAlt}
        fill
        sizes={`${Math.max(width, height)}px`}
        className={`object-cover ${className}`}
        priority={priority}
        onError={(e) => {
          if (!e.currentTarget.src.endsWith('/logo.svg')) {
            e.currentTarget.src = '/logo.svg';
          }
        }}
      />
    </div>
  );
}
