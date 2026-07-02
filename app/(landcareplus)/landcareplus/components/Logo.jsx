import React from 'react';

/**
 * LandcarePlus logo lockup — vector "+" mark with a leaf accent,
 * plus the Archivo wordmark. Use `tone="dark"` on navy/photo backgrounds.
 */
export function Logo({
  tone = 'light',
  showWordmark = true,
  size = 36,
  href,
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  const markFill = onDark ? '#FFFFFF' : 'url(#lpMarkG)';
  const plusFill = onDark ? '#14361C' : '#FFFFFF';

  const mark = (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden="true" style={{ display: 'block', flex: 'none' }}>
      <defs>
        <linearGradient id="lpMarkG" x1="8" y1="8" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3C9142" />
          <stop offset="1" stopColor="#1D5C29" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="64" height="64" rx="16" fill={markFill} />
      <rect x="31" y="18" width="10" height="36" rx="5" fill={plusFill} />
      <rect x="18" y="31" width="36" height="10" rx="5" fill={plusFill} />
      <path d="M46 5c6 2.6 10 8.4 10 15 0 5.5-4.5 8-9 8s-8-3-8-7.5c0-6.6 4-12.4 5.7-14.9a1.6 1.6 0 0 1 1.3-.6Z" fill="#F2762E" />
    </svg>
  );

  const inner = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32, ...style }} {...rest}>
      {mark}
      {showWordmark && (
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: size * 0.75,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          color: onDark ? '#FFFFFF' : 'var(--text-strong)',
        }}>
          Landcare<span style={{ color: onDark ? 'var(--color-accent)' : 'var(--color-primary)' }}>+</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return <a href={href} style={{ textDecoration: 'none', display: 'inline-flex' }}>{inner}</a>;
  }
  return inner;
}
