import React from 'react';
import { fromUnixTime } from 'date-fns';
import './index.css';

import { SINGLE_BOOKING } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

export const BookingModal = ({ bookingID, id }) => {
	const { loading, error, data } = useQuery(SINGLE_BOOKING, {
		variables: { bookingId: `${bookingID}` },
	});

	if (loading) return 'Loading...';

	if (error) return `Error! ${error.message}`;

	if (data) {
		const { totalCost } = data.booking;

		const cost = (Math.round(totalCost * 100) / 100).toFixed(2);
		const start = fromUnixTime(data.booking.startDate / 1000)
			.toString()
			.split('2022')[0];
		const end = fromUnixTime(data.booking.endDate / 1000)
			.toString()
			.split('2022')[0];
		return (
			<div className='d-flex flex-column mt-3'>
				{/* <!-- Button trigger modal --> */}
				<button
					type='button'
					className='btn btn-dark mb-2 btn-lg'
					data-mdb-toggle='modal'
					data-mdb-target={`#${id}`}
				>
					View booking
				</button>

				{/* <!-- Modal --> */}
				<div
					className='modal top fade'
					id={id}
					tabindex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
					data-mdb-backdrop='true'
					data-mdb-keyboard='true'
				>
					<div className='modal-dialog modal-lg  modal-dialog-centered car-modal'>
						<div
							className='modal-content container-fluid'
							id={`carModal`}
							tabIndex='-1'
							aria-hidden='false'
						>
							<div className='row'>
								<div
									className='col-md-8 bg-image booking-md-bg card shadow-1-strong mt-2 mb-2 '
									style={{
										backgroundImage: `url(${data.booking.car[0].imageUrl})`,
										width: '29rem',
									}}
								>
									<div className=' centered mb-2 mt-2 text-muted small'>
										<h6 className='col-md-12 font-color mt-1 mb-2'>
											{data.booking.car[0].specifications.similar}
										</h6>

										<div className='car-features'>
											<div className='font-color'>
												<i className='fa-solid fa-user-group'></i>{' '}
											</div>
											<div className='font-color'>
												{data.booking.car[0].specifications.seats} Seats
											</div>
											<div className='font-color'>
												<i className='fa-solid fa-door-open'></i>
											</div>
											<div className='font-color'>
												{data.booking.car[0].specifications.doors} Doors
											</div>
											<div className='font-color'>
												<i className='fa-solid fa-gears'></i>
											</div>

											<div className='font-color'>
												{data.booking.car[0].specifications.transmission}
											</div>
											<div className='font-color'>
												{' '}
												<i className='fa-solid fa-suitcase'></i>
											</div>
											<div className='font-color'> Suitcase</div>
											<div className='font-color'>
												{' '}
												<i className='fa-solid fa-fan'></i>
											</div>
											<div className='font-color'>AC</div>
										</div>
									</div>
								</div>
								<div className='col-md-4 border-sm-start-none border-start'>
									<div className='row justify-content-center text-center'>
										<div className='col-md-8 '>
											<div className='form-outline'>
												<h3>Start Date:</h3>

												<h3 className='text-muted'>{start}</h3>
											</div>
											<hr />
										</div>
										<div className='col-md-8 '>
											<div className='form-outline '>
												<h3>End Date:</h3>
												<h3 className='text-muted'>{end}</h3>
											</div>
											<hr />
										</div>
										<div className='mt-3'>
											<h3>Total Cost: £{cost}</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
