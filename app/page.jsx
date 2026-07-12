import Link from 'next/link';
import Image from 'next/image';
import { business, pillars, programs, activeEvents, communityImages, heroStrip } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import ProgramCard from '@/components/ProgramCard';
import ScrollWorldHero from '@/components/ScrollWorldHero';
import Icon from '@/components/Icon';

export const metadata = {
  title: "Brixton's Little Haven | Indoor Playgroup & Childcare in Lapu-Lapu City",
  description:
    "Safe indoor playgroup, flexible childcare, and academic tutorials for kids aged 12 months to 15 years, beside Gaisano Grand Mall, Basak, Lapu-Lapu City. Book a free trial today.",
  alternates: { canonical: '/' },
  openGraph: {
    title: "Brixton's Little Haven | Learn • Play • Grow • Shine",
    description: "Safe indoor playgroup & childcare beside Gaisano Grand Mall, Basak, Lapu-Lapu City. Free trial available!",
  },
};

const featured = programs.filter((p) => p.featured).slice(0, 4);

export default function HomePage() {
  const upcoming = activeEvents();
  return (
    <>
      {/* ── Scroll-world hero: fly through the haven ─────────── */}
      <ScrollWorldHero />

      {/* ── No Yaya intro (the original hero message) ─────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream to-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp delay={0}>
            <h1 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
              No Yaya?{' '}
              <span className="relative">
                <span className="relative z-10 text-coral-ink">We've got you.</span>
                <span className="absolute -bottom-1 left-0 z-0 h-3 w-full rounded-full bg-amber-200/60" aria-hidden="true" />
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-navy-soft">
              Give your child a <strong>safe, structured indoor space</strong> to learn and grow, right beside Gaisano Grand Mall, Basak.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-2 text-base font-semibold tracking-wide text-coral-ink">
              {business.tagline}
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-coral-deep px-7 py-3.5 text-base font-bold text-white shadow-md transition"
                >
                  Book a Free Trial
                </Link>
              </HoverButton>
              <HoverButton>
                <Link
                  href="/programs"
                  className="inline-block rounded-full border-2 border-navy px-7 py-3.5 text-base font-bold text-navy transition hover:bg-navy hover:text-white"
                >
                  See All Programs
                </Link>
              </HoverButton>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-navy-soft">
              <span className="flex items-center gap-1.5"><Icon name="pin" size={16} /> Beside Gaisano Grand, Basak</span>
              <span className="flex items-center gap-1.5"><Icon name="clock" size={16} /> Mon-Sat, 8 AM-7 PM</span>
              <span className="flex items-center gap-1.5"><Icon name="phone" size={16} /> {business.phone}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Kids in Action strip ─────────────────────────────── */}
      <section className="bg-gradient-to-b from-orange-50 to-cream py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-coral-ink">Life at Brixton's</p>
            <h2 className="font-heading text-2xl font-bold text-navy [text-wrap:balance] sm:text-3xl">
              Kids learning, playing, and growing every day
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-3 gap-3 sm:gap-5">
            {heroStrip.map((photo) => (
              <StaggerItem key={photo.id}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl [box-shadow:var(--shadow-soft)]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <FadeUp delay={0.2} className="mt-6 text-center">
            <Link href="/gallery" className="text-sm font-semibold text-coral-ink transition hover:underline underline-offset-4">
              See more in the Gallery
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Pillars ───────────────────────────────────────────── */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Why families choose us</h2>
          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.id}>
                <div className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white/10 p-6 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-sun">
                    <Icon name={p.icon} size={30} />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-warm-white">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-muted">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Programs highlight ────────────────────────────────── */}
      <section className="py-20" id="programs">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp delay={0.1} className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
              Something for every child
            </h2>
            <p className="mt-3 max-w-2xl text-navy-soft">
              From playgroup to academic coaching, for ages 12 months to 15 years.
            </p>
          </FadeUp>

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((program) => (
              <StaggerItem key={program.id} className="flex">
                <ProgramCard program={program} compact />
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp delay={0.2} className="mt-10 text-center">
            <HoverButton>
              <Link
                href="/programs"
                className="inline-block rounded-full border-2 border-navy px-8 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                See All Programs
              </Link>
            </HoverButton>
          </FadeUp>
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────── */}
      <section className="overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text side */}
            <div>
              <FadeUp delay={0.1}>
                <h2 className="font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
                  More than a daycare.
                  <br />
                  A place where kids{' '}
                  <span className="text-coral-ink">shine</span>.
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-4 max-w-2xl leading-relaxed text-navy-soft [text-wrap:pretty]">
                  We design each day with intention, balancing play, learning, rest, and social development so your child grows in every dimension.
                </p>
              </FadeUp>

              <StaggerGrid className="mt-8 space-y-4">
                {[
                  { icon: 'shield', title: 'Secure & clean space', desc: 'Indoor facility designed for child safety and comfort.' },
                  { icon: 'calendar', title: 'Purposeful daily schedule', desc: "Every hour is structured to support your child's development." },
                  { icon: 'graduation', title: 'Caring, trained educators', desc: 'Dedicated team focused on nurturing each unique child.' },
                  { icon: 'sprout', title: 'Monthly outdoor activities', desc: 'Real-world exploration woven into every program.' },
                  { icon: 'chat', title: 'Open communication', desc: "Regular updates so you're always in the loop." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4 rounded-2xl bg-white p-4 [box-shadow:var(--shadow-soft)]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-tint text-coral-ink">
                        <Icon name={item.icon} size={20} />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                        <p className="mt-0.5 text-xs text-navy-soft">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>

            {/* Visual side — real flyer */}
            <FadeUp delay={0.2}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="overflow-hidden rounded-3xl [box-shadow:var(--shadow-lift)]">
                  <Image
                    src="/images/flyer.png"
                    alt="Brixton's Little Haven programs and services overview"
                    width={1016}
                    height={387}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 rounded-2xl bg-navy px-4 py-3 shadow-lg">
                  <p className="text-xs text-navy-muted">Ages served</p>
                  <p className="font-heading text-2xl font-bold text-warm-white">12 mo - 15 yrs</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Free trial CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-coral-deep py-16 text-center text-white">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />

        <div className="relative mx-auto max-w-2xl px-4">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold [text-wrap:balance] sm:text-4xl">
              Slots fill up quickly.
            </h2>
            <p className="mt-3 text-base text-white/95">
              Schedule an assessment and get a <strong>free trial session</strong>, no obligation.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HoverButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-white px-8 py-3.5 font-bold text-coral-ink shadow-md transition hover:bg-cream"
                >
                  Book a Free Trial
                </Link>
              </HoverButton>
              <a
                href={business.phoneTel}
                className="inline-block rounded-full border-2 border-white px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Call {business.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Location strip ────────────────────────────────────── */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-8">
            <h2 className="font-heading text-3xl font-bold text-navy">
              Find us
            </h2>
          </FadeUp>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Info cards */}
            <FadeUp delay={0.1}>
              <div className="space-y-4">
                {[
                  { icon: 'pin', title: 'Address', body: business.address },
                  { icon: 'clock', title: 'Hours', body: business.hours },
                  { icon: 'phone', title: 'Phone', body: business.phone, href: business.phoneTel },
                  { icon: 'mail', title: 'Email', body: business.email, href: `mailto:${business.email}` },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-4 [box-shadow:var(--shadow-soft)]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-tint text-coral-ink">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-soft">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-navy transition hover:text-coral-ink">
                          {item.body}
                        </a>
                      ) : (
                        <p className="text-sm text-navy">{item.body}</p>
                      )}
                    </div>
                  </div>
                ))}

                <HoverButton>
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0866FF] px-6 py-3 font-bold text-white shadow-sm transition"
                  >
                    <Icon name="messenger" size={20} />
                    Message us on Messenger
                  </a>
                </HoverButton>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.2}>
              <div className="aspect-video overflow-hidden rounded-3xl [box-shadow:var(--shadow-soft)] lg:aspect-square lg:max-h-80">
                <iframe
                  title="Brixton's Little Haven location map"
                  src={business.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What's Happening ─────────────────────────────────── */}
      <section className="bg-sun-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp delay={0.1} className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
              Events & announcements
            </h2>
            <p className="mt-2 max-w-2xl text-navy-soft">Stay up to date with what's on at Brixton's Little Haven.</p>
          </FadeUp>

          {upcoming.length === 0 ? (
            <FadeUp>
              <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center [box-shadow:var(--shadow-soft)] sm:flex-row sm:text-left">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sun-tint text-sun-ink">
                  <Icon name="facebook" size={30} />
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-navy">Nothing scheduled right now</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-soft">
                    New events are announced on our Facebook page first. Follow along so you never miss a festival, workshop, or holiday notice.
                  </p>
                </div>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coral-deep px-6 py-3 font-bold text-white transition hover:bg-coral-ink active:scale-[0.98]"
                >
                  Follow us on Facebook
                </a>
              </div>
            </FadeUp>
          ) : (
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4">
              {upcoming.map((ev) => (
                <div key={ev.id} className="group w-64 shrink-0 snap-start overflow-hidden rounded-2xl bg-white [box-shadow:var(--shadow-soft)]">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={ev.src}
                      alt={ev.alt}
                      fill
                      sizes="256px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="px-3 py-2 text-center text-xs font-semibold text-navy-soft">{ev.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Community Love ───────────────────────────────────── */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp delay={0.1} className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-navy [text-wrap:balance] sm:text-4xl">
              Families who brighten our day
            </h2>
            <p className="mt-2 max-w-2xl text-navy-soft">
              We are so grateful for the kindness and generosity of our Little Haven families.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="columns-2 gap-3 sm:columns-3 lg:columns-3">
              {communityImages.map((img, i) => (
                <div key={img.id} className="group mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-white [box-shadow:var(--shadow-soft)]">
                  <div className={`relative w-full overflow-hidden ${i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[5/4]'}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-8 text-center">
            <p className="text-sm italic text-navy-soft">
              Thank you for trusting us with your little ones.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
