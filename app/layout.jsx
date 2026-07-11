import './globals.css';
import { Fredoka, Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MessengerButton from '@/components/MessengerButton';
import { business } from '@/content/site';

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
    'playgroup Philippines',
    'indoor playground Mactan',
    'academic tutorial kids',
    'ESL classes children',
    'daycare Basak',
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
    images: [{ url: business.logo, width: 800, height: 800, alt: business.logoAlt }],
  },
  twitter: {
    card: 'summary',
    title: business.name,
    description: business.seoDescription,
    images: [business.logo],
  },
  icons: {
    icon: business.logo,
    apple: business.logo,
  },
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
      streetAddress: 'Beside Gaisano Grand Mall, Basak',
      addressLocality: 'Lapu-Lapu City',
      addressRegion: 'Cebu',
      postalCode: '6015',
      addressCountry: 'PH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.3103,
      longitude: 124.0,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    sameAs: [business.facebook],
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MessengerButton />
        <Analytics />
      </body>
    </html>
  );
}
