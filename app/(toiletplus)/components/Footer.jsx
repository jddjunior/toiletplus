import React from 'react';
import Link from 'next/link';
import { Logo } from '../../../components/brand/Logo';
import { Button } from '../../../components/buttons/Button';
import { Icon } from './kit';

const COLS = [
  ['Services', [
    ['Drain Cleaning', '/services/drain-cleaning'],
    ['Water Heaters', '/services/water-heaters'],
    ['Leak Detection', '/services/leak-detection'],
    ['Sewer & Main Line', '/services/sewer-main-line'],
    ['Fixtures & Toilets', '/services/fixtures-toilets'],
    ['Repiping & Water Quality', '/services/repiping-water-quality'],
  ]],
  ['Company', [
    ['All Services', '/services'],
    ['Why Us', '/#why'],
    ['Reviews', '/#reviews'],
  ]],
];

export function Footer() {
  return (
    <footer style={{ background: '#05152B', color: 'var(--text-on-dark-muted)' }}>
      <div style={{ borderBottom: '1px solid var(--border-on-dark)' }}>
        <div className="tp-footer__cta tp-container" style={{ padding: '36px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <Icon name="Phone" size={22} color="#fff" />
            </span>
            <div>
              <div style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>Got a plumbing emergency right now?</div>
              <div style={{ fontSize: 14 }}>We answer the phone 24/7 &mdash; holidays included.</div>
            </div>
          </div>
          <Button variant="accent" size="lg" href="tel:8135550142" iconLeft={<Icon name="Phone" size={18} />}>(813) 555-0142</Button>
        </div>
      </div>
      <div className="tp-footer__grid tp-container" style={{ padding: '56px 24px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40 }}>
        <div className="tp-footer__brand-col">
          <Logo size={34} tone="dark" />
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: '16px 0 18px', maxWidth: 300 }}>Locally owned plumbers serving Tampa Bay and 30 miles out. Upfront pricing, real people, and work we stand behind.</p>
        </div>
        {COLS.map(([title, links]) => (
          <div key={title}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 14, letterSpacing: '.02em' }}>{title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(([l, href]) => (
                <Link key={l} href={href} style={{ color: 'var(--text-on-dark-muted)', textDecoration: 'none', fontSize: 14 }}>{l}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border-on-dark)' }}>
        <div className="tp-container" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13 }}>
          <span style={{ fontFamily: 'var(--font-mono)' }}>&copy; 2026 Toilet Plus Plumbing &middot; Tampa, FL &middot; Lic. #PL-48217 &middot; Bonded &amp; Insured</span>
        </div>
      </div>
    </footer>
  );
}
