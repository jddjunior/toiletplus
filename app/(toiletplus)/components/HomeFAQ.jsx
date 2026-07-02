import React from 'react';
import { Section, SectionHead } from './kit';

const FAQS = [
  { q: 'Are you licensed and insured?', a: 'Yes — every plumber we send is licensed, bonded, and insured. Our license number (#PL-48217) is on every invoice and posted on this site.' },
  { q: 'Do you charge for estimates?', a: 'No. We quote the job in person or over the phone before any work starts, and there’s no charge just to get a number.' },
  { q: 'Is there an extra fee for emergency or after-hours calls?', a: 'No overtime surcharge. Our flat-rate pricing is the same whether we come out at 2pm or 2am.' },
  { q: 'What areas do you serve?', a: 'We cover the metro area and roughly 30 miles out. Tell us your ZIP when you call or book online and we’ll confirm same-day.' },
  { q: 'How fast can you get someone to my house?', a: 'Most calls get a same-day window, and our average arrival time once dispatched is about an hour.' },
  { q: 'What if the repair doesn’t hold?', a: 'Every job is backed by a 2-year workmanship warranty. If something we fixed acts up, we come back and make it right at no charge.' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function HomeFAQ() {
  return (
    <Section id="faq" tone="muted">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SectionHead
        index="08" kicker="Common questions"
        title="Straight answers, " accentTitle="before you call."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 820 }}>
        {FAQS.map((f, i) => (
          <div key={f.q} style={{ padding: '22px 0', borderBottom: i < FAQS.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: 'var(--text-strong)', fontFamily: 'var(--font-display)' }}>{f.q}</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{f.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
