import Link from 'next/link';
import { programs, business } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import ProgramCard from '@/components/ProgramCard';

export const metadata = {
  title: 'Programs',
  description:
    'Explore all 7 programs at Brixton\'s Little Haven — from playgroup and integrated care to academic tutorials and ESL classes for ages 12 months to adults.',
  alternates: { canonical: '/programs' },
};

const carePrograms = programs.filter((p) => p.category === 'Care');
const learningPrograms = programs.filter((p) => p.category === 'Learning & Enrichment');

export default function ProgramsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-b from-navy to-navy/90 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold">Our Programs</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Programs for every stage
            </h1>
            <p className="mt-3 text-base text-white/70 max-w-xl mx-auto">
              From 12 months to adulthood — we have structured, nurturing programs to match every child's needs and your family's schedule.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-coral px-7 py-3 font-bold text-white shadow">
                  Schedule a FREE Assessment ✨
                </Link>
              </HoverButton>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        {/* Care category */}
        <section>
          <FadeUp>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px flex-1 bg-navy/10" />
              <span className="rounded-full bg-coral/10 px-4 py-1 text-sm font-bold text-coral uppercase tracking-wider">
                Care
              </span>
              <span className="h-px flex-1 bg-navy/10" />
            </div>
            <p className="mt-2 text-center text-sm text-navy/50 mb-8">
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
          <FadeUp>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px flex-1 bg-navy/10" />
              <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-bold text-sky-600 uppercase tracking-wider">
                Learning & Enrichment
              </span>
              <span className="h-px flex-1 bg-navy/10" />
            </div>
            <p className="mt-2 text-center text-sm text-navy/50 mb-8">
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
          <div className="rounded-3xl bg-navy px-8 py-12 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Not sure which program fits?
            </h2>
            <p className="mt-3 text-white/70">
              Book a FREE assessment — we'll recommend the best match for your child's age and needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-coral px-7 py-3 font-bold text-white shadow">
                  Get a Free Assessment →
                </Link>
              </HoverButton>
              <a href={business.phoneTel} className="inline-block rounded-full border-2 border-white/30 px-7 py-3 font-bold text-white hover:border-white transition">
                Call {business.phone}
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
