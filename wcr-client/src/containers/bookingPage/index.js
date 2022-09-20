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

		return (
			<div>
				<BookingModal></BookingModal>
				<div
					style={{
						backgroundColor: '#eee',
						minHeight: '90vh',
						width: '90vw',
						borderWidth: '1px',
						borderStyle: 'solid',

						borderRadius: '12px',
					}}
					className=' container py-5 mt-4 '
				>
					{' '}
					<div className='d-flex justify-content-center mb-5'>
						<h1>All Bookings</h1>
					</div>
					{data.user.bookings.map((booking) => {
						return <AllBookings booking={booking}></AllBookings>;
					})}
				</div>

				<Footerr></Footerr>
			</div>
		);
	}
};
