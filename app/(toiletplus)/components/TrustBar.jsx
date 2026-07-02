import React from 'react';
import { Icon } from './kit';

const ITEMS = [
  ['ShieldCheck', 'Licensed & insured · #PL-48217'],
  ['Star', '4.9 rating · 2,148 reviews'],
  ['BadgeCheck', '2-year workmanship warranty'],
  ['Clock', '24/7 emergency dispatch'],
];

export function TrustBar() {
  return (
    <div style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border-soft)' }}>
      <div className="tp-container tp-trustbar" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 32px', padding: '16px 24px' }}>
        {ITEMS.map(([icon, label]) => (
          <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600, letterSpacing: '.03em', color: 'var(--text-body)' }}>
            <Icon name={icon} size={16} color="var(--color-primary)" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
