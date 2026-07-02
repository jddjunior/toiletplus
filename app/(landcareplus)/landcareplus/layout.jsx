import './theme.css';
import { BookingProvider } from './components/BookingProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SITE, SITE_URL, BASE_PATH } from '../../../lib/site-landcareplus';

export const metadata = {
  title: {
    default: 'LandcarePlus — Tampa Landscaping, Done Right',
    template: '%s | LandcarePlus',
  },
  description: SITE.description,
  alternates: { canonical: BASE_PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'LandcarePlus — Tampa Landscaping, Done Right',
    description: SITE.description,
    url: SITE.url,
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
  url: SITE.url,
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

export default function LandcarePlusLayout({ children }) {
  return (
    <div className="lp-theme">
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
    </div>
  );
}
