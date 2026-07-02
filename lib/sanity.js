import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'vvf9tj5e',
  dataset: 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
});

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc){
    _id, title, "slug": slug.current, order, icon, summary
  }`);
}

export async function getServiceSlugs() {
  return client.fetch(`*[_type == "service"]{"slug": slug.current}`);
}

export async function getServiceBySlug(slug) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, order, icon, summary, heroDescription,
      highlights, priceNote, faqs, seoTitle, seoDescription,
      "relatedServices": relatedServices[]->{ _id, title, "slug": slug.current, icon, summary }
    }`,
    { slug }
  );
}

export async function getBrand() {
  return client.fetch(`*[_type == "brand"][0]{ name, tagline, oneLiner, phone, licenseNumber }`);
}
