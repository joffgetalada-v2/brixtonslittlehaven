import Link from 'next/link';
import Image from 'next/image';
import { business, pillars, spacePhotos } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';

export const metadata = {
  title: "Our Space & Story | Safe Indoor Learning Center | Brixton's Little Haven",
  description:
    "Step inside Brixton's Little Haven in Basak, Lapu-Lapu City: a clean, secure indoor space with a dedicated play area, arts corner, learning room, and rest area. Built on Safety, Structure, and Growth.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "Our Space | Brixton's Little Haven",
    description: "A safe, structured indoor environment for children in Lapu-Lapu City, Philippines.",
  },
};

const spaceFeatures = [
  { icon: 'house',  title: 'Indoor Play Area', desc: 'A clean, safe indoor environment. Cool, comfortable, and designed for kids to move freely.' },
  { icon: 'paint',  title: 'Creative Corner', desc: 'Dedicated art and craft space stocked with child-safe materials for open-ended exploration.' },
  { icon: 'books',  title: 'Learning Area', desc: 'Quiet, structured zone for tutorials, reading, and guided academic activities.' },
  { icon: 'music',  title: 'Music & Movement Space', desc: 'Open floor area for music, dance, gross motor activities, and energetic play.' },
  { icon: 'moon',   title: 'Rest Corner', desc: 'A calm, cozy space for younger children to nap and recharge during full-day care.' },
  { icon: 'sprout', title: 'Monthly Outdoor Trips', desc: 'Beyond the walls, every program includes monthly outdoor exploration adventures.' },
];

const safetyFeatures = [
  'Secured entry and exit, with only authorized pickups allowed',
  'Sanitized play equipment and surfaces daily',
  'Child-proofed space with no sharp edges or hazards',
  'Supervised at all times by trained caregivers',
  'Emergency protocols and first-aid ready',
  'Regular health and cleanliness checks',
];

const pillarAccents = {
  sky:   { card: 'bg-sky-tint',   ink: 'text-sky-ink' },
  coral: { card: 'bg-coral-tint', ink: 'text-coral-ink' },
  green: { card: 'bg-leaf-tint',  ink: 'text-leaf-ink' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        accent="sky"
        icon="house"
        title="A place built for little ones"
        intro="Every corner of Brixton's Little Haven is designed with your child's safety, comfort, and growth in mind."
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:space-y-20">

        {/* Three Pillars */}
        <section>
          <FadeUp className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
              Built on three pillars
            </h2>
            <p className="mt-2 text-navy-soft">The foundation of everything we do.</p>
          </FadeUp>

          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => {
              const a = pillarAccents[p.color] ?? pillarAccents.coral;
              return (
                <StaggerItem key={p.id}>
                  <div className={`h-full rounded-3xl p-8 text-center ${a.card} [box-shadow:var(--shadow-soft)]`}>
                    <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/80 ${a.ink}`}>
                      <Icon name={p.icon} size={32} />
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-soft">{p.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </section>

        {/* Space features */}
        <section>
          <FadeUp className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
              Inside our space
            </h2>
            <p className="mt-2 text-navy-soft">Purpose-built areas for every part of your child's day.</p>
          </FadeUp>

          <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spaceFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="flex h-full gap-4 rounded-2xl bg-white p-5 [box-shadow:var(--shadow-soft)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-tint text-sky-ink">
                    <Icon name={f.icon} size={24} />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-soft">{f.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        {/* Safety */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-wide text-sky-ink">Safety first</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
              Your peace of mind is our priority
            </h2>
            <p className="mt-3 leading-relaxed text-navy-soft [text-wrap:pretty]">
              We take safety seriously. From the moment you drop off to the moment you pick up, your child is in good hands.
            </p>
            <ul className="mt-6 space-y-3">
              {safetyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                  <span className="mt-0.5 shrink-0 text-sky-ink">
                    <Icon name="check" size={16} weight="bold" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {spacePhotos.map((photo) => (
                <div key={photo.id} className="group relative aspect-square overflow-hidden rounded-2xl [box-shadow:var(--shadow-soft)]">
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
          <div className="rounded-3xl bg-coral-deep p-10 text-center text-white [box-shadow:var(--shadow-lift)]">
            <h2 className="font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl">
              Our promise to parents
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 [text-wrap:pretty]">
              When you leave your child with us, we treat them as our own. We promise a safe, loving, and growth-oriented environment, every single day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-white px-7 py-3.5 font-bold text-coral-ink shadow-md transition hover:bg-cream active:scale-[0.98]">
                  Book a Free Trial
                </Link>
              </HoverButton>
              <Link href="/gallery" className="inline-block rounded-full border-2 border-white px-7 py-3.5 font-bold text-white transition hover:bg-white/10">
                See the Gallery
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
