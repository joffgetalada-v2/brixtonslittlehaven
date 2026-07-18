import Link from 'next/link';
import Image from 'next/image';
import { business, prek, packageGroups, enrollmentSteps, enrollmentRequirements } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import PageHero from '@/components/PageHero';
import PackageCard from '@/components/PackageCard';
import Icon from '@/components/Icon';

export const metadata = {
  title: "Pre-Kindergarten School Readiness Program | Ages 3-5 | Brixton's Little Haven",
  description:
    'A balanced Pre-K curriculum in Lapu-Lapu City: reading, writing, math, science, and life skills for ages 3-5. Founding batch promo with free school bag, uniform, and learning materials. From ₱5,500 per month.',
  alternates: { canonical: '/pre-kindergarten' },
  openGraph: {
    title: "Pre-Kindergarten | Brixton's Little Haven",
    description:
      'School readiness for ages 3-5: balanced curriculum, 4-hour sessions, founding batch freebies, and savings up to 15%. Basak, Lapu-Lapu City.',
  },
};

const ACCENTS = {
  coral: { tint: 'bg-coral-tint', ink: 'text-coral-ink' },
  sun:   { tint: 'bg-sun-tint',   ink: 'text-sun-ink' },
  sky:   { tint: 'bg-sky-tint',   ink: 'text-sky-ink' },
  leaf:  { tint: 'bg-leaf-tint',  ink: 'text-leaf-ink' },
  berry: { tint: 'bg-berry-tint', ink: 'text-berry-ink' },
};

const prekRates = packageGroups.find((g) => g.id === 'prek-rates')?.packages ?? [];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pre-Kindergarten School Readiness Program',
  description:
    'A balanced pre-kindergarten curriculum for ages 3-5 covering language and literacy, mathematics and logic, science and discovery, and writing and fine motor development.',
  provider: { '@type': 'LocalBusiness', name: business.name, address: business.address },
  areaServed: 'Lapu-Lapu City, Philippines',
};

