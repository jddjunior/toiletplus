import { BookingProvider } from './components/BookingProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SITE, SITE_URL } from '../../lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Toilet Plus — Local Plumbers, Done Right',
    template: '%s | Toilet Plus',
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'Toilet Plus — Local Plumbers, Done Right',
    description: SITE.description,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary',
    title: 'Toilet Plus — Local Plumbers, Done Right',
    description: SITE.description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1466CC',
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: SITE.name,
  url: SITE_URL,
  telephone: SITE.phoneHref.replace('tel:', '+1'),
  description: SITE.description,
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.ratingValue,
    reviewCount: SITE.ratingCount,
  },
  identifier: SITE.licenseNumber,
};

export default function ToiletPlusLayout({ children }) {
  return (
    <>
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
    </>
  );
}
