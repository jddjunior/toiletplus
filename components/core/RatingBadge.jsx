import React from 'react';

function Stars({ value = 5, size = 16 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 1 }} aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(1, Math.max(0, value - i));
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
            <defs>
              <linearGradient id={`st${i}-${value}`}>
                <stop offset={`${fill * 100}%`} stopColor="#FFB400" />
                <stop offset={`${fill * 100}%`} stopColor="#E0E6F0" />
              </linearGradient>
            </defs>
            <path d="M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z"
              fill={`url(#st${i}-${value})`} />
          </svg>
        );
      })}
    </span>
  );
}

/** Trust badge — star rating + score + review count. Mirrors the "Google rating" chip. */
export function RatingBadge({ value = 4.9, count = 2148, label = 'Google Reviews', size = 'md', style, ...rest }) {
  const big = size === 'lg';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: big ? 12 : 9,
      background: 'var(--surface-card)', border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-sm)', borderRadius: 'var(--radius-pill)',
      padding: big ? '10px 18px' : '7px 14px', fontFamily: 'var(--font-body)', ...style,
    }} {...rest}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: big ? 22 : 18, color: 'var(--text-strong)', lineHeight: 1 }}>{value.toFixed(1)}</span>
      <Stars value={value} size={big ? 18 : 15} />
      <span style={{ fontSize: big ? 13.5 : 12, color: 'var(--text-muted)', fontWeight: 600 }}>
        {count.toLocaleString()} {label}
      </span>
    </span>
  );
}
