export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  'http://localhost:3000';

export const SITE = {
  name: 'LandcarePlus',
  shortName: 'LandcarePlus',
  description:
    'Licensed Tampa-area landscaping: lawn care & mowing, landscape design, irrigation repair, tree & shrub care, hardscaping, and storm cleanup. Upfront flat-rate pricing.',
  phone: '(813) 555-0184',
  phoneHref: 'tel:8135550184',
  licenseNumber: 'LC-48217',
  city: 'Tampa, FL',
  ratingValue: 4.9,
  ratingCount: 1834,
  url: SITE_URL,
};
