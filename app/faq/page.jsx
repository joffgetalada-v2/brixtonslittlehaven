import Link from 'next/link';
import { faqs, business } from '@/content/site';
import { FadeUp, HoverButton } from '@/components/motion';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'FAQ',
  description:
    "Common questions about Brixton's Little Haven — ages, hours, enrollment, flexible care, and more.",
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-navy/90 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold">FAQ</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Questions? We have answers.
            </h1>
            <p className="mt-3 text-base text-white/70">
              Everything parents ask before enrolling their little ones.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </FadeUp>

        {/* Didn't find answer */}
        <FadeUp delay={0.2}>
          <div className="mt-10 rounded-3xl bg-coral/5 border-2 border-coral/20 p-8 text-center">
            <p className="text-2xl">💬</p>
            <h2 className="mt-2 text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
              Still have a question?
            </h2>
            <p className="mt-2 text-sm text-navy/60">
              Send us a message and we'll reply as soon as possible.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-coral px-7 py-3 font-bold text-white shadow">
                  Contact Us →
                </Link>
              </HoverButton>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-navy px-7 py-3 font-bold text-navy hover:bg-navy hover:text-white transition"
              >
                Message on Facebook
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
