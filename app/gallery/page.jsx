import Link from 'next/link';
import Image from 'next/image';
import { galleryImages } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Photo Gallery',
  description:
    'Real moments from our indoor center: playgroup sessions, arts and crafts, academic tutorials, sensory play, and community events in Basak, Lapu-Lapu City.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: "Gallery: Brixton's Little Haven",
    description: "Real moments: kids learning, painting, playing, and growing at our indoor center in Lapu-Lapu City.",
  },
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
      <PageHero
        accent="berry"
        icon="heart"
        title="Moments at Brixton's"
        intro="Real kids. Real learning. Real joy, every single day."
      />

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14 sm:space-y-16 sm:px-6 sm:py-16 lg:px-8">

        {sortedCategories.map((category) => (
          <section key={category}>
            <FadeUp>
              <h2 className="mb-6 font-heading text-2xl font-bold text-navy [text-wrap:balance]">
                {category}
              </h2>
            </FadeUp>

            <StaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {grouped[category].map((img, i) => (
                <StaggerItem
                  key={img.id}
                  className={i === 0 && grouped[category].length >= 3 ? 'col-span-2 row-span-2' : ''}
                >
                  <div className={`group relative overflow-hidden rounded-2xl bg-berry-tint [box-shadow:var(--shadow-soft)] ${
                    i === 0 && grouped[category].length >= 3
                      ? 'aspect-square'
                      : 'aspect-[3/4]'
                  }`}>
                    {img.src ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes={
                          i === 0 && grouped[category].length >= 3
                            ? '(max-width: 640px) 100vw, 50vw'
                            : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                        }
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm font-medium text-navy-soft">
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
          <div className="rounded-3xl bg-coral-tint px-8 py-10 text-center [box-shadow:var(--shadow-soft)]">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance]">
              Want to see it in person?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-navy-soft [text-wrap:pretty]">
              Come visit us: book an assessment and your child gets a free 2-hour trial session.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-coral-deep px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98]">
                  Book a Free Trial
                </Link>
              </HoverButton>
              <Link href="/about" className="inline-block rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white">
                About Our Space
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