export default function PreKindergartenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <PageHero
        accent="leaf"
        icon="graduation"
        title="Pre-K that gets little learners school-ready"
        intro={prek.mission}
      >
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {[prek.ages, '4 hrs per session', 'Morning & afternoon slots'].map((chip) => (
            <span key={chip} className="rounded-full bg-white/70 px-3 py-1 font-semibold text-leaf-ink">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <HoverButton>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-coral-deep px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98]"
            >
              Book a Free Trial
            </Link>
          </HoverButton>
          <a
            href="#tuition"
            className="inline-block rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
          >
            See Tuition & Promo
          </a>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Intro split: founding batch note + illustration */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <FadeUp>
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance] sm:text-3xl">
              The founding batch is here
            </h2>
            <p className="mt-4 leading-relaxed text-navy-soft [text-wrap:pretty]">{prek.startNote}</p>
            <p className="mt-3 leading-relaxed text-navy-soft [text-wrap:pretty]">
              Every session runs 4 focused hours, in small groups, guided by teachers who know that
              confidence is the first school skill. Choose a morning (8:00 AM to 12:00 NN) or afternoon
              (1:00 to 5:00 PM) slot, up to 6 days a week.
            </p>
            <ul className="mt-6 space-y-2.5">
              {prek.noFees.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <span className="text-leaf-ink">
                    <Icon name="check" size={18} weight="bold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="overflow-hidden rounded-3xl [box-shadow:var(--shadow-lift)]">
              <Image
                src="/images/illustrations/prek-hero.webp"
                alt="Clay illustration of a miniature pre-kindergarten classroom with children learning at tiny desks"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="w-full object-cover"
              />
            </div>
          </FadeUp>
        </section>

        {/* Pillars */}
        <section>
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance] sm:text-3xl">
              What makes our program special
            </h2>
          </FadeUp>
          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {prek.pillars.map((p) => (
              <StaggerItem key={p.title} className="flex">
                <div className="flex h-full flex-col rounded-3xl bg-white p-5 [box-shadow:var(--shadow-soft)]">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-leaf-tint text-leaf-ink">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="font-heading text-sm font-bold leading-snug text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-soft">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        {/* Curriculum */}
        <section>
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance] sm:text-3xl">
              The curriculum, domain by domain
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-soft [text-wrap:pretty]">
              Four learning domains, taught through play, practice, and hands-on discovery across School
              Year 2026 - 2027.
            </p>
          </FadeUp>
          <div className="grid gap-6 lg:grid-cols-2">
            {prek.curriculum.map((domain, i) => {
              const a = ACCENTS[domain.accent] ?? ACCENTS.leaf;
              return (
                <FadeUp key={domain.id} delay={0.05 * i}>
                  <div className={`h-full rounded-3xl ${a.tint} p-6 [box-shadow:var(--shadow-soft)] sm:p-7`}>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 ${a.ink}`}>
                        <Icon name={domain.icon} size={24} />
                      </span>
                      <h3 className="font-heading text-lg font-bold text-navy">{domain.title}</h3>
                    </div>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      {domain.areas.map((area) => (
                        <div key={area.title}>
                          <h4 className={`text-xs font-bold uppercase tracking-wide ${a.ink}`}>{area.title}</h4>
                          <ul className="mt-2 space-y-1.5">
                            {area.items.map((item) => (
                              <li key={item} className="flex items-start gap-1.5 text-xs leading-relaxed text-navy-soft">
                                <span className={`mt-px shrink-0 ${a.ink}`}>
                                  <Icon name="check" size={13} weight="bold" />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </section>

        {/* Daily routine */}
        <section>
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance] sm:text-3xl">
              {prek.routine.title}
            </h2>
            <p className="mt-2 text-sm text-navy-soft">{prek.routine.note}</p>
          </FadeUp>
          <FadeUp>
            <ol className="space-y-3">
              {prek.routine.blocks.map((block, i) => (
                <li key={block.title} className="flex gap-4 rounded-2xl bg-white p-4 [box-shadow:var(--shadow-soft)] sm:p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-tint font-heading text-sm font-bold text-sky-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-navy">{block.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-navy-soft">{block.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeUp>
        </section>

        {/* Tuition & founding batch promo */}
        <section id="tuition" className="scroll-mt-24">
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance] sm:text-3xl">
              Tuition & the founding batch promo
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-soft [text-wrap:pretty]">
              Everything your child needs is included: no hidden fees, no surprise charges.
            </p>
          </FadeUp>

          <div className="grid gap-6 lg:grid-cols-2">
            <FadeUp>
              {prekRates.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} accent="leaf" />
              ))}
              <p className="mt-3 text-xs text-navy-soft">
                Rates are per month. Other schedules may be available upon request.
              </p>
            </FadeUp>

            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <div className="rounded-3xl bg-white p-6 [box-shadow:var(--shadow-soft)]">
                  <h3 className="font-heading text-lg font-bold text-navy">Enrollment savings</h3>
                  <div className="mt-4 space-y-4">
                    {prek.savings.map((s) => (
                      <div key={s.title} className="rounded-2xl bg-leaf-tint p-4">
                        <p className="text-sm font-bold text-navy">{s.title}</p>
                        <p className="mt-0.5 font-heading text-base font-bold text-leaf-ink">{s.save}</p>
                        {s.perks.length > 0 && (
                          <ul className="mt-2 space-y-1">
                            {s.perks.map((perk) => (
                              <li key={perk} className="flex items-start gap-1.5 text-xs text-navy-soft">
                                <span className="mt-px shrink-0 text-leaf-ink">
                                  <Icon name="check" size={13} weight="bold" />
                                </span>
                                {perk}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="rounded-3xl bg-white p-6 [box-shadow:var(--shadow-soft)]">
                  <h3 className="font-heading text-lg font-bold text-navy">Free with enrollment</h3>
                  <ul className="mt-4 space-y-2.5">
                    {prek.freebies.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-navy-soft">
                        <span className="mt-0.5 shrink-0 text-coral-ink">
                          <Icon name="sparkle" size={16} weight="fill" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* How to enroll */}
        <section>
          <FadeUp className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance] sm:text-3xl">
              How to enroll
            </h2>
          </FadeUp>
          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {enrollmentSteps.map((step, i) => (
              <StaggerItem key={step.title} className="flex">
                <div className="flex h-full flex-col rounded-3xl bg-white p-5 [box-shadow:var(--shadow-soft)]">
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-coral-tint font-heading text-sm font-bold text-coral-ink">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-soft">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp delay={0.1}>
            <div className="mt-6 rounded-3xl bg-sky-tint p-6 [box-shadow:var(--shadow-soft)] sm:p-7">
              <h3 className="font-heading text-base font-bold text-navy">What to prepare</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {enrollmentRequirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-navy-soft">
                    <span className="mt-0.5 shrink-0 text-sky-ink">
                      <Icon name="check" size={16} weight="bold" />
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-navy-soft">
                Digital and physical copies both help make processing smooth. Some documents can be
                submitted after enrollment, and the full learning materials checklist is shared when you
                enroll.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* CTA */}
        <FadeUp>
          <div className="rounded-3xl bg-coral-deep px-8 py-12 text-center text-white">
            <h2 className="font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl">
              Founding batch slots are limited
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/95 [text-wrap:pretty]">
              Book an assessment today and your child gets a free 2-hour trial session. First come,
              first served.
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
