import { getServiceSlugs } from '../lib/sanity';
import { SITE_URL } from '../lib/site';

export default async function sitemap() {
  let slugs = [];
  try {
    slugs = await getServiceSlugs();
  } catch {
    slugs = [];
  }

  const staticRoutes = ['', '/services'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = slugs.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
