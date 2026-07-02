import React from 'react';
import Link from 'next/link';
import { ServiceCard } from '../../../../components/marketing/ServiceCard';
import { Section, SectionHead, Icon } from './kit';

export function ServicesSection({ services }) {
  return (
    <Section id="services" tone="muted">
      <SectionHead
        index="01" kicker="What we handle"
        title="Yard work, done right " accentTitle="the first time."
        intro="From a weekly mow to a full landscape install — residential and light commercial, all over Tampa Bay."
      />
      <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {services.map((s, i) => (
          <ServiceCard
            key={s._id}
            index={String(s.order ?? i + 1).padStart(2, '0')}
            icon={<Icon name={s.icon} size={30} stroke={1.75} />}
            title={s.title}
            href={`/services/${s.slug}`}
          >
            {s.summary}
          </ServiceCard>
        ))}
      </div>
      <div style={{ marginTop: 28, textAlign: 'right' }}>
        <Link href="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          See all services <Icon name="ArrowRight" size={15} />
        </Link>
      </div>
    </Section>
  );
}
