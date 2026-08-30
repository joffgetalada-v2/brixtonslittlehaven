import './globals.css';
import { Fredoka, Nunito } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MessengerButton from '@/components/MessengerButton';
import CookieNotice from '@/components/CookieNotice';
import { business, adsense } from '@/content/site';

const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka',
});

const nunito = Nunito({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: business.seoDescription,
  keywords: [
    'childcare Lapu-Lapu City',
    'playgroup Lapu-Lapu City',
    'pre-kindergarten Lapu-Lapu City',
    'preschool Mactan Cebu',
    'daycare Basak Lapu-Lapu',
    'indoor playground Mactan',
    'academic tutorial kids Cebu',
    'ESL classes children',
    'babysitting Lapu-Lapu',
    "Brixton's Little Haven",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | ${business.tagline}`,
    description: business.seoDescription,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: "Brixton's Little Haven, a cosy miniature world of learning and play" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: business.name,
    description: business.seoDescription,
    images: ['/og.jpg'],
  },
  // Icons are file-based: app/favicon.ico, app/icon.png (192), app/apple-icon.png (180).
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: business.name,
    description: business.seoDescription,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'AGC Building, beside Gaisano Grand Mall, Basak',
      addressLocality: 'Lapu-Lapu City',
      addressRegion: 'Cebu',
      postalCode: '6015',
      addressCountry: 'PH',
    },
    // City-level coordinates for Lapu-Lapu City (exact pin lives in the Maps link)
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.3103,
      longitude: 123.9494,
    },
    priceRange: '₱250 - ₱15,999',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    sameAs: [business.facebook, business.instagram, ...(business.tiktok ? [business.tiktok] : [])],
    image: `${business.siteUrl}${business.logo}`,
  };

  return (
    <html lang="en-PH" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* First tab stop on every page: lets keyboard and screen reader users
            jump the header and route rail instead of tabbing through them. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:font-bold focus:text-warm-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
        <MessengerButton />
        <CookieNotice />
        <Analytics />
        {/* AdSense loads only once the publisher ID is filled in content/site.js. */}
        {adsense.publisherId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense.publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
