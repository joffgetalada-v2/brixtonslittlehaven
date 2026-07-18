import Link from 'next/link';
import Image from 'next/image';
import { business, handbookIntro, handbookSections } from '@/content/site';
import { FadeUp, HoverButton } from '@/components/motion';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';

export const metadata = {
  title: "Parent Handbook | Policies & Guidelines | Brixton's Little Haven",
  description:
    "Everything families need to know: arrival and pick-up, attendance, health and safety, uniforms, communication, privacy, and payment policies at Brixton's Little Haven, Lapu-Lapu City.",
  alternates: { canonical: '/parent-handbook' },
  openGraph: {
    title: "Parent Handbook | Brixton's Little Haven",
    description:
      'Our family guidelines in one place: drop-off, attendance, health, uniforms, communication, privacy, and payments.',
  },
};

const ACCENTS = {
  coral: { tint: 'bg-coral-tint', ink: 'text-coral-ink' },
  sun:   { tint: 'bg-sun-tint',   ink: 'text-sun-ink' },
  sky:   { tint: 'bg-sky-tint',   ink: 'text-sky-ink' },
  leaf:  { tint: 'bg-leaf-tint',  ink: 'text-leaf-ink' },
  berry: { tint: 'bg-berry-tint', ink: 'text-berry-ink' },
};

export default function ParentHandbookPage() {
  return (
    <>
      <PageHero accent="sky" icon="books" title="The parent handbook" intro={handbookIntro}>
        {/* Section shortcuts */}
        <nav aria-label="Handbook sections" className="mt-6 flex max-w-3xl flex-wrap gap-2.5">
          {handbookSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex min-h-10 items-center rounded-full bg-white/70 px-4 text-xs font-semibold text-sky-ink transition hover:bg-white"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Illustration */}
        <FadeUp>
          <div className="mb-12 overflow-hidden rounded-3xl [box-shadow:var(--shadow-lift)]">
            <Image
              src="/images/illustrations/handbook-hero.webp"
              alt="Clay illustration of a warm school entrance at morning drop-off, with cubbies, backpacks, and a teacher greeting a child"
              width={1600}
              height={1067}
              sizes="(max-width: 1024px) 100vw, 896px"
              className="w-full object-cover"
              priority
            />
          </div>
        </FadeUp>

        {/* Policy sections */}
        <div className="space-y-8">
          {handbookSections.map((section, i) => {
            const a = ACCENTS[section.accent] ?? ACCENTS.sky;
            return (
              <FadeUp key={section.id} delay={Math.min(0.05 * i, 0.2)}>
                <section
                  id={section.id}
                  className="scroll-mt-24 rounded-3xl bg-white p-6 [box-shadow:var(--shadow-soft)] sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${a.tint} ${a.ink}`}>
                      <Icon name={section.icon} size={24} />
                    </span>
                    <h2 className="font-heading text-xl font-bold text-navy [text-wrap:balance]">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-soft">
                        <span className={`mt-1 shrink-0 ${a.ink}`}>
                          <Icon name="check" size={15} weight="bold" />
                        </span>
                        <span className="[text-wrap:pretty]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </FadeUp>
            );
          })}
        </div>

        {/* Closing note + CTA */}
        <FadeUp delay={0.1}>
          <div className="mt-12 rounded-3xl bg-sky-tint p-8 text-center [box-shadow:var(--shadow-soft)]">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-sky-ink">
              <Icon name="heart" size={28} />
            </span>
            <h2 className="mt-3 font-heading text-xl font-bold text-navy [text-wrap:balance]">
              Together, we help children learn, play, grow, and shine
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-navy-soft [text-wrap:pretty]">
              Thank you for helping us keep a safe, consistent, and nurturing environment for every
              child. If anything here needs clarifying, we are happy to walk you through it.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-coral-deep px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98]"
                >
                  Contact Us
                </Link>
              </HoverButton>
              <Link
                href="/faq"
                className="inline-block rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                Read the FAQ
              </Link>
            </div>
            <p className="mt-5 text-xs text-navy-soft">
              {business.hours} · {business.phone}
            </p>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
