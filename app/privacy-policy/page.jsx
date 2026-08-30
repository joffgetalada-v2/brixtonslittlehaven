import { business } from '@/content/site';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'Privacy Policy',
  description:
    "Privacy Policy for the Brixton's Little Haven website: how we collect, use, and protect your information.",
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-2 font-heading text-3xl font-bold text-navy">
        Privacy Policy
      </h1>
      <p className="mb-10 text-sm text-navy-soft">Last updated: July 2026</p>

      <div className="space-y-8 text-base leading-relaxed text-navy-soft">

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">1. Who We Are</h2>
          <p>
            This website is operated by <strong>Brixton&apos;s Little Haven</strong>, an indoor childcare, playgroup,
            and tutorial center located beside Gaisano Grand Mall, Basak, Lapu-Lapu City, Philippines 6015.
            We can be reached at <a href={`mailto:${business.email}`} className="text-coral-ink hover:underline">{business.email}</a> or{' '}
            <a href={business.phoneTel} className="text-coral-ink hover:underline">{business.phone}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">2. Information We Collect</h2>
          <p>We may collect the following personal information when you use this website:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Contact form submissions:</strong> your name, phone number or email address, and message content.</li>
            <li><strong>Usage data:</strong> pages visited, time spent, browser type, and device type, collected automatically via analytics tools.</li>
            <li><strong>Cookies:</strong> small text files placed on your device to help the website function and to serve relevant advertisements.</li>
          </ul>
          <p className="mt-2">We do <strong>not</strong> collect payment information. We do not operate an online booking or payment system.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to your inquiries and schedule assessments or trial sessions.</li>
            <li>To understand how visitors use our website and improve its content.</li>
            <li>To display relevant advertisements through Google AdSense (see Section 5).</li>
          </ul>
          <p className="mt-2">We do not sell, trade, or rent your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">4. Contact Form & Resend</h2>
          <p>
            When you submit our contact form, your message is sent to our own server and delivered to
            our email address using <strong>Resend</strong> (resend.com), an email delivery service.
            Your details are used only to reply to your enquiry. We do not add you to a mailing list,
            and the form does not save your submission to a database. Please review{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-coral-ink hover:underline">
              Resend&apos;s Privacy Policy
            </a>{' '}
            for how they handle email in transit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">5. Google AdSense & Cookies</h2>
          <p>
            This website may display advertisements through <strong>Google AdSense</strong>. When ads are shown,
            Google AdSense uses cookies to serve ads based on your prior visits to this and other websites.
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit
            to our site and/or other sites on the internet. Third-party vendors, including Google, use cookies
            to serve ads based on your prior visits.
          </p>
          <p className="mt-2">
            You may opt out of personalised advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-coral-ink hover:underline">
              Google Ads Settings
            </a>.
            You can also opt out via{' '}
            <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-coral-ink hover:underline">
              NAI&apos;s opt-out page
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">6. Vercel Analytics</h2>
          <p>
            We use <strong>Vercel Analytics</strong> to collect anonymous usage statistics (page views, referrers,
            device types). No personally identifiable information is stored. Data is aggregated and cannot be used
            to identify individual visitors. See{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-coral-ink hover:underline">
              Vercel&apos;s Privacy Policy
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">7. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites including Facebook and Google Maps.
            We are not responsible for the privacy practices of those sites and encourage you to read
            their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">8. Children&apos;s Privacy</h2>
          <p>
            Our website is intended for parents and guardians, not for children under 13. We do not
            knowingly collect personal information from children under 13 without verified parental consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">9. Your Rights</h2>
          <p>
            Under the Philippine <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong>, you have
            the right to be informed about, access, correct, and object to the processing of your personal
            data, and to request its deletion. To exercise these rights, contact us at{' '}
            <a href={`mailto:${business.email}`} className="text-coral-ink hover:underline">{business.email}</a>.
            You may also lodge a complaint with the National Privacy Commission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with
            an updated revision date. Continued use of the website after changes constitutes acceptance
            of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="mt-2 list-none space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-coral-ink"><Icon name="mail" size={16} /></span>
              <a href={`mailto:${business.email}`} className="text-coral-ink hover:underline">{business.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-coral-ink"><Icon name="phone" size={16} /></span>
              <a href={business.phoneTel} className="text-coral-ink hover:underline">{business.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-coral-ink"><Icon name="pin" size={16} /></span>
              {business.address}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
