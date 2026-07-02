import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '../../../../components/buttons/Button';
import { Icon } from './kit';

const COLS = [
  ['Services', [
    ['Lawn Care & Mowing', '/landcareplus/services/lawn-care-mowing'],
    ['Landscape Design', '/landcareplus/services/landscape-design-installation'],
    ['Irrigation Repair', '/landcareplus/services/irrigation-sprinkler-repair'],
    ['Tree & Shrub Care', '/landcareplus/services/tree-shrub-care'],
    ['Hardscaping & Pavers', '/landcareplus/services/hardscaping-pavers'],
    ['Mulch, Sod & Cleanup', '/landcareplus/services/mulch-sod-storm-cleanup'],
  ]],
  ['Company', [
    ['All Services', '/landcareplus/services'],
    ['Guides', '/landcareplus/blog'],
    ['Why Us', '/landcareplus/#why'],
    ['Reviews', '/landcareplus/#reviews'],
  ]],
];

export function Footer() {
  return (
    <footer style={{ background: '#0A2010', color: 'var(--text-on-dark-muted)' }}>
      <div style={{ borderBottom: '1px solid var(--border-on-dark)' }}>
        <div className="tp-footer__cta tp-container" style={{ padding: '36px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <Icon name="Phone" size={22} color="#fff" />
            </span>
            <div>
              <div style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>Storm just came through?</div>
              <div style={{ fontSize: 14 }}>We prioritize storm cleanup requests across Tampa Bay.</div>
            </div>
          </div>
          <Button variant="accent" size="lg" href="tel:8135550184" iconLeft={<Icon name="Phone" size={18} />}>(813) 555-0184</Button>
        </div>
      </div>
      <div className="tp-footer__grid tp-container" style={{ padding: '56px 24px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40 }}>
        <div className="tp-footer__brand-col">
          <Logo size={34} tone="dark" />
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: '16px 0 18px', maxWidth: 300 }}>Locally owned landscapers serving Tampa Bay and 30 miles out. Upfront pricing, real crews, and yards we stand behind.</p>
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
          <span style={{ fontFamily: 'var(--font-mono)' }}>&copy; 2026 LandcarePlus &middot; Lic. #LC-48217 &middot; Licensed &amp; Insured &middot; Tampa, FL</span>
        </div>
      </div>
    </footer>
  );
}
