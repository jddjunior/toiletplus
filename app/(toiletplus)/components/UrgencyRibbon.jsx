import React from 'react';
import { Icon } from './kit';

export function UrgencyRibbon() {
  return (
    <div style={{ background: 'var(--color-accent)', color: '#fff' }}>
      <div className="tp-container" style={{ padding: '9px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 13, fontWeight: 700, textAlign: 'center', flexWrap: 'wrap' }}>
        <Icon name="TriangleAlert" size={15} />
        <span>Burst pipe or major leak? We dispatch emergency crews 24/7.</span>
        <a href="tel:8135550142" style={{ color: '#fff', textDecoration: 'underline', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
          Call (813) 555-0142 now
        </a>
      </div>
    </div>
  );
}
