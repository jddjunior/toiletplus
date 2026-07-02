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
        background: 'var(--color-primary)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px 8px 0 0',
        padding: '12px 20px',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <Icon name="CalendarCheck" size={15} />
        Get a free quote
      </span>
    </button>
  );
}
