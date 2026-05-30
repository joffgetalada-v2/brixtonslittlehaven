import { business } from '@/content/site';
import { FadeUp } from '@/components/motion';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact & Book a Free Trial | Brixton's Little Haven — Basak, Lapu-Lapu City",
  description:
    "Book a free assessment and trial session at Brixton's Little Haven. Call 0999 807 4755, message us on Facebook, or fill out our form. Open Mon–Sat, 8:00 AM–7:00 PM. Beside Gaisano Grand Mall.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact Us — Brixton's Little Haven",
    description: "Call, email, or message us on Facebook to schedule your child's FREE assessment. Basak, Lapu-Lapu City.",
  },
};

const contactInfo = [
  { icon: '📞', label: 'Phone', value: business.phone, href: business.phoneTel },
  { icon: '✉️', label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { icon: '💬', label: 'Facebook / Messenger', value: "Brixton's Little Haven", href: business.facebook, external: true },
  { icon: '📍', label: 'Address', value: business.address },
  { icon: '🕐', label: 'Hours', value: business.hours },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-navy/90 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold">Contact</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Book a FREE trial today
            </h1>
            <p className="mt-3 text-base text-white/70">
              Reach out via form, phone, email, or Messenger — we'll get back to you quickly.
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Contact form */}
          <FadeUp>
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </FadeUp>

          {/* Contact details + map */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-5 text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
                  Other ways to reach us
                </h2>
                <ul className="space-y-4">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-xl">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-navy/40">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="text-sm font-medium text-navy hover:text-coral transition break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-navy">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.2}>
              <div className="overflow-hidden rounded-3xl shadow-sm aspect-video">
                <iframe
                  title="Brixton's Little Haven on Google Maps"
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
      </div>
    </>
  );
}
