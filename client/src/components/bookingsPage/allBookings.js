import React from 'react';
import { fromUnixTime } from 'date-fns';
import './index.css';
import { BookingModal } from './booking-modal';
export const AllBookings = (props) => {
	const { booking } = props;

	const bookingID = booking._id;

	const generateRandomID = () => {
		const characters =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

		let output = '';

		for (let i = 0; i < 8; i++) {
			output += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}

		return output;
	};

	const carID = generateRandomID();
	const start = fromUnixTime(booking.startDate / 1000)
		.toString()
		.split('2022')[0];
	const end = fromUnixTime(booking.endDate / 1000)
		.toString()
		.split('2022')[0];

	return (
		<div className='row justify-content-center mb-5 '>
			<div className='col-md-12 col-xl-10'>
				<div className='card shadow-0 border rounded-3'>
					<div className='card-body booking-body'>
						<div className='row justify-content-center '>
							<div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
								<div className='bg-image card hover-zoom ripple rounded ripple-surface d-flex justify-content-center align-items-center'>
									<img
										src={`${booking.car[0].imageUrl}`}
										className='booking-image'
										alt='car-img'
									/>
									{/* <a href="#!">

                      <div className="hover-overlay">
                        <div className="mask booking-card"></div>
                      </div>
                    </a> */}
								</div>
							</div>
							<div className='col-md-6 col-lg-6 col-xl-6 '>
								<div className='d-flex flex-row justify-content-center '>
									<div className='booking-info '>
										<div className='d-flex flex-row justify-content-center align-items-center mb-4   '>
											<h4>
												{' '}
												{booking.car[0].make}, {booking.car[0].model}
											</h4>
										</div>
										<div className='d-flex flex-column justify-content-center align-items-center  border-sm-start-none border-bottom'>
											<h6> Booking Start Date: {start}</h6>
											<h6 className='mt-1  '>Booking End Date: {end}</h6>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
								<div className='d-flex flex-column mt-3'>
									<BookingModal
										bookingID={bookingID}
										id={carID}
									></BookingModal>

									<button
										className='btn  btn-danger btn-lg mt-4'
										type='button'
									>
										DELETE BOOKING
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
