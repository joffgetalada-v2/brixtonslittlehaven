import { business } from '@/content/site';
import { FadeUp } from '@/components/motion';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'Contact & Book a Free Trial',
  description:
    "Book your child's assessment and free trial session. Call 0999 807 4755 or message us on Facebook. Open Mon to Sat, 7:00 AM to 7:00 PM, in Basak.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact Us | Brixton's Little Haven",
    description: "Call, email, or message us on Facebook to schedule your child's assessment and free trial session. Basak, Lapu-Lapu City.",
  },
};

const contactInfo = [
  { icon: 'phone', label: 'Phone', value: business.phone, href: business.phoneTel },
  { icon: 'device', label: 'Viber / WhatsApp', value: business.phone },
  { icon: 'mail', label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { icon: 'messenger', label: 'Facebook / Messenger', value: "Brixton's Little Haven", href: business.facebook, external: true },
  { icon: 'instagram', label: 'Instagram', value: '@brixtons_little_haven', href: business.instagram, external: true },
  ...(business.tiktok
    ? [{ icon: 'tiktok', label: 'TikTok', value: "Brixton's Little Haven", href: business.tiktok, external: true }]
    : []),
  { icon: 'pin', label: 'Address', value: business.address },
  { icon: 'clock', label: 'Hours', value: business.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        accent="coral"
        icon="phone"
        title="Book a free trial today"
        intro="Reach out via form, phone, email, or Messenger, and we'll get back to you quickly."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Contact form */}
          <FadeUp>
            <div className="rounded-3xl bg-white p-6 [box-shadow:var(--shadow-soft)] sm:p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-navy">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </FadeUp>

          {/* Contact details + map */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <div className="rounded-3xl bg-white p-6 [box-shadow:var(--shadow-soft)] sm:p-8">
                <h2 className="mb-5 font-heading text-xl font-bold text-navy">
                  Other ways to reach us
                </h2>
                <ul className="space-y-4">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-tint text-coral-ink">
                        <Icon name={item.icon} size={20} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-navy-soft">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="break-all text-sm font-medium text-navy transition hover:text-coral-ink"
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
              <div className="aspect-video overflow-hidden rounded-3xl [box-shadow:var(--shadow-soft)]">
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
