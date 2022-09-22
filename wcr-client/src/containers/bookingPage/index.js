import React from 'react';

import { AllBookings } from '../../components/bookingsPage/allBookings';
import { SINGLE_USER } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

import './index.css';

import { motion } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';

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
		AOS.init();

		return (
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: '100%' }}
				exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
			>
				<div
					className=' container py-3 mt-4 mb-4 '
					style={{
						backgroundColor: '#eee',
						minHeight: '90vh',
						width: '90vw',
						borderWidth: '1px',
						borderStyle: 'solid',

						borderRadius: '12px',
					}}
				>
					<div className='row'>
						<div className='col'>
							<nav
								aria-label='breadcrumb'
								className='bg-light rounded-3 p-3 '
							>
								<ol className='breadcrumb mb-0'>
									<li className='breadcrumb-item'>
										<a href='/'>Home</a>
									</li>
									<li className='breadcrumb-item'>
										<a href='/accounts'>My Profile</a>
									</li>
									<li className='breadcrumb-item'>
										<a href='/bookings'>My Bookings</a>
									</li>
								</ol>
							</nav>
						</div>
					</div>
					<div className='d-flex justify-content-center mt-4 mb-5'>
						<h1>All Bookings</h1>
					</div>
					{data.user.bookings.map((booking) => {
						return <AllBookings booking={booking}></AllBookings>;
					})}
				</div>
			</motion.div>
		);
	}
};
