import Link from 'next/link';
import { faqs, business } from '@/content/site';
import { FadeUp, HoverButton } from '@/components/motion';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: "FAQ | Childcare & Enrollment Questions — Brixton's Little Haven Lapu-Lapu City",
  description:
    "Answers to common parent questions about Brixton's Little Haven: what ages we accept, our hours, where we're located, how to enrol, drop-in care, and more. Basak, Lapu-Lapu City.",
  alternates: { canonical: '/faq' },
  openGraph: {
    title: "FAQ — Brixton's Little Haven",
    description: "Everything parents ask before enrolling: ages, hours, location, enrollment, drop-in care, and more.",
  },
};

// FAQPage schema — enables Google rich results (expandable Q&A in search)
function buildFaqSchema(faqList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList
      .filter((f) => !f.answer.startsWith('[PLACEHOLDER'))
      .map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
  };
}

export default function FaqPage() {
  const jsonLd = buildFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

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
