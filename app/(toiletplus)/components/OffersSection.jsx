'use client';

import React from 'react';
import { Button } from '../../../components/buttons/Button';
import { Section, SectionHead, Icon } from './kit';
import { useBooking } from './BookingProvider';

const OFFERS = [
  { code: 'SAVE25', title: '$25 off any repair', detail: 'New customers, any service call over $150.' },
  { code: 'FREECAM', title: 'Free camera inspection', detail: 'With any drain cleaning or sewer service.' },
  { code: 'WH50', title: '$50 off a water heater', detail: 'Tank or tankless install, this month only.' },
];

function OfferTicket({ offer, onBook }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <div style={{ padding: '20px 22px 16px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 10 }}>
          Code: {offer.code}
        </div>
        <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--text-strong)' }}>{offer.title}</h3>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--text-muted)' }}>{offer.detail}</p>
      </div>
      <div style={{ borderTop: '2px dashed var(--border-strong)' }} />
      <div style={{ padding: '14px 22px' }}>
        <button
          onClick={onBook}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--color-primary)' }}
        >
          Claim this offer <Icon name="ArrowRight" size={15} />
        </button>
      </div>
    </div>
  );
}

export function OffersSection() {
  const openBooking = useBooking();
  return (
    <Section tone="page">
      <SectionHead
        index="04" kicker="Current offers"
        title="A few ways to " accentTitle="save right now."
        intro="Real discounts, no fine print. Mention the code when you book."
      />
      <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 8 }}>
        {OFFERS.map((offer) => (
          <OfferTicket key={offer.code} offer={offer} onBook={openBooking} />
        ))}
      </div>
    </Section>
  );
}
