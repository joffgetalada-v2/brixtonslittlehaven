import Link from 'next/link';
import Image from 'next/image';
import { business, pillars, programs, events, communityImages, heroStrip } from '@/content/site';
import { FadeUp, StaggerGrid, StaggerItem, HoverButton } from '@/components/motion';
import ProgramCard from '@/components/ProgramCard';
import ScrollWorldHero from '@/components/ScrollWorldHero';

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
  return (
    <>
      {/* ── Scroll-world hero: fly through the haven ─────────── */}
      <ScrollWorldHero />

      {/* ── No Yaya intro (the original hero message) ─────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream to-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp delay={0}>
            <h1
              className="text-4xl font-bold leading-tight text-navy sm:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
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
              <span className="flex items-center gap-1"><span aria-hidden="true">📍</span> Beside Gaisano Grand, Basak</span>
              <span className="flex items-center gap-1"><span aria-hidden="true">🕐</span> Mon-Sat, 8 AM-7 PM</span>
              <span className="flex items-center gap-1"><span aria-hidden="true">📞</span> {business.phone}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Kids in Action strip ─────────────────────────────── */}
      <section className="bg-gradient-to-b from-orange-50 to-cream py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-coral/70">Life at Brixton's</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Kids learning, playing, and growing every day
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-3 gap-3 sm:gap-5">
            {heroStrip.map((photo) => (
              <StaggerItem key={photo.id}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-md">
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
            <Link href="/gallery" className="text-sm font-semibold text-coral hover:underline underline-offset-4 transition">
              See more in the Gallery →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Pillars ───────────────────────────────────────────── */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.id}>
                <div className="flex flex-col items-center gap-3 rounded-3xl bg-white/10 p-6 text-center text-white">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-3xl">
                    {p.icon}
                  </span>
                  <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    {p.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Programs highlight ────────────────────────────────── */}
      <section className="py-20" id="programs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-4 text-center">
            <span className="rounded-full bg-coral/10 px-4 py-1 text-sm font-bold text-coral">
              Our Programs
            </span>
          </FadeUp>
          <FadeUp delay={0.1} className="mb-12 text-center">
            <h2
              className="text-3xl font-bold text-navy sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Something for every child
            </h2>
            <p className="mt-3 text-navy/60">
              From playgroup to academic coaching — ages 12 months to 15 years.
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
                className="inline-block rounded-full border-2 border-navy px-8 py-3 font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                View All 7 Programs →
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
              <FadeUp>
                <span className="rounded-full bg-coral/10 px-4 py-1 text-sm font-bold text-coral">
                  Why Brixton's Little Haven?
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2
                  className="mt-4 text-3xl font-bold text-navy sm:text-4xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  More than a daycare.
                  <br />
                  A place where kids{' '}
                  <span className="text-coral">shine</span>.
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="mt-4 text-navy/70 leading-relaxed">
                  We design each day with intention — balancing play, learning, rest, and social development so your child grows in every dimension.
                </p>
              </FadeUp>

              <StaggerGrid className="mt-8 space-y-4">
                {[
                  { icon: '🔒', title: 'Secure & clean space', desc: 'Indoor facility designed for child safety and comfort.' },
                  { icon: '📋', title: 'Purposeful daily schedule', desc: "Every hour is structured to support your child's development." },
                  { icon: '👩‍🏫', title: 'Caring, trained educators', desc: 'Dedicated team focused on nurturing each unique child.' },
                  { icon: '🌿', title: 'Monthly outdoor activities', desc: 'Real-world exploration woven into every program.' },
                  { icon: '💬', title: 'Open communication', desc: "Regular updates so you're always in the loop." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-xl">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="font-bold text-navy text-sm">{item.title}</h3>
                        <p className="text-xs text-navy/60 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>

            {/* Visual side — real flyer */}
            <FadeUp delay={0.2}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src="/images/flyer.png"
                    alt="Brixton's Little Haven programs and services overview"
                    width={1016}
                    height={387}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-navy px-4 py-3 text-white shadow-lg">
                  <p className="text-xs text-white/70">Ages served</p>
                  <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>12 mo – 15 yrs</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Free trial CTA ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-coral py-16 text-center text-white">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />

        <div className="relative mx-auto max-w-2xl px-4">
          <FadeUp>
            <h2
              className="text-3xl font-bold sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Limited slots available!
            </h2>
            <p className="mt-3 text-base text-white/80">
              Schedule an assessment and get a <strong>FREE trial session</strong> — no obligation.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HoverButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-white px-8 py-3.5 font-bold text-coral shadow-md transition hover:shadow-lg"
                >
                  Book a Free Trial →
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
          <FadeUp className="mb-8 text-center">
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Find Us
            </h2>
          </FadeUp>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Info cards */}
            <FadeUp delay={0.1}>
              <div className="space-y-4">
                {[
                  { icon: '📍', title: 'Address', body: business.address },
                  { icon: '🕐', title: 'Hours', body: business.hours },
                  { icon: '📞', title: 'Phone', body: business.phone, href: business.phoneTel },
                  { icon: '✉️', title: 'Email', body: business.email, href: `mailto:${business.email}` },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-xl">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-navy/40">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-navy hover:text-coral transition">
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
                    💬 Message on Facebook Messenger
                  </a>
                </HoverButton>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.2}>
              <div className="overflow-hidden rounded-3xl shadow-md aspect-video lg:aspect-square lg:max-h-80">
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
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-2 text-center">
            <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-bold text-amber-700">
              📣 What's Happening
            </span>
          </FadeUp>
          <FadeUp delay={0.1} className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Events & Announcements
            </h2>
            <p className="mt-2 text-navy/60">Stay up to date with what's on at Brixton's Little Haven.</p>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {events.map((ev) => (
              <StaggerItem key={ev.id}>
                <div className="overflow-hidden rounded-2xl shadow-sm bg-white group">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={ev.src}
                      alt={ev.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="px-3 py-2 text-xs font-semibold text-navy/70 text-center">{ev.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Community Love ───────────────────────────────────── */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-2 text-center">
            <span className="rounded-full bg-rose-100 px-4 py-1 text-sm font-bold text-rose-600">
              💛 Our Community
            </span>
          </FadeUp>
          <FadeUp delay={0.1} className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Families Who Brighten Our Day
            </h2>
            <p className="mt-2 text-navy/60">
              We are so grateful for the kindness and generosity of our Little Haven families. ❤️
            </p>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {communityImages.map((img) => (
              <StaggerItem key={img.id}>
                <div className="group overflow-hidden rounded-2xl shadow-sm bg-white">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeUp delay={0.2} className="mt-8 text-center">
            <p className="text-sm text-navy/50 italic">
              Thank you for trusting us with your little ones. 🙏
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
