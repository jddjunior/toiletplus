import React from 'react';

/** A promise/guarantee block — icon on a navy or blue chip, title, one-line proof.
 *  Use for "Upfront pricing", "Same-week service", "Licensed & insured". */
export function GuaranteeCard({ icon, title, children, tone = 'blue', style, ...rest }) {
  const navy = tone === 'navy';
  return (
    <div style={{
      display: 'flex', gap: 16, alignItems: 'flex-start',
      background: navy ? 'transparent' : 'var(--surface-card)',
      border: navy ? '1px solid var(--border-on-dark)' : '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)', padding: 22,
      boxShadow: navy ? 'none' : 'var(--shadow-sm)',
      ...style,
    }} {...rest}>
      <span style={{
        width: 48, height: 48, flex: 'none', borderRadius: 'var(--radius-md)',
        background: navy ? 'rgba(255,255,255,0.12)' : 'var(--blue-50)',
        color: navy ? '#fff' : 'var(--color-primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }} aria-hidden="true">{icon}</span>
      <div>
        <h4 style={{ margin: '2px 0 5px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: navy ? '#fff' : 'var(--text-strong)' }}>{title}</h4>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: navy ? 'var(--text-on-dark-muted)' : 'var(--text-body)' }}>{children}</p>
      </div>
    </div>
  );
}
