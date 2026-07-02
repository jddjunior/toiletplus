'use client';

import React from 'react';
import { Section, SectionHead, Icon } from './kit';
import { useBooking } from './BookingProvider';

const OFFERS = [
  { value: '$25', unit: 'OFF', title: 'Any repair', detail: 'New customers, any service call over $150.', code: 'SAVE25', color: 'var(--color-primary)' },
  { value: 'FREE', unit: '', title: 'Camera inspection', detail: 'With any drain cleaning or sewer service.', code: 'FREECAM', color: 'var(--green-500)' },
  { value: '$50', unit: 'OFF', title: 'Water heater install', detail: 'Tank or tankless, this month only.', code: 'WH50', color: 'var(--color-accent)' },
];

function OfferTicket({ offer, onBook, tilt }) {
  const [over, setOver] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: '2.5px dashed var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        transform: over ? 'rotate(0deg) translateY(-4px)' : `rotate(${tilt}deg)`,
        boxShadow: over ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      }}
    >
      <span style={{ position: 'absolute', top: -13, right: 20, background: offer.color, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 999, boxShadow: 'var(--shadow-sm)' }}>
        Limited time
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '28px 20px 18px' }}>
        <div style={{ flex: 'none', width: 68, height: 68, borderRadius: '50%', background: offer.color, color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
          <span style={{ fontSize: offer.value.length > 3 ? 16 : 21, fontWeight: 900 }}>{offer.value}</span>
          {offer.unit && <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.05em', marginTop: 2 }}>{offer.unit}</span>}
        </div>
        <div>
          <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18.5, color: 'var(--text-strong)', lineHeight: 1.15 }}>{offer.title}</h3>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.45, color: 'var(--text-muted)' }}>{offer.detail}</p>
        </div>
      </div>

      <div style={{ position: 'relative', height: 0, borderTop: '2px dashed var(--border-strong)', margin: '0 6px' }}>
        <span style={{ position: 'absolute', left: -18, top: -13, width: 24, height: 24, borderRadius: '50%', background: 'var(--surface-page)', border: '2.5px dashed var(--border-strong)' }} />
        <span style={{ position: 'absolute', right: -18, top: -13, width: 24, height: 24, borderRadius: '50%', background: 'var(--surface-page)', border: '2.5px dashed var(--border-strong)' }} />
        <span style={{ position: 'absolute', left: '50%', top: -9, transform: 'translateX(-50%) rotate(90deg)', background: 'var(--surface-card)', display: 'inline-flex', padding: '0 2px' }}>
          <Icon name="Scissors" size={13} color="var(--text-faint)" />
        </span>
      </div>

      <div style={{ padding: '18px 20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.06em', color: 'var(--text-faint)' }}>
          CODE: <span style={{ color: 'var(--text-strong)' }}>{offer.code}</span>
        </span>
        <button
          onClick={onBook}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.05em', color: offer.color }}
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
        index="07" kicker="Current offers"
        title="A few ways to " accentTitle="save right now."
        intro="Real discounts, no fine print. Mention the code when you book."
      />
      <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 8, marginBottom: 8 }}>
        {OFFERS.map((offer, i) => (
          <OfferTicket key={offer.code} offer={offer} onBook={openBooking} tilt={i % 2 === 0 ? -1.4 : 1.4} />
        ))}
      </div>
    </Section>
  );
}
