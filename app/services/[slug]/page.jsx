import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs } from '../../../lib/sanity';
import { ServiceCard } from '../../../components/marketing/ServiceCard';
import { Button } from '../../../components/buttons/Button';
import { Section, SectionHead, Icon, blueprint } from '../../components/kit';
import { ServiceCTA } from '../../components/ServiceCTA';
import { SITE_URL } from '../../../lib/site';

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getServiceSlugs();
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return {};
  const title = service.seoTitle || service.title;
  const description = service.seoDescription || service.summary;
  const path = `/services/${service.slug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'website' },
  };
}

function serviceJsonLd(service) {
  const path = `/services/${service.slug}`;
  const graph = [
    {
      '@type': 'Service',
      serviceType: service.title,
      name: service.title,
      description: service.heroDescription || service.summary,
      url: `${SITE_URL}${path}`,
      areaServed: 'Local metro area',
      provider: { '@type': 'Plumber', name: 'Toilet Plus' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}${path}` },
      ],
    },
  ];
  if (service.faqs && service.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export default async function ServicePage({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />
      <section style={{ position: 'relative', background: 'linear-gradient(165deg, #0B3D7E 0%, #071E3D 72%)', color: '#fff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, ...blueprint('rgba(255,255,255,0.05)', 32), pointerEvents: 'none' }} />
        <div className="tp-container" style={{ position: 'relative', padding: '48px 24px 64px' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, marginBottom: 22, color: 'var(--text-on-dark-muted)' }}>
            <Link href="/" style={{ color: 'var(--text-on-dark-muted)' }}>Home</Link>
            {' / '}
            <Link href="/services" style={{ color: 'var(--text-on-dark-muted)' }}>Services</Link>
            {' / '}
            <span style={{ color: '#fff' }}>{service.title}</span>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <span style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={service.icon} size={30} color="#fff" />
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue-300)' }}>
              Service {String(service.order).padStart(2, '0')}
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, letterSpacing: '-0.02em', margin: '0 0 18px', color: '#fff', maxWidth: 720 }}>{service.title}</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 640, margin: '0 0 30px' }}>{service.heroDescription}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <ServiceCTA label={`Book ${service.title}`} />
            <Button variant="on-dark" size="lg" iconLeft={<Icon name="Phone" size={18} />} href="tel:5552407867">Call (555) 240-7867</Button>
          </div>
        </div>
      </section>

      <Section tone="page">
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 56 }} className="tp-sectionhead__grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, margin: '0 0 20px' }}>What&rsquo;s included</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
              {(service.highlights || []).map((h) => (
                <div key={h} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Icon name="Check" size={18} color="var(--green-500)" />
                  <span style={{ fontSize: 15.5, lineHeight: 1.5, color: 'var(--text-body)' }}>{h}</span>
                </div>
              ))}
            </div>

            {service.faqs && service.faqs.length > 0 && (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, margin: '0 0 20px' }}>Questions we hear a lot</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  {service.faqs.map((f) => (
                    <div key={f.question} style={{ borderBottom: '1px solid var(--border-soft)', paddingBottom: 20 }}>
                      <h3 style={{ fontSize: 16.5, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 8px' }}>{f.question}</h3>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{f.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div>
            <div style={{ background: 'var(--surface-muted)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', padding: 26, position: 'sticky', top: 100 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 10 }}>Pricing</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-body)', margin: '0 0 20px' }}>{service.priceNote}</p>
              <ServiceCTA label="Get a quote" />
            </div>
          </div>
        </div>
      </Section>

      {service.relatedServices && service.relatedServices.length > 0 && (
        <Section tone="muted">
          <SectionHead index="+" kicker="Related work" title="Often paired with " accentTitle="this fix." align="left" titleSize={32} />
          <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {service.relatedServices.map((r) => (
              <ServiceCard key={r._id} icon={<Icon name={r.icon} size={30} stroke={1.75} />} title={r.title} href={`/services/${r.slug}`}>
                {r.summary}
              </ServiceCard>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
