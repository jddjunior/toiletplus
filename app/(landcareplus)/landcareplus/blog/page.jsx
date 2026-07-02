import Link from 'next/link';
import { getPosts } from '../../../../lib/sanity-landcareplus';
import { Card } from '../../../../components/core/Card';
import { Section, Icon } from '../components/kit';

export const revalidate = 60;

const description =
  'Straight-talking guides for Tampa homeowners on lawn care, landscaping, irrigation, and storm prep — what things cost, what causes common problems, and when it makes sense to hire a pro.';

export const metadata = {
  title: 'Lawn & Landscaping Guides for Tampa Homeowners',
  description,
  alternates: { canonical: '/landcareplus/blog' },
  openGraph: {
    title: 'Lawn & Landscaping Guides for Tampa Homeowners | LandcarePlus',
    description,
    url: '/landcareplus/blog',
    type: 'website',
  },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <>
      <section style={{ background: 'var(--surface-navy)', color: '#fff', padding: '64px 0 56px' }}>
        <div className="tp-container">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue-300)' }}>Guides &amp; advice</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, letterSpacing: '-0.02em', margin: '14px 0 0', color: '#fff' }}>Tampa lawn &amp; landscaping guides</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 620, margin: '16px 0 0' }}>
            Straight answers on cost, common problems, and when it&rsquo;s actually worth hiring a pro — written for Tampa Bay yards, not a generic national blog.
          </p>
        </div>
      </section>
      <Section tone="page">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 780, margin: '0 auto' }}>
          {posts.map((post) => (
            <Link key={post._id} href={`/landcareplus/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <Card hover style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  <span>{formatDate(post.publishedAt)}</span>
                  {post.readingTime && (
                    <>
                      <span>&middot;</span>
                      <span>{post.readingTime} min read</span>
                    </>
                  )}
                </div>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--text-strong)', letterSpacing: '-0.01em' }}>{post.title}</h2>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{post.excerpt}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4, fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--color-primary)' }}>
                  Read the guide <Icon name="ArrowRight" size={15} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
