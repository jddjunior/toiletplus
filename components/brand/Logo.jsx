import React from 'react';

/**
 * Toilet Plus logo lockup — vector "+" mark with a red water-droplet,
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
  const markFill = onDark ? '#FFFFFF' : 'url(#tpMarkG)';
  const plusFill = onDark ? '#0B3D7E' : '#FFFFFF';

  const mark = (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden="true" style={{ display: 'block', flex: 'none' }}>
      <defs>
        <linearGradient id="tpMarkG" x1="8" y1="8" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1466CC" />
          <stop offset="1" stopColor="#0B3D7E" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="64" height="64" rx="16" fill={markFill} />
      <rect x="31" y="18" width="10" height="36" rx="5" fill={plusFill} />
      <rect x="18" y="31" width="36" height="10" rx="5" fill={plusFill} />
      <path d="M53 14c0 4.4-3.1 7-6.5 7S40 18.4 40 14c0-3.3 4.2-7.8 5.9-9.5a.8.8 0 0 1 1.2 0C48.8 6.2 53 10.7 53 14Z" fill="#FF4D4D" />
    </svg>
  );

  const inner = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32, ...style }} {...rest}>
      {mark}
      {showWordmark && (
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: size * 0.82,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          color: onDark ? '#FFFFFF' : 'var(--text-strong)',
        }}>
          Toilet<span style={{ color: onDark ? 'var(--color-accent)' : 'var(--color-primary)' }}>+</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return <a href={href} style={{ textDecoration: 'none', display: 'inline-flex' }}>{inner}</a>;
  }
  return inner;
}
