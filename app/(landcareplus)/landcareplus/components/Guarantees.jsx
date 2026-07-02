import React from 'react';
import { Icon, Stamp, blueprint } from './kit';

const ITEMS = [
  ['01', 'Upfront, flat-rate pricing', 'You approve the price before we touch the yard. No hourly meter running, no surprise line items.'],
  ['02', 'On time, or we call you', 'A real arrival window, and a text when we’re 30 minutes out. Your whole day doesn’t revolve around waiting on us.'],
  ['03', 'Licensed & insured crews', 'Every crew is licensed, insured, and vetted. We treat your yard like it’s our own.'],
  ['04', 'Satisfaction guarantee', 'Not happy with a mow or a bed install? We come back and make it right — no fine print, no fight.'],
];

export function Guarantees() {
  return (
    <section id="why" style={{ position: 'relative', background: 'var(--surface-navy)', color: '#fff', padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, ...blueprint('rgba(255,255,255,0.04)', 32), pointerEvents: 'none' }} />
      <div className="tp-guarantees__grid tp-container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '.08em' }}>02</span>
            <Stamp tone="onDark" tick={false}>The LandcarePlus promise</Stamp>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, lineHeight: 1.02, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 18px' }}>
            No surprises. No upsell. <span style={{ color: 'var(--blue-300)' }}>Just a great yard.</span>
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', margin: '0 0 26px', maxWidth: 420 }}>
            We&rsquo;re a local Tampa Bay crew, not a franchise call center. Same crew, same honest read, and a price we stand behind &mdash; every single visit.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: '.05em', textTransform: 'uppercase', color: '#fff', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', padding: '10px 14px' }}>
            <Icon name="FileSignature" size={16} color="var(--blue-300)" /> Written estimate, every job
          </div>
        </div>
        <div className="tp-guarantees__items" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          {ITEMS.map(([n, t, b], i) => (
            <div key={n} style={{ padding: '26px 24px', borderRight: i % 2 === 0 ? '1px solid var(--border-on-dark)' : 'none', borderBottom: i < 2 ? '1px solid var(--border-on-dark)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--color-accent)', marginBottom: 12, letterSpacing: '.06em' }}>{n}</div>
              <h4 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', lineHeight: 1.15 }}>{t}</h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--text-on-dark-muted)' }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
