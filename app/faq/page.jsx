import Link from 'next/link';
import { publishedFaqs, business } from '@/content/site';
import { FadeUp, HoverButton } from '@/components/motion';
import FaqAccordion from '@/components/FaqAccordion';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'FAQ | Childcare & Enrollment',
  description:
    'What ages we accept, our hours, where to find us, how to enroll, drop-in care, and more. Answers for parents in Basak, Lapu-Lapu City.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: "FAQ | Brixton's Little Haven",
    description: "Everything parents ask before enrolling: ages, hours, location, enrollment, drop-in care, and more.",
  },
};

// FAQPage schema enables Google rich results (expandable Q&A in search)
function buildFaqSchema(faqList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export default function FaqPage() {
  const jsonLd = buildFaqSchema(publishedFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <PageHero
        accent="coral"
        icon="chat"
        title="Questions? We have answers."
        intro="Everything parents ask before enrolling their little ones."
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <FadeUp>
          <div className="rounded-3xl bg-white p-6 [box-shadow:var(--shadow-soft)] sm:p-8">
            <FaqAccordion faqs={publishedFaqs} />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 rounded-3xl bg-coral-tint p-8 text-center [box-shadow:var(--shadow-soft)]">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-coral-ink">
              <Icon name="chat" size={28} />
            </span>
            <h2 className="mt-3 font-heading text-xl font-bold text-navy [text-wrap:balance]">
              Still have a question?
            </h2>
            <p className="mt-2 text-sm text-navy-soft">
              Our{' '}
              <Link href="/parent-handbook" className="font-bold text-coral-ink underline-offset-2 hover:underline">
                Parent Handbook
              </Link>{' '}
              covers policies in detail, or send us a message and we&apos;ll reply as soon as possible.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <HoverButton>
                <Link href="/contact" className="inline-block rounded-full bg-coral-deep px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-coral-ink active:scale-[0.98]">
                  Contact Us
                </Link>
              </HoverButton>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                <Icon name="messenger" size={18} />
                Message on Facebook
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
