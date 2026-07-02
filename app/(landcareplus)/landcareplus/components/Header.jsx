'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '../../../../components/buttons/Button';
import { Icon } from './kit';
import { useBooking } from './BookingProvider';

const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/#why' },
  { label: 'Reviews', href: '/#reviews' },
];

export function Header() {
  const openBooking = useBooking();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-soft)' }}>
      <div style={{ background: 'var(--blue-900)', color: '#fff' }}>
        <div className="tp-container" style={{ padding: '7px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, gap: 12, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-on-dark-muted)' }}>
            <Icon name="ShieldCheck" size={15} color="#7FE3B0" />
            Licensed &amp; insured &middot; Lic. #LC-48217 &middot; Serving Tampa Bay
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
            <a href="tel:8135550184" style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <Icon name="Phone" size={14} color="var(--color-accent)" />
              <span style={{ fontFamily: 'var(--font-mono)' }}>(813) 555-0184</span>
            </a>
          </span>
        </div>
      </div>
      <div className="tp-container" style={{ position: 'relative', padding: '0 24px', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo size={36} href="/" />
        <nav aria-label="Primary" className={`tp-header__nav${navOpen ? ' tp-header__nav--open' : ''}`} style={{ display: 'flex', gap: 28 }}>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setNavOpen(false)} style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-body)', textDecoration: 'none' }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button variant="accent" size="sm" iconLeft={<Icon name="CalendarCheck" size={16} />} onClick={openBooking}>
            <span className="tp-header__book-label">Get a Quote</span>
          </Button>
          <button
            className="tp-hamburger"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <Icon name={navOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
