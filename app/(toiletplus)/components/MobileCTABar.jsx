'use client';

import React from 'react';
import { Button } from '../../../components/buttons/Button';
import { Icon } from './kit';
import { useBooking } from './BookingProvider';

export function MobileCTABar() {
  const openBooking = useBooking();
  return (
    <div
      className="tp-mobile-cta"
      style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: 'var(--blue-900)',
        borderTop: '1px solid var(--border-on-dark)',
        padding: '10px 12px',
        gap: 10,
        boxShadow: '0 -4px 16px rgba(7,30,61,0.25)',
      }}
    >
      <Button variant="accent" size="md" block iconLeft={<Icon name="Phone" size={16} />} href="tel:8135550142">
        Call now
      </Button>
      <Button variant="on-dark" size="md" block iconLeft={<Icon name="CalendarCheck" size={16} />} onClick={openBooking}>
        Book online
      </Button>
    </div>
  );
}
