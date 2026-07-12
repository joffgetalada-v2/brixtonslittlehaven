import Image from 'next/image';
import { business } from '@/content/site';

export default function LogoImage({ width = 44, height = 44, priority = false, className = '' }) {
  return (
    <Image
      src="/logo.png"
      alt={business.logoAlt}
      width={width}
      height={height}
      sizes={`${Math.max(width, height)}px`}
      className={`shrink-0 ${className}`}
      priority={priority}
    />
  );
}
