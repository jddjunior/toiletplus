import React from 'react';

function Stars({ value = 5 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }} aria-label={`${value} of 5`}>
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < value ? '#FFB400' : '#E0E6F0'}>
          <path d="M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z"/>
        </svg>
      ))}
    </span>
  );
}

/** Customer review card — stars, quote, and author with location. */
export function ReviewCard({ rating = 5, quote, author, location, source = 'Google', style, ...rest }) {
  return (
    <figure style={{
      margin: 0, display: 'flex', flexDirection: 'column', gap: 14,
      background: 'var(--surface-card)', border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)', padding: 26, boxShadow: 'var(--shadow-sm)',
      ...style,
    }} {...rest}>
      <Stars value={rating} />
      <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--text-strong)', fontWeight: 500 }}>
        "{quote}"
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 'auto' }}>
        <span style={{
          width: 38, height: 38, borderRadius: '50%', flex: 'none',
          background: 'var(--blue-100)', color: 'var(--blue-700)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
        }}>{(author || '?').charAt(0)}</span>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>{author}</span>
          <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{location}{location && source ? ' · ' : ''}{source}</span>
        </span>
      </figcaption>
    </figure>
  );
}
