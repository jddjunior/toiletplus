import React from 'react';
import { Section, SectionHead, Icon } from './kit';

const ROWS = [
  ['Pricing', 'Flat-rate, written, before we start', 'Hourly or vague — bill grows mid-job'],
  ['Arrival window', 'Real window, text when we’re close', '"Sometime between 8 and 5"'],
  ['Crew', 'Licensed, background-checked employees', 'Unverified subcontractors'],
  ['Warranty', '2 years on workmanship', '30–90 days, or none'],
  ['Emergency calls', 'Same rate, day or night', 'After-hours surcharge'],
];

export function ComparisonSection() {
  return (
    <Section tone="page">
      <SectionHead
        index="05" kicker="Why it's different"
        title="Toilet Plus vs. " accentTitle="a typical plumber."
        intro="Not every plumbing company works the same way. Here's the honest comparison."
      />
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
          <thead>
            <tr style={{ background: 'var(--surface-navy)' }}>
              <th style={{ textAlign: 'left', padding: '14px 20px', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.05em', textTransform: 'uppercase', fontWeight: 700 }}></th>
              <th style={{ textAlign: 'left', padding: '14px 20px', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.05em', textTransform: 'uppercase', fontWeight: 700 }}>Toilet Plus</th>
              <th style={{ textAlign: 'left', padding: '14px 20px', color: 'var(--text-on-dark-muted)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.05em', textTransform: 'uppercase', fontWeight: 700 }}>Typical plumber</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([label, us, them], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? 'var(--surface-card)' : 'var(--surface-muted)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 700, fontSize: 14, color: 'var(--text-strong)', borderTop: '1px solid var(--border-soft)' }}>{label}</td>
                <td style={{ padding: '16px 20px', fontSize: 14, color: 'var(--text-body)', borderTop: '1px solid var(--border-soft)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 8 }}>
                    <Icon name="Check" size={16} color="var(--green-500)" />
                    {us}
                  </span>
                </td>
                <td style={{ padding: '16px 20px', fontSize: 14, color: 'var(--text-muted)', borderTop: '1px solid var(--border-soft)' }}>{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
