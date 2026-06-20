import React from 'react';

const TONES = {
  blue:   { bg: 'var(--blue-50)',  fg: 'var(--blue-700)' },
  navy:   { bg: 'var(--blue-900)', fg: '#fff' },
  accent: { bg: 'var(--red-50)',   fg: 'var(--red-600)' },
  green:  { bg: 'var(--green-50)',  fg: 'var(--green-500)' },
  amber:  { bg: 'var(--amber-50)',  fg: 'var(--amber-500)' },
  gray:   { bg: 'var(--gray-100)',  fg: 'var(--gray-600)' },
  solid:  { bg: 'var(--color-primary)', fg: '#fff' },
};

/** Small status / qualifier stamp — "LICENSED", "24/7", "SAME-DAY".
 *  Sharp, mono, uppercase — reads like an equipment/spec label. */
export function Badge({ tone = 'blue', icon, size = 'md', children, style, ...rest }) {
  const t = TONES[tone] || TONES.blue;
  const pad = size === 'sm' ? '3px 8px' : '5px 10px';
  const fs = size === 'sm' ? 10.5 : 11.5;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: t.bg, color: t.fg,
      fontFamily: 'var(--font-mono)', fontWeight: 600,
      fontSize: fs, lineHeight: 1, letterSpacing: '.06em', textTransform: 'uppercase',
      padding: pad, borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {icon}
      {children}
    </span>
  );
}
