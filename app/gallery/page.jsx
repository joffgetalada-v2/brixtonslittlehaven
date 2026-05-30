import Link from 'next/link';
import { galleryImages } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata = {
  title: 'Gallery',
  description:
    "See inside Brixton's Little Haven — photos of our indoor play space, learning areas, arts and crafts sessions, and happy children.",
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-navy/90 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold">Gallery</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              A peek inside our haven
            </h1>
            <p className="mt-3 text-base text-white/70">
              Events, celebrations, and moments from our community — with more photos coming soon!
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <StaggerItem
              key={img.id}
              className={i === 0 || i === 4 ? 'col-span-2 row-span-2' : ''}
            >
              <PlaceholderImage
                src={img.src}
                alt={img.alt}
                label={img.label}
                index={i}
                className="h-full w-full"
              />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Owner note */}
        <FadeUp delay={0.2}>
          <div className="mt-12 rounded-3xl border-2 border-dashed border-navy/20 bg-white px-8 py-8 text-center">
            <p className="text-2xl">📸</p>
            <h2 className="mt-2 text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
              Photos Coming Soon
            </h2>
            <p className="mt-2 text-sm text-navy/60 max-w-md mx-auto">
              Real photos of our space and children will be added here. To add photos, place image files in{' '}
              <code className="rounded bg-navy/5 px-1.5 py-0.5 text-xs font-mono">public/gallery/</code> and update the{' '}
              <code className="rounded bg-navy/5 px-1.5 py-0.5 text-xs font-mono">content/site.js</code> gallery list.
            </p>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-navy/70">Want to see the space in person?</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-coral px-7 py-3 font-bold text-white shadow">
                  Schedule a Free Visit →
                </Link>
              </HoverButton>
              <Link href="/about" className="inline-block rounded-full border-2 border-navy px-7 py-3 font-bold text-navy hover:bg-navy hover:text-white transition">
                About Our Space
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
