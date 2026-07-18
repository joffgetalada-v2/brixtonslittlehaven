import Link from 'next/link';
import { programs, business, packageGroups, flexiblePass, rateNote } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import ProgramCard from '@/components/ProgramCard';
import PackageCard from '@/components/PackageCard';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';

export const metadata = {
  title: "Programs, Packages & Rates | Playgroup, Pre-K, Childcare & Tutorials | Brixton's Little Haven",
  description:
    "Explore 7 programs with transparent monthly rates: Playgroup from ₱2,500, Pre-Kindergarten from ₱5,500, Academic Enrichment & ESL, Integrated Care + Play, and ₱250/hr drop-in care. Lapu-Lapu City.",
  alternates: { canonical: '/programs' },
  openGraph: {
    title: "Programs & Rates | Brixton's Little Haven",
    description: "Playgroup, Pre-K, tutorials, ESL, and full-day care with transparent monthly rates. Ages 1-5, tutorials from age 3 and up.",
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
        intro="From your toddler's first playgroup to school-age tutorials, we have structured, nurturing programs to match every child's needs and your family's schedule."
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

        {/* Packages & monthly rates */}
        <section id="rates" className="scroll-mt-24">
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance]">
              Packages & monthly rates
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-soft [text-wrap:pretty]">
              Transparent pricing, no hidden fees. {rateNote}
            </p>
          </FadeUp>

          <div className="space-y-10">
            {packageGroups.map((group) => (
              <FadeUp key={group.id}>
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-lg font-bold text-navy">{group.title}</h3>
                  <span className="text-xs font-semibold text-navy-soft">{group.ageRange}</span>
                  {group.subtitle && (
                    <span className="text-xs text-navy-soft">{group.subtitle}</span>
                  )}
                  {group.href && (
                    <Link href={group.href} className="text-xs font-bold text-coral-ink underline-offset-2 hover:underline">
                      See the full Pre-K program
                    </Link>
                  )}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} accent={group.accent} />
                  ))}
                </div>
              </FadeUp>
            ))}

            {/* Flexible care pass */}
            <FadeUp>
              <div className="rounded-3xl bg-sun-tint p-6 [box-shadow:var(--shadow-soft)] sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-sun-ink">
                    <Icon name="clock" size={24} />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">{flexiblePass.title}</h3>
                    <p className="text-xs text-navy-soft">{flexiblePass.note}</p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {flexiblePass.options.map((opt) => (
                    <li key={opt.label} className="rounded-2xl bg-white/70 p-4">
                      <p className="text-xs font-semibold text-navy-soft">{opt.label}</p>
                      <p className="mt-1 font-heading text-lg font-bold text-navy">{opt.price}</p>
                      {opt.badge && (
                        <span className="mt-1 inline-block rounded-full bg-navy px-2.5 py-0.5 text-xs font-bold text-warm-white">
                          {opt.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA */}
        <FadeUp>
          <div className="rounded-3xl bg-coral-deep px-8 py-12 text-center text-white">
            <h2 className="font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl">
              Not sure which program fits?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/95 [text-wrap:pretty]">
              Book an assessment and we'll recommend the best match for your child's age and needs. Every assessment includes a free 2-hour trial session.
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
