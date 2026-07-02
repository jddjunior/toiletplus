export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  'http://localhost:3000';

export const SITE = {
  name: 'Toilet Plus',
  shortName: 'Toilet Plus',
  description:
    'Licensed Tampa-area plumbers for drain cleaning, water heaters, leak detection, sewer lines, fixtures, and repiping. Upfront flat-rate pricing, 24/7 emergency service.',
  phone: '(813) 555-0142',
  phoneHref: 'tel:8135550142',
  licenseNumber: 'PL-48217',
  city: 'Tampa, FL',
  areaServed: 'Tampa Bay, FL',
  ratingValue: 4.9,
  ratingCount: 2148,
  url: SITE_URL,
};
