'use client';

import React from 'react';
import { Icon } from './kit';
import { useBooking } from './BookingProvider';

export function DesktopQuoteTab() {
  const openBooking = useBooking();
  return (
    <button
      className="tp-desktop-quote-tab"
      onClick={openBooking}
      style={{
        display: 'none',
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg) translateX(50%)',
        transformOrigin: 'right center',
        zIndex: 55,
        background: 'var(--color-accent)',
        color: '#fff',
        border: '2px solid rgba(255,255,255,0.35)',
        borderBottom: 'none',
        borderRadius: '10px 10px 0 0',
        padding: '16px 28px',
        fontFamily: 'var(--font-mono)',
        fontSize: 14.5,
        fontWeight: 800,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow: '0 -2px 20px rgba(0,0,0,0.25)',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <Icon name="CalendarCheck" size={18} />
        Get a free quote
      </span>
    </button>
  );
}
