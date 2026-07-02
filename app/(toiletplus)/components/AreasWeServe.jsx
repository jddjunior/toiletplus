import React from 'react';
import { Section, SectionHead, Icon } from './kit';

const AREAS = [
  'Downtown Tampa', 'South Tampa', 'Seminole Heights', 'Carrollwood', 'Westchase', 'New Tampa',
  'Brandon', 'Riverview', "Town 'n' Country", 'Temple Terrace', 'St. Petersburg', 'Clearwater',
];

export function AreasWeServe() {
  return (
    <Section tone="muted">
      <SectionHead
        index="03" kicker="Service area"
        title="Serving Tampa Bay, " accentTitle="plus 30 miles out."
        intro="If your ZIP is anywhere near this list, we've got a crew close enough to reach you same-day."
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
        {AREAS.map((area) => (
          <span key={area} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'var(--surface-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-pill)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-body)' }}>
            <Icon name="MapPin" size={14} color="var(--color-primary)" />
            {area}
          </span>
        ))}
      </div>
      <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)' }}>
        Don&rsquo;t see your neighborhood? Call us anyway — we cover plenty of areas not listed here.
      </p>
    </Section>
  );
}
