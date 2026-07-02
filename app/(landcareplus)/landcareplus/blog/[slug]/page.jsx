import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '../../../../../lib/sanity-landcareplus';
import { SITE_URL } from '../../../../../lib/site-landcareplus';
import { ServiceCard } from '../../../../../components/marketing/ServiceCard';
import { Card } from '../../../../../components/core/Card';
import { Section, SectionHead, Icon } from '../../components/kit';
import { PortableText } from '../../components/PortableText';
import { ServiceCTA } from '../../components/ServiceCTA';

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs();
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const path = `/landcareplus/blog/${post.slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'article', publishedTime: post.publishedAt },
  };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function articleJsonLd(post) {
  const path = `/landcareplus/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.seoDescription || post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        url: `${SITE_URL}${path}`,
        keywords: [post.targetKeyword, ...(post.secondaryKeywords || [])].filter(Boolean).join(', '),
        publisher: { '@type': 'LandscapingBusiness', name: 'LandcarePlus' },
        author: { '@type': 'Organization', name: 'LandcarePlus' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/landcareplus` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/landcareplus/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}${path}` },
        ],
      },
    ],
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <section style={{ background: 'var(--surface-navy)', color: '#fff', padding: '48px 0 56px' }}>
        <div className="tp-container">
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, marginBottom: 22, color: 'var(--text-on-dark-muted)' }}>
            <Link href="/landcareplus" style={{ color: 'var(--text-on-dark-muted)' }}>Home</Link>
            {' / '}
            <Link href="/landcareplus/blog" style={{ color: 'var(--text-on-dark-muted)' }}>Guides</Link>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--blue-300)', marginBottom: 16 }}>
            <span>{formatDate(post.publishedAt)}</span>
            {post.readingTime && (
              <>
                <span>&middot;</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, letterSpacing: '-0.02em', margin: '0 0 14px', color: '#fff', maxWidth: 780 }}>{post.title}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 680, margin: 0 }}>{post.excerpt}</p>
        </div>
      </section>

      <Section tone="page">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <PortableText value={post.body} />

          <div style={{ marginTop: 32, padding: 24, background: 'var(--surface-muted)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <p style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: 'var(--text-strong)' }}>Ready to hand this off to a Tampa crew that does it every day?</p>
            <ServiceCTA label="Get a free quote" />
          </div>
        </div>
      </Section>

      {post.relatedServices && post.relatedServices.length > 0 && (
        <Section tone="muted">
          <SectionHead index="+" kicker="Related service" title="This guide relates to " accentTitle="one of our services." align="left" titleSize={30} />
          <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(post.relatedServices.length, 3)}, 1fr)`, gap: 18 }}>
            {post.relatedServices.map((s) => (
              <ServiceCard key={s._id} icon={<Icon name={s.icon} size={30} stroke={1.75} />} title={s.title} href={`/landcareplus/services/${s.slug}`}>
                {s.summary}
              </ServiceCard>
            ))}
          </div>
        </Section>
      )}

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <Section tone="page">
          <SectionHead index="+" kicker="Keep reading" title="More " accentTitle="guides." align="left" titleSize={30} />
          <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(post.relatedPosts.length, 3)}, 1fr)`, gap: 18 }}>
            {post.relatedPosts.map((p) => (
              <Link key={p._id} href={`/landcareplus/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                <Card hover style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{formatDate(p.publishedAt)}</span>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--text-strong)' }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>{p.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
