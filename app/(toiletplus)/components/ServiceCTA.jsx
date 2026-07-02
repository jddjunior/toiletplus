'use client';

import React from 'react';
import { Button } from '../../../components/buttons/Button';
import { Icon } from './kit';
import { useBooking } from './BookingProvider';

export function ServiceCTA({ label = 'Book this service' }) {
  const openBooking = useBooking();
  return (
    <Button variant="primary" size="lg" onClick={openBooking} iconRight={<Icon name="ArrowRight" size={18} />}>
      {label}
    </Button>
  );
}
