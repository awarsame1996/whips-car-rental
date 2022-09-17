import React from 'react';
import './index.css';
export const AllBookings = () => {
	return (
		<div
			style={{
				backgroundColor: '#eee',
				minHeight: '90vh',
				width: '80vw',
				borderWidth: '1px',
				borderStyle: 'solid',

				borderRadius: '12px',
			}}
			className=' container py-5 mt-4 '
		>
			<div className='d-flex justify-content-center mb-5'>
				<h1>All Bookings</h1>
			</div>
			<div className='row justify-content-center mb-4 '>
				<div className='col-md-12 col-xl-10'>
					<div className='card shadow-0 border rounded-3'>
						<div className='card-body booking-body'>
							<div className='row justify-content-center '>
								<div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
									<div className='bg-image card hover-zoom ripple rounded ripple-surface'>
										<img
											src='https://images.unsplash.com/photo-1602830364184-bcb58aa7d374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGtpYSUyMGNlZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
											className='booking-image'
										/>
										<a href='#!'>
											<div className='hover-overlay'>
												<div className='mask booking-card'></div>
											</div>
										</a>
									</div>
								</div>
								<div className='col-md-6 col-lg-6 col-xl-6 '>
									<div className='d-flex flex-row justify-content-center '>
										<div className='booking-info '>
											<div className='d-flex flex-row justify-content-center align-items-center mb-4   '>
												<h4>Audi A5</h4>
											</div>
											<div className='d-flex flex-column justify-content-center align-items-center  border-sm-start-none border-bottom'>
												<h6> Booking Start Date: 16/09/2022 </h6>
												<h6 className='mt-1  '>
													Booking End Date: 21/09/2022
												</h6>
											</div>
											<h5 className='mt-3 text-muted'>
												Total Cost : £650
											</h5>
										</div>
									</div>
								</div>
								<div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
									<div className='d-flex flex-column mt-3'>
										<button
											className='btn btn-dark btn-lg mt-2'
											type='button'
										>
											VIEW BOOKING
										</button>
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
			<div className='row justify-content-center mb-4 '>
				<div className='col-md-12 col-xl-10'>
					<div className='card shadow-0 border rounded-3'>
						<div className='card-body booking-body'>
							<div className='row justify-content-center '>
								<div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
									<div className='bg-image card hover-zoom ripple rounded ripple-surface'>
										<img
											src='https://images.unsplash.com/photo-1602830364184-bcb58aa7d374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGtpYSUyMGNlZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
											className='booking-image'
										/>
										<a href='#!'>
											<div className='hover-overlay'>
												<div className='mask booking-card'></div>
											</div>
										</a>
									</div>
								</div>
								<div className='col-md-6 col-lg-6 col-xl-6 '>
									<div className='d-flex flex-row justify-content-center '>
										<div className='booking-info '>
											<div className='d-flex flex-row justify-content-center align-items-center mb-4   '>
												<h4>Audi A5</h4>
											</div>
											<div className='d-flex flex-column justify-content-center align-items-center  border-sm-start-none border-bottom'>
												<h6> Booking Start Date: 16/09/2022 </h6>
												<h6 className='mt-1  '>
													Booking End Date: 21/09/2022
												</h6>
											</div>
											<h5 className='mt-3 text-muted'>
												Total Cost : £650
											</h5>
										</div>
									</div>
								</div>
								<div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
									<div className='d-flex flex-column mt-3'>
										<button
											className='btn btn-dark btn-lg mt-2'
											type='button'
										>
											VIEW BOOKING
										</button>
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
			<div className='row justify-content-center mb-4 '>
				<div className='col-md-12 col-xl-10'>
					<div className='card shadow-0 border rounded-3'>
						<div className='card-body booking-body'>
							<div className='row justify-content-center '>
								<div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
									<div className='bg-image card hover-zoom ripple rounded ripple-surface'>
										<img
											src='https://images.unsplash.com/photo-1602830364184-bcb58aa7d374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGtpYSUyMGNlZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
											className='booking-image'
										/>
										<a href='#!'>
											<div className='hover-overlay'>
												<div className='mask booking-card'></div>
											</div>
										</a>
									</div>
								</div>
								<div className='col-md-6 col-lg-6 col-xl-6 '>
									<div className='d-flex flex-row justify-content-center '>
										<div className='booking-info '>
											<div className='d-flex flex-row justify-content-center align-items-center mb-4   '>
												<h4>Audi A5</h4>
											</div>
											<div className='d-flex flex-column justify-content-center align-items-center  border-sm-start-none border-bottom'>
												<h6> Booking Start Date: 16/09/2022 </h6>
												<h6 className='mt-1  '>
													Booking End Date: 21/09/2022
												</h6>
											</div>
											<h5 className='mt-3 text-muted'>
												Total Cost : £650
											</h5>
										</div>
									</div>
								</div>
								<div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
									<div className='d-flex flex-column mt-3'>
										<button
											className='btn btn-dark btn-lg mt-2'
											type='button'
										>
											VIEW BOOKING
										</button>
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
			<div className='row justify-content-center mb-4 '>
				<div className='col-md-12 col-xl-10'>
					<div className='card shadow-0 border rounded-3'>
						<div className='card-body booking-body'>
							<div className='row justify-content-center '>
								<div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
									<div className='bg-image card hover-zoom ripple rounded ripple-surface'>
										<img
											src='https://images.unsplash.com/photo-1602830364184-bcb58aa7d374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGtpYSUyMGNlZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
											className='booking-image'
										/>
										<a href='#!'>
											<div className='hover-overlay'>
												<div className='mask booking-card'></div>
											</div>
										</a>
									</div>
								</div>
								<div className='col-md-6 col-lg-6 col-xl-6 '>
									<div className='d-flex flex-row justify-content-center '>
										<div className='booking-info '>
											<div className='d-flex flex-row justify-content-center align-items-center mb-4   '>
												<h4>Audi A5</h4>
											</div>
											<div className='d-flex flex-column justify-content-center align-items-center  border-sm-start-none border-bottom'>
												<h6> Booking Start Date: 16/09/2022 </h6>
												<h6 className='mt-1  '>
													Booking End Date: 21/09/2022
												</h6>
											</div>
											<h5 className='mt-3 text-muted'>
												Total Cost : £650
											</h5>
										</div>
									</div>
								</div>
								<div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
									<div className='d-flex flex-column mt-3'>
										<button
											className='btn btn-dark btn-lg mt-2'
											type='button'
										>
											VIEW BOOKING
										</button>
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
		</div>
	);
};
