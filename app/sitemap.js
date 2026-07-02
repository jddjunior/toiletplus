import { getServiceSlugs } from '../lib/sanity';
import { getServiceSlugs as getLandcareServiceSlugs } from '../lib/sanity-landcareplus';
import { SITE_URL } from '../lib/site';

export default async function sitemap() {
  let slugs = [];
  try {
    slugs = await getServiceSlugs();
  } catch {
    slugs = [];
  }

  let landcareSlugs = [];
  try {
    landcareSlugs = await getLandcareServiceSlugs();
  } catch {
    landcareSlugs = [];
  }

  const staticRoutes = ['', '/services', '/landcareplus', '/landcareplus/services'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' || path === '/landcareplus' ? 1 : 0.8,
  }));

  const serviceRoutes = slugs.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const landcareServiceRoutes = landcareSlugs.map((s) => ({
    url: `${SITE_URL}/landcareplus/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...landcareServiceRoutes];
}
