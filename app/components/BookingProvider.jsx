'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import { BookingModal } from './BookingModal';

const BookingContext = createContext(() => {});

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  return (
    <BookingContext.Provider value={openBooking}>
      {children}
      {open && <BookingModal onClose={closeBooking} />}
    </BookingContext.Provider>
  );
}
