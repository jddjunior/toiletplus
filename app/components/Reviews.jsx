import React from 'react';
import { ReviewCard } from '../../components/marketing/ReviewCard';
import { Section, SectionHead, Icon } from './kit';

const REVIEWS = [
  [5, 'Water heater died on a Sunday and they had hot water back by dinner. Quoted the price before starting — no games, no Sunday surcharge.', 'Marcus T.', 'Northgate'],
  [5, 'Snaked a drain two other companies wanted to replace. Saved me about $1,800 and explained exactly what was going on in the line.', 'Priya R.', 'Ballard'],
  [5, 'Found a slab leak fast, patched the drywall back, and left the place cleaner than they found it. Genuinely kind crew.', 'Dave & Lin', 'Greenwood'],
];

export function Reviews() {
  return (
    <Section id="reviews">
      <SectionHead
        index="03" kicker="Neighbors, not testimonials"
        title="Why folks keep our " accentTitle="number saved."
        intro='Real reviews from real service calls around the metro. We read every one — the good and the "you missed a spot."'
      />
      <div className="tp-reviews__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 36 }}>
        {REVIEWS.map(([r, q, a, l]) => (
          <ReviewCard key={a} rating={r} quote={q} author={a} location={l} source="Google" style={{ boxShadow: 'none', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)' }} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 24, borderTop: '1px solid var(--border-strong)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
        <Icon name="Star" size={16} color="#FFB400" />
        <span>4.9 average across 2,148 Google reviews</span>
      </div>
    </Section>
  );
}
