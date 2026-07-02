import React from 'react';
import { blueprint } from './kit';

const STATS = [
  ['18', 'yrs', 'In the trade, locally owned'],
  ['~1', 'hr', 'Average arrival window'],
  ['12k', '+', 'Jobs done & warrantied'],
  ['4.9', '★', '2,148 verified reviews'],
];

export function SpecStrip() {
  return (
    <section style={{ position: 'relative', background: 'var(--color-primary)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, ...blueprint('rgba(255,255,255,0.08)', 30), pointerEvents: 'none' }} />
      <div className="tp-container" style={{ position: 'relative' }}>
        <div className="tp-specstrip__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map(([n, unit, label], i) => (
            <div key={label} style={{ padding: '34px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, color: '#fff' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 52, letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 600, color: 'var(--blue-100)' }}>{unit}</span>
              </div>
              <div style={{ marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
