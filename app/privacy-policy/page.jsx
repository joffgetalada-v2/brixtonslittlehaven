import { business } from '@/content/site';

export const metadata = {
  title: "Privacy Policy — Brixton's Little Haven",
  description:
    "Privacy Policy for Brixton's Little Haven website — how we collect, use, and protect your information.",
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        Privacy Policy
      </h1>
      <p className="text-sm text-navy/50 mb-10">Last updated: June 2026</p>

      <div className="prose prose-navy max-w-none space-y-8 text-navy/80 leading-relaxed text-sm">

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">1. Who We Are</h2>
          <p>
            This website is operated by <strong>Brixton's Little Haven</strong>, an indoor childcare, playgroup,
            and tutorial center located beside Gaisano Grand Mall, Basak, Lapu-Lapu City, Philippines 6015.
            We can be reached at <a href={`mailto:${business.email}`} className="text-coral hover:underline">{business.email}</a> or{' '}
            <a href={business.phoneTel} className="text-coral hover:underline">{business.phone}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">2. Information We Collect</h2>
          <p>We may collect the following personal information when you use this website:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Contact form submissions</strong> — your name, phone number or email address, and message content.</li>
            <li><strong>Usage data</strong> — pages visited, time spent, browser type, and device type, collected automatically via analytics tools.</li>
            <li><strong>Cookies</strong> — small text files placed on your device to help the website function and to serve relevant advertisements.</li>
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
          <h2 className="text-lg font-bold text-navy mb-2">4. Contact Form & Formspree</h2>
          <p>
            Our contact form is processed by <strong>Formspree</strong> (formspree.io). When you submit the form,
            your data is transmitted to Formspree's servers and forwarded to our email address.
            Formspree stores your submission for a limited period. Please review{' '}
            <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Formspree's Privacy Policy
            </a>{' '}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">5. Google AdSense & Cookies</h2>
          <p>
            This website uses <strong>Google AdSense</strong> to display advertisements. Google AdSense uses cookies
            to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies
            enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet.
          </p>
          <p className="mt-2">
            You may opt out of personalised advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Google Ads Settings
            </a>.
            You can also opt out via{' '}
            <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              NAI's opt-out page
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">6. Vercel Analytics</h2>
          <p>
            We use <strong>Vercel Analytics</strong> to collect anonymous usage statistics (page views, referrers,
            device types). No personally identifiable information is stored. Data is aggregated and cannot be used
            to identify individual visitors. See{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
              Vercel's Privacy Policy
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
          <h2 className="text-lg font-bold text-navy mb-2">8. Children's Privacy</h2>
          <p>
            Our website is intended for parents and guardians, not for children under 13. We do not
            knowingly collect personal information from children under 13 without verified parental consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">9. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of any personal data
            we hold about you. To exercise these rights, contact us at{' '}
            <a href={`mailto:${business.email}`} className="text-coral hover:underline">{business.email}</a>.
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
          <ul className="list-none mt-2 space-y-1">
            <li>📧 <a href={`mailto:${business.email}`} className="text-coral hover:underline">{business.email}</a></li>
            <li>📞 <a href={business.phoneTel} className="text-coral hover:underline">{business.phone}</a></li>
            <li>📍 {business.address}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
