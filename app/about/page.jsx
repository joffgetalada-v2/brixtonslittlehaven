import Link from 'next/link';
import Image from 'next/image';
import { business, pillars, spacePhotos } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';

export const metadata = {
  title: 'Our Space',
  description:
    "Discover Brixton's Little Haven — a safe, structured indoor space in Lapu-Lapu City built around three pillars: safety, routine, and child development.",
  alternates: { canonical: '/about' },
};

const spaceFeatures = [
  { icon: '🏠', title: 'Indoor Play Area', desc: 'A clean, safe indoor environment — cool, comfortable, and designed for kids to move freely.' },
  { icon: '🎨', title: 'Creative Corner', desc: 'Dedicated art and craft space stocked with child-safe materials for open-ended exploration.' },
  { icon: '📚', title: 'Learning Area', desc: 'Quiet, structured zone for tutorials, reading, and guided academic activities.' },
  { icon: '🎵', title: 'Music & Movement Space', desc: 'Open floor area for music, dance, gross motor activities, and energetic play.' },
  { icon: '😴', title: 'Rest Corner', desc: 'A calm, cozy space for younger children to nap and recharge during full-day care.' },
  { icon: '🌿', title: 'Monthly Outdoor Trips', desc: 'Beyond the walls — every program includes monthly outdoor exploration adventures.' },
];

const safetyFeatures = [
  'Secured entry and exit — only authorized pickups allowed',
  'Sanitized play equipment and surfaces daily',
  'Child-proofed space with no sharp edges or hazards',
  'Supervised at all times by trained caregivers',
  'Emergency protocols and first-aid ready',
  'Regular health and cleanliness checks',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-navy/90 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold">Our Space</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              A place built for little ones
            </h1>
            <p className="mt-3 text-base text-white/70 max-w-xl mx-auto">
              Every corner of Brixton's Little Haven is designed with your child's safety, comfort, and growth in mind.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">

        {/* Three Pillars */}
        <section>
          <FadeUp className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Built on three pillars
            </h2>
            <p className="mt-2 text-navy/60">The foundation of everything we do.</p>
          </FadeUp>

          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <StaggerItem key={p.id}>
                <div className={`rounded-3xl p-8 text-center shadow-sm ${
                  ['bg-sky-50 border-2 border-sky-100', 'bg-rose-50 border-2 border-rose-100', 'bg-green-50 border-2 border-green-100'][i]
                }`}>
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white mx-auto text-3xl shadow-sm">
                    {p.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        {/* Space features */}
        <section>
          <FadeUp className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Inside our space
            </h2>
            <p className="mt-2 text-navy/60">Purpose-built areas for every part of your child's day.</p>
          </FadeUp>

          <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spaceFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm border border-navy/5 h-full">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coral/10 text-2xl">
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{f.title}</h3>
                    <p className="mt-1 text-sm text-navy/70 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        {/* Safety */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-bold text-sky-600">Safety First</span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Your peace of mind is our priority
            </h2>
            <p className="mt-3 text-navy/70 leading-relaxed">
              We take safety seriously — from the moment you drop off to the moment you pick up, your child is in good hands.
            </p>
            <ul className="mt-6 space-y-3">
              {safetyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                  <span className="mt-0.5 shrink-0 text-sky-500 font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {spacePhotos.map((photo) => (
                <div key={photo.id} className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, 220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Promise */}
        <FadeUp>
          <div className="rounded-3xl bg-gradient-to-br from-coral to-orange-400 p-10 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Promise to Parents
            </h2>
            <p className="mt-4 text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
              When you leave your child with us, we treat them as our own. We promise a safe, loving, and growth-oriented environment — every single day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-coral shadow">
                  Book a Visit →
                </Link>
              </HoverButton>
              <Link href="/gallery" className="inline-block rounded-full border-2 border-white px-7 py-3 font-bold text-white hover:bg-white/10 transition">
                See the Gallery
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
