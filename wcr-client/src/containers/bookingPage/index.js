import React from 'react';

import { AllBookings } from '../../components/bookingsPage/allBookings';
import { BookingBanner } from '../../components/bookingsPage/bookingBanner';
import { Footerr } from '../../components/bookingsPage/footer';
import { BookingModal } from '../../components/bookingsPage/booking-modal';

import { SINGLE_USER } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

import './index.css';

export const BookingPage = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	// use
	const { loading, error, data } = useQuery(SINGLE_USER, {
		variables: { userId: `${user.id}` },
	});

	if (loading) return 'Loading...';

	if (error) return `Error! ${error.message}`;

	if (data) {
		console.log(data);
	}

	return (
		<div>
			<BookingModal></BookingModal>

			<AllBookings></AllBookings>
			<Footerr></Footerr>
		</div>
	);
};
