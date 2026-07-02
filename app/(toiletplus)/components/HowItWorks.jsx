import React from 'react';
import { Section, SectionHead, Icon } from './kit';

const STEPS = [
  ['Phone', 'Call or book online', 'Tell us the problem and your ZIP. Takes under two minutes, no account needed.'],
  ['UserCheck', 'A licensed pro gets dispatched', 'Real dispatcher, real plumber — average arrival window is about an hour.'],
  ['FileCheck2', 'You approve a flat price first', 'Written quote before any tool touches your pipes. No surprise line items after.'],
  ['ShieldCheck', 'Fixed right, or we come back', 'Every repair is backed by a 2-year workmanship warranty — no fine print.'],
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="page">
      <SectionHead
        index="01" kicker="What happens when you call"
        title="From call to fixed, " accentTitle="four steps."
        intro="No account to create, no hold music maze. Here's exactly what happens after you reach out."
      />
      <div className="tp-services__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {STEPS.map(([icon, title, body], i) => (
          <div key={title} style={{ position: 'relative', padding: '24px 20px', background: 'var(--surface-muted)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--blue-50)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={icon} size={22} />
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: 'var(--text-strong)' }}>{title}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
