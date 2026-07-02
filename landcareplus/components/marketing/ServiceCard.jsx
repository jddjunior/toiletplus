'use client';

import React from 'react';

/** A single service — flat spec-card with a mono index, line icon,
 *  plain-talk copy and a rule-divided link. Top accent bar slides in on hover. */
export function ServiceCard({ icon, title, index, children, href = '#', linkLabel = 'Learn more', style, ...rest }) {
  const [over, setOver] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      style={{
        position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, textDecoration: 'none',
        background: 'var(--surface-card)', border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-md)', padding: '28px 26px 22px', overflow: 'hidden',
        boxShadow: over ? 'var(--shadow-md)' : 'none',
        borderColor: over ? 'var(--blue-300)' : 'var(--border-soft)',
        transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {/* top accent rule */}
      <span style={{ position: 'absolute', top: 0, left: 0, height: 4, width: over ? '100%' : '38px', background: 'var(--color-primary)', transition: 'width var(--dur-base) var(--ease-out)' }} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--color-primary)', display: 'flex' }} aria-hidden="true">{icon}</span>
        {index && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--text-faint)', letterSpacing: '.04em' }}>{index}</span>}
      </div>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, color: 'var(--text-strong)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)', flex: 1 }}>{children}</p>
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-soft)', paddingTop: 14, marginTop: 4, fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.05em', color: over ? 'var(--color-primary)' : 'var(--text-strong)', transition: 'color var(--dur-base) var(--ease-out)' }}>
        {linkLabel}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: over ? 'translateX(4px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </span>
    </a>
  );
}
