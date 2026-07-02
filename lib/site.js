export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  'http://localhost:3000';

export const SITE = {
  name: 'Toilet Plus',
  shortName: 'Toilet Plus',
  description:
    'Licensed local plumbers for drain cleaning, water heaters, leak detection, sewer lines, fixtures, and repiping. Upfront flat-rate pricing, 24/7 emergency service.',
  phone: '(555) 240-7867',
  phoneHref: 'tel:5552407867',
  licenseNumber: 'PL-48217',
  ratingValue: 4.9,
  ratingCount: 2148,
  url: SITE_URL,
};
