import React from 'react';
import { ReviewCard } from '../../components/marketing/ReviewCard';
import { Section, SectionHead, Icon } from './kit';

const REVIEWS = [
  [5, 'Our St. Augustine was covered in chinch bugs and two other companies just mowed around it. LandcarePlus actually treated it and it came back thick within a month.', 'Marcus T.', 'South Tampa'],
  [5, 'They redid our sprinkler zones so we stopped getting fined for watering on the wrong day. Quoted the price up front, no surprises.', 'Priya R.', 'Westshore'],
  [5, 'Had a tree come down after a storm and they had the yard cleared within a day. Genuinely kind crew, cleaned up better than we expected.', 'Dave & Lin', 'Brandon'],
];

export function Reviews() {
  return (
    <Section id="reviews">
      <SectionHead
        index="03" kicker="Neighbors, not testimonials"
        title="Why Tampa keeps our " accentTitle="number saved."
        intro='Real reviews from real yards around the Bay. We read every one — the good and the "you missed a spot."'
      />
      <div className="tp-reviews__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 36 }}>
        {REVIEWS.map(([r, q, a, l]) => (
          <ReviewCard key={a} rating={r} quote={q} author={a} location={l} source="Google" style={{ boxShadow: 'none', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)' }} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 24, borderTop: '1px solid var(--border-strong)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
        <Icon name="Star" size={16} color="#FFB400" />
        <span>4.9 average across 1,834 Google reviews</span>
      </div>
    </Section>
  );
}
