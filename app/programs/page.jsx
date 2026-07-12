import Link from 'next/link';
import { programs, business } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import ProgramCard from '@/components/ProgramCard';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: "Programs & Services | Playgroup, Childcare & Tutorials | Brixton's Little Haven",
  description:
    "Explore 7 programs: Playgroup (12 mo-6 yrs), Integrated Care (up to 12 hrs/day), Drop-In Care, Academic Tutorials, Play+Learn School Readiness, Combo Package, and ESL Classes. Lapu-Lapu City.",
  alternates: { canonical: '/programs' },
  openGraph: {
    title: "Programs | Brixton's Little Haven",
    description: "7 programs for every child: playgroup, full-day care, academic tutorials, and ESL classes. Ages 12 months to adults.",
  },
};

const carePrograms     = programs.filter((p) => p.category === 'Care');
const learningPrograms = programs.filter((p) => p.category === 'Learning & Enrichment');

// Schema: ItemList of services
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Programs at Brixton's Little Haven",
  description: 'Childcare, playgroup, and learning programs in Lapu-Lapu City, Philippines.',
  numberOfItems: programs.length,
  itemListElement: programs.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: p.title,
      description: p.summary,
      provider: { '@type': 'LocalBusiness', name: business.name },
    },
  })),
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* Page hero */}
      <PageHero
        accent="sun"
        icon="star"
        title="Programs for every stage"
        intro="From 12 months to adulthood, we have structured, nurturing programs to match every child's needs and your family's schedule."
      >
        <div className="mt-8">
          <HoverButton>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-coral-deep px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98]"
            >
              Book a Free Trial
            </Link>
          </HoverButton>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14 sm:space-y-16 sm:px-6 sm:py-16 lg:px-8">
        {/* Care category */}
        <section>
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance]">Care</h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-soft [text-wrap:pretty]">
              Flexible, supervised care options for all ages and schedules.
            </p>
          </FadeUp>

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {carePrograms.map((program) => (
              <StaggerItem key={program.id} className="flex">
                <ProgramCard program={program} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        {/* Learning & Enrichment category */}
        <section>
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance]">
              Learning &amp; enrichment
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-soft [text-wrap:pretty]">
              Guided academic support and enrichment programs for school readiness and beyond.
            </p>
          </FadeUp>

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {learningPrograms.map((program) => (
              <StaggerItem key={program.id} className="flex">
                <ProgramCard program={program} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        {/* CTA */}
        <FadeUp>
          <div className="rounded-3xl bg-coral-deep px-8 py-12 text-center text-white">
            <h2 className="font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl">
              Not sure which program fits?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/95 [text-wrap:pretty]">
              Book a free assessment and we'll recommend the best match for your child's age and needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HoverButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-white px-7 py-3.5 font-bold text-coral-ink shadow-md transition hover:bg-cream active:scale-[0.98]"
                >
                  Book a Free Trial
                </Link>
              </HoverButton>
              <a
                href={business.phoneTel}
                className="inline-block rounded-full border-2 border-white px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
