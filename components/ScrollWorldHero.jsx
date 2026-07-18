'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { mountScrollWorld } from './scrollworld/scrub-engine';

// Scroll bands: 1.5 + 0.9 + (1.3 + 0.9) * 4 + 1.7 = 12.9 viewport-heights, +1 for the
// engine's completion margin. The SSR fallback reserves this exact height so nothing
// below the hero shifts when the engine mounts.
const TOTAL_VH = 13.9 * 100;

const CONFIG = {
  // Site chrome (Header) stays on top of the flight, so the engine's own topbar is
  // suppressed: no brand, no nav pills, no top CTA. Route rail + section copy remain.
  nav: false,
  hint: 'scroll to fly in',
  diveScroll: 1.3,
  connScroll: 0.9,
  sections: [
    {
      id: 'sw-exterior', label: 'Welcome',
      still: '/scrollworld/still1.webp',
      clip: '/scrollworld/vid/dive1.mp4', clipMobile: '/scrollworld/vid/dive1-m.mp4',
      accent: '#c6402e',
      scroll: 1.5, linger: 0.35,
      eyebrow: 'Beside Gaisano Grand Mall, Basak',
      title: 'A little haven for big beginnings.',
      body: 'Safe, structured indoor care and learning for little ones in Lapu-Lapu City.',
      tags: ['From age 1', 'Mon-Sat 7AM-7PM'],
    },
    {
      id: 'sw-playgroup', label: 'Playgroup',
      still: '/scrollworld/still2.webp',
      clip: '/scrollworld/vid/dive2.mp4', clipMobile: '/scrollworld/vid/dive2-m.mp4',
      accent: '#2b6cb0',
      eyebrow: 'Playgroup',
      title: 'Play with purpose.',
      body: 'Structured, play-based sessions that build social skills, independence, and early learning.',
      tags: ['Ages 1-5', 'Sensory play', 'Circle time'],
    },
    {
      id: 'sw-arts', label: 'Arts & Crafts',
      still: '/scrollworld/still3.webp',
      clip: '/scrollworld/vid/dive3.mp4', clipMobile: '/scrollworld/vid/dive3-m.mp4',
      accent: '#9c4a7f',
      eyebrow: 'Arts & Crafts',
      title: 'Messy hands, proud hearts.',
      body: 'Painting, crafts, and little masterpieces that come home at pickup.',
      tags: ['Creativity', 'Fine motor skills'],
    },
    {
      id: 'sw-chefs', label: 'Little Chefs',
      still: '/scrollworld/still4.webp',
      clip: '/scrollworld/vid/dive4.mp4', clipMobile: '/scrollworld/vid/dive4-m.mp4',
      accent: '#8a6116',
      eyebrow: 'Little Chefs',
      title: 'Tiny cooks, big smiles.',
      body: 'Hands-on cooking play that builds confidence, focus, and following directions.',
      tags: ['Mommy & Me events', 'Play food fun'],
    },
    {
      id: 'sw-tutorial', label: 'Tutorials',
      still: '/scrollworld/still5.webp',
      clip: '/scrollworld/vid/dive5.mp4', clipMobile: '/scrollworld/vid/dive5-m.mp4',
      accent: '#3e7a2e',
      eyebrow: 'Academic Tutorials',
      title: 'Ready for big school.',
      body: "Reading, writing, and numbers at your child's own pace, from age 3 and up.",
      tags: ['School readiness', 'ESL classes'],
    },
    {
      id: 'sw-finale', label: 'Visit Us',
      still: '/scrollworld/still6.webp',
      clip: '/scrollworld/vid/dive6.mp4', clipMobile: '/scrollworld/vid/dive6-m.mp4',
      accent: '#c6402e',
      scroll: 1.7, linger: 0.45,
      eyebrow: 'Learn • Play • Grow • Shine',
      title: 'Come see it for yourself.',
      body: 'Your first visit includes a free trial session. We would love to meet you.',
      tags: [],
      cta: {
        primary: { label: 'Book a Free Trial', href: '/contact' },
        secondary: { label: 'See All Programs', href: '/programs' },
      },
    },
  ],
  connectors: [
    '/scrollworld/vid/conn1.mp4',
    '/scrollworld/vid/conn2.mp4',
    '/scrollworld/vid/conn3.mp4',
    '/scrollworld/vid/conn4.mp4',
    '/scrollworld/vid/conn5.mp4',
  ],
  connectorsMobile: [
    '/scrollworld/vid/conn1-m.mp4',
    '/scrollworld/vid/conn2-m.mp4',
    '/scrollworld/vid/conn3-m.mp4',
    '/scrollworld/vid/conn4-m.mp4',
    '/scrollworld/vid/conn5-m.mp4',
  ],
};

export default function ScrollWorldHero() {
  const worldRef = useRef(null);
  const mountedOnce = useRef(false);

  useEffect(() => {
    const node = worldRef.current;
    // The engine has no unmount API; the guard keeps React 19 dev double-effects
    // from building the world twice.
    if (!node || mountedOnce.current) return;
    mountedOnce.current = true;
    node.innerHTML = '';
    mountScrollWorld(node, CONFIG);
    // The vh reservation only exists for zero-CLS SSR. The engine sizes its own
    // track from innerHeight, which diverges from 1vh on phones (URL bar), so
    // hand the height over to the engine once it has built the world.
    node.style.minHeight = '';
  }, []);

  return (
    <section aria-label="A scrolling tour through Brixton's Little Haven">
      {/* Start the first clip's download before React boots; the engine's fetch then
          reads it from the HTTP cache. Media queries mirror the engine's isMobile(). */}
      <link
        rel="preload"
        as="fetch"
        crossOrigin="anonymous"
        href={CONFIG.sections[0].clip}
        media="(min-width: 861px) and (hover: hover) and (pointer: fine)"
      />
      <link
        rel="preload"
        as="fetch"
        crossOrigin="anonymous"
        href={CONFIG.sections[0].clipMobile}
        media="(max-width: 860px), ((hover: none) and (pointer: coarse))"
      />
      <div ref={worldRef} style={{ minHeight: `${TOTAL_VH}vh` }}>
        {/* Server-rendered landing frame: LCP poster + first-scene copy. The engine
            replaces this on mount with the same visual, so hydration is seamless. */}
        <div className="relative flex h-svh items-end overflow-hidden bg-cream">
          <Image
            src="/scrollworld/still1.webp"
            alt="Miniature clay world of Brixton's Little Haven: a bright storefront beside the mall"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-10 max-w-xl p-8 pb-24 sm:p-14 sm:pb-28">
            <p className="text-sm font-bold uppercase tracking-wide text-coral-ink">
              Beside Gaisano Grand Mall, Basak
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
              A little haven for big beginnings.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-soft">
              Safe, structured indoor care and learning for little ones in Lapu-Lapu City.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
