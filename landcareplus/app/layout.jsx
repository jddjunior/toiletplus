import './globals.css';
import { BookingProvider } from './components/BookingProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SITE, SITE_URL } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'LandcarePlus — Tampa Landscaping, Done Right',
    template: '%s | LandcarePlus',
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'LandcarePlus — Tampa Landscaping, Done Right',
    description: SITE.description,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary',
    title: 'LandcarePlus — Tampa Landscaping, Done Right',
    description: SITE.description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2E8B3D',
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: SITE.name,
  url: SITE_URL,
  telephone: SITE.phoneHref.replace('tel:', '+1'),
  description: SITE.description,
  priceRange: '$$',
  areaServed: 'Tampa Bay, FL',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.ratingValue,
    reviewCount: SITE.ratingCount,
  },
  identifier: SITE.licenseNumber,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
