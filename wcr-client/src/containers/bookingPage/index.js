import React from 'react';

import { AllBookings } from '../../components/bookingsPage/allBookings';
import { BookingBanner } from '../../components/bookingsPage/bookingBanner';
import { Footerr } from '../../components/bookingsPage/footer';

export const BookingPage = () => {
  return (
    <div>
      <BookingBanner></BookingBanner>
      <AllBookings></AllBookings>
      <Footerr></Footerr>
    </div>
  );
};
