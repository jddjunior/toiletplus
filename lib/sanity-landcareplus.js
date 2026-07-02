import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'cxlheen2',
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
  return client.fetch(`*[_type == "brand"][0]{ name, tagline, oneLiner, phone, licenseNumber, city }`);
}

export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, publishedAt, readingTime, targetKeyword
  }`);
}

export async function getPostSlugs() {
  return client.fetch(`*[_type == "post"]{"slug": slug.current}`);
}

export async function getPostBySlug(slug) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, excerpt, publishedAt, readingTime,
      targetKeyword, secondaryKeywords, body, seoTitle, seoDescription,
      "relatedServices": relatedServices[]->{ _id, title, "slug": slug.current, icon, summary },
      "relatedPosts": relatedPosts[]->{ _id, title, "slug": slug.current, excerpt, publishedAt, readingTime }
    }`,
    { slug }
  );
}
