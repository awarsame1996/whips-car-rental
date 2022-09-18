import React from 'react';

import { AllBookings } from '../../components/bookingsPage/allBookings';
import { BookingBanner } from '../../components/bookingsPage/bookingBanner';
import { Footerr } from '../../components/bookingsPage/footer';
import { BookingModal } from '../../components/bookingsPage/booking-modal';
import './index.css';

export const BookingPage = () => {
  return (
    <div>
      <BookingModal></BookingModal>

      <AllBookings></AllBookings>
      <Footerr></Footerr>
    </div>
  );
};
