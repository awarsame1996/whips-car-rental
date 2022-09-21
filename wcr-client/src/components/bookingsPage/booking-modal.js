import React from 'react';
import './index.css';

export const BookingModal = ({ id }) => {
	return (
		// <div>
		// 	<button
		// 		type='button'
		// 		className='btn btn-dark btn-lg mt-2'
		// 		data-mdb-toggle='modal'
		// 		data-mdb-target={`#${id}`}
		// 	>
		// 		View Booking
		// 	</button>
		// 	<div
		// 		className='modal top fade'
		// 		id={id}
		// 		tabindex='-1'
		// 		aria-labelledby='exampleModalLabel'
		// 		aria-hidden='true'
		// 		data-mdb-backdrop='true'
		// 		data-mdb-keyboard='true'
		// 	>
		// 		<div className='row justify-content-center modal-dialog modal-lg  modal-dialog-centered '>
		// 			<table
		// 				style={{
		// 					minHeight: '20vh',
		// 					width: '55vw',
		// 					borderWidth: '3px',
		// 					borderStyle: 'solid',

		// 					borderRadius: '12px',
		// 				}}
		// 				className='table  align-middle mb-0 bg-white mt-5 '
		// 			>
		// 				<thead className='bg-light'>
		// 					<tr>
		// 						<th>
		// 							<h5>Car Description</h5>
		// 						</th>
		// 						<th>
		// 							<h5>Start Date</h5>
		// 						</th>
		// 						<th>
		// 							{' '}
		// 							<h5>End Date</h5>
		// 						</th>
		// 						<th>
		// 							{' '}
		// 							<h5>Status</h5>
		// 						</th>
		// 						<th>
		// 							{' '}
		// 							<h5>Cost</h5>
		// 						</th>
		// 					</tr>
		// 				</thead>
		// 				<tbody>
		// 					<tr>
		// 						<div className='single-bk-image column align-items-center'>
		// 							<div className='align-items-center'>
		// 								<p className='fw-bold mb-1'></p>{' '}
		// 							</div>
		// 							<img
		// 								style={{
		// 									width: '16rem',
		// 									height: '8rem',
		// 								}}
		// 								src=''
		// 								alt=''
		// 								className='rounded-pill mb-2 '
		// 							/>

		// 							<div className='mt-2'>
		// 								{' '}
		// 								<div className='car-description'>
		// 									<div className='car-description-content'>
		// 										{' '}
		// 										<div className='description-spacing'>
		// 											<i className='fa-solid fa-user-group'></i>{' '}
		// 										</div>
		// 										<div className='description-spacing'>5 </div>
		// 										<div className='description-spacing'>
		// 											<i className='fa-solid fa-door-open'></i>
		// 										</div>
		// 										<div className='description-spacing'>5 </div>
		// 										<div className='description-spacing'>
		// 											<i className='fa-solid fa-gears'></i>
		// 										</div>
		// 										<div className='description-spacing'>Manual</div>
		// 										<div className='description-spacing'>
		// 											{' '}
		// 											<i className='fa-solid fa-suitcase'></i>
		// 										</div>
		// 										<div className='description-spacing'>
		// 											{' '}
		// 											Suitcase
		// 										</div>
		// 									</div>
		// 									<div className='car-description-content mt-2'>
		// 										{' '}
		// 										<div className='description-spacing'>
		// 											{' '}
		// 											<i className='fa-solid fa-fan'></i>
		// 										</div>
		// 										<div className='description-spacing'>AC</div>
		// 										<div className='description-spacing'>
		// 											{' '}
		// 											<i className='fa-solid fa-id-card'></i>
		// 										</div>
		// 										<div className='description-spacing'>21 Years</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>

		// 						<td>
		// 							<button
		// 								type='button'
		// 								className='btn btn-dark btn-lg btn-rounded'
		// 							>
		// 								16/09/2022
		// 							</button>
		// 						</td>
		// 						<td>
		// 							<button
		// 								type='button'
		// 								className='btn btn-dark btn-lg btn-rounded'
		// 							>
		// 								21/09/2022
		// 							</button>
		// 						</td>
		// 						<td>
		// 							<button
		// 								type='button'
		// 								className=' btn-success   btn-rounded'
		// 							>
		// 								completed
		// 							</button>
		// 						</td>
		// 						<td>
		// 							<h4>
		// 								<bold>£150</bold>
		// 							</h4>
		// 						</td>
		// 					</tr>
		// 					<tr> </tr>
		// 				</tbody>
		// 			</table>
		// 		</div>
		// 	</div>
		// </div>
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
				class='modal top fade'
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
									backgroundImage: `url( https://images.unsplash.com/photo-1621349337628-d4f1c1a24114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaSUyMHE1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`,
									width: '29rem',
								}}
							>
								<div className=' centered mb-2 mt-2 text-muted small'>
									<h6 className='col-md-12 font-color mt-1 mb-2'>
										Kia Ceed, citroen c3 aircross, Skoda Fabia or similar |
										Saloon
									</h6>

									<div className='car-features'>
										<div className='font-color'>
											<i className='fa-solid fa-user-group'></i>{' '}
										</div>
										<div className='font-color'>5 Seats</div>
										<div className='font-color'>
											<i className='fa-solid fa-door-open'></i>
										</div>
										<div className='font-color'>5 Doors</div>
										<div className='font-color'>
											<i className='fa-solid fa-gears'></i>
										</div>

										<div className='font-color'>Manual</div>
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
								<div class='row justify-content-center text-center'>
									<div class='col-md-8 '>
										<div class='form-outline'>
											<h3>Start Date:</h3>

											<h3 className='text-muted'>19/09/2022</h3>
										</div>
										<hr />
									</div>
									<div class='col-md-8 '>
										<div class='form-outline '>
											<h3>End Date:</h3>
											<h3 className='text-muted'>26/09/2022</h3>
										</div>
										<hr />
									</div>
									<div className='mt-3'>
										<h3>Total Cost: £230</h3>
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
