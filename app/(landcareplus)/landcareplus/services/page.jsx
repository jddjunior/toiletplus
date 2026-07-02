import { getServices } from '../../../../lib/sanity-landcareplus';
import { ServiceCard } from '../../../../components/marketing/ServiceCard';
import { Section, Icon } from '../components/kit';

export const revalidate = 60;

const description =
  'Lawn care & mowing, landscape design, irrigation repair, tree & shrub care, hardscaping & pavers, mulch, sod & storm cleanup — licensed, flat-rate, same-week service across Tampa Bay.';

export const metadata = {
  title: 'All Landscaping Services',
  description,
  alternates: { canonical: '/landcareplus/services' },
  openGraph: {
    title: 'All Landscaping Services | LandcarePlus',
    description,
    url: '/landcareplus/services',
    type: 'website',
  },
};

export default async function ServicesIndexPage() {
  const services = await getServices();

  return (
    <>
      <section style={{ background: 'var(--surface-navy)', color: '#fff', padding: '64px 0 56px' }}>
        <div className="tp-container">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue-300)' }}>What we handle</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, letterSpacing: '-0.02em', margin: '14px 0 0', color: '#fff' }}>All landscaping services</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 620, margin: '16px 0 0' }}>
            Residential and light commercial, across Tampa Bay. Flat-rate pricing, quoted before we start.
          </p>
        </div>
      </section>
      <Section tone="page">
        <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {services.map((s, i) => (
            <ServiceCard
              key={s._id}
              index={String(s.order ?? i + 1).padStart(2, '0')}
              icon={<Icon name={s.icon} size={30} stroke={1.75} />}
              title={s.title}
              href={`/landcareplus/services/${s.slug}`}
            >
              {s.summary}
            </ServiceCard>
          ))}
        </div>
      </Section>
    </>
  );
}
