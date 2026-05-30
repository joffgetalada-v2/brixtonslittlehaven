import Link from 'next/link';
import Image from 'next/image';
import { galleryImages } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';

export const metadata = {
  title: 'Gallery',
  description:
    "See real moments from Brixton's Little Haven — kids learning, playing, painting, and growing together in Lapu-Lapu City.",
  alternates: { canonical: '/gallery' },
};

// Group images by label for the categorised display
function groupByLabel(images) {
  const groups = {};
  for (const img of images) {
    const key = img.label ?? 'Other';
    if (!groups[key]) groups[key] = [];
    groups[key].push(img);
  }
  return groups;
}

const categoryOrder = ['Playgroup', 'Sensory Play', 'Gross Motor', 'Arts & Crafts', 'Learning', 'Tutorials', 'Role Play', 'Events'];

export default function GalleryPage() {
  const grouped = groupByLabel(galleryImages);

  // Sorted categories: known ones first, then any extras
  const sortedCategories = [
    ...categoryOrder.filter((c) => grouped[c]),
    ...Object.keys(grouped).filter((c) => !categoryOrder.includes(c)),
  ];

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
              Moments at Brixton's
            </h1>
            <p className="mt-3 text-base text-white/70">
              Real kids. Real learning. Real joy — every single day.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">

        {sortedCategories.map((category) => (
          <section key={category}>
            <FadeUp>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-navy/10" />
                <span className="rounded-full bg-coral/10 px-4 py-1 text-sm font-bold text-coral">
                  {category}
                </span>
                <span className="h-px flex-1 bg-navy/10" />
              </div>
            </FadeUp>

            <StaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {grouped[category].map((img, i) => (
                <StaggerItem
                  key={img.id}
                  className={i === 0 && grouped[category].length >= 3 ? 'col-span-2 row-span-2' : ''}
                >
                  <div className={`group relative overflow-hidden rounded-2xl shadow-sm bg-navy/5 ${
                    i === 0 && grouped[category].length >= 3
                      ? 'aspect-square'
                      : 'aspect-[3/4]'
                  }`}>
                    {img.src ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-navy/30 text-sm font-medium">
                        Photo coming soon
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </section>
        ))}

        {/* CTA */}
        <FadeUp>
          <div className="rounded-3xl bg-navy px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Want to see it in person?
            </h2>
            <p className="mt-2 text-white/70 text-sm">Come visit us — we offer a FREE assessment and trial session.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-coral px-7 py-3 font-bold text-white shadow">
                  Book a Free Visit →
                </Link>
              </HoverButton>
              <Link href="/about" className="inline-block rounded-full border-2 border-white/30 px-7 py-3 font-bold text-white hover:border-white transition">
                About Our Space
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
