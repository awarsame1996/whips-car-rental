import './index.css';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { BOOKING } from '../../graphql/mutations';
import swal from 'sweetalert';

export const CarModal = ({ car, id }) => {
	const [booking] = useMutation(BOOKING, {
		onCompleted: (data) => {},
		onError: (error) => {
			console.error(error);
		},
	});
	const { _id } = car;

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();

	let checkboxesEmpty = false;

	const onSubmit = async (formData) => {
		const { isDailyCheckBox, isWeeklyCheckBox, startDate, endDate } =
			formData;
		let isDaily = false;
		let isWeekly = false;
		if (isDailyCheckBox) {
			isDaily = true;
		}
		if (isWeeklyCheckBox) {
			isWeekly = true;
		}

		if (!isWeeklyCheckBox && !isDailyCheckBox) {
			checkboxesEmpty = true;
		}

		const createBookingInput = {
			isDaily,
			isWeekly,
			startDate,
			endDate,
			carId: _id,
		};

		try {
			const user = JSON.parse(localStorage.getItem('user'));

			await booking({
				variables: {
					createBookingInput,
				},
				headers: {
					authorization: user ? `Bearer ${user.token}` : '',
				},
			});
			swal('booking Complete');
			window.location.href = '/bookings';
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div>
			<div>
				{/* <!-- Button trigger modal --> */}
				<button
					type='button'
					className='btn btn-dark mb-2'
					data-mdb-toggle='modal'
					data-mdb-target={`#${id}`}
				>
					View more
				</button>

				{/* <!-- Modal --> */}
				<div
					className='modal top fade'
					id={id}
					tabIndex='-1'
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
									className='col-md-8 bg-image card shadow-1-strong'
									style={{
										backgroundImage: `url(${car.imageUrl})`,
									}}
								>
									<div className='centered mb-2 mt-3 text-muted small'>
										<h5 className='col-md-12 font-color mt-1 mb-2'>
											{car.specifications.similar}
										</h5>
									</div>
								</div>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='col-md-4 border-sm-start-none border-start'
								>
									<div className='payment-options'>
										<h5 className='mt-1 mb-2 '>Your Payment Options</h5>
										<div className=' '>
											<input
												className='form-check-input mr-5'
												type='radio'
												name='flexRadioDefault'
												{...register('isDailyCheckBox')}
											></input>
											{errors?.isDailyCheckBox && (
												<p>{errors.isDailyCheckBox.message}</p>
											)}

											<label className='duration-checklist'>Daily</label>
											<p className='text-muted small'>
												choose to book daily
											</p>
										</div>
										<div className='check-form border-sm-start-none border-bottom'>
											<input
												className='form-check-input'
												type='radio'
												name='flexRadioDefault'
												{...register('isWeeklyCheckBox')}
											></input>
											{checkboxesEmpty && <p>Checkboxes are empty</p>}

											<label className='duration-checklist '>Weekly</label>
											<p className='text-muted small mb-3'>
												choose to book weekly
											</p>
										</div>

										<div className='border-sm-start-none border-bottom mt-3'>
											<div className='form-floating mb-3'>
												<input
													type='date'
													className='form-control'
													id='startDate'
													min='{{currentDate}}'
													{...register('startDate', { required: true })}
												/>
												{errors?.startDate && (
													<p>Please input a start date</p>
												)}
												<label htmlFor='startDate'>
													Booking start date
												</label>
											</div>
											<div className='form-floating mb-3'>
												<input
													type='date'
													className='form-control'
													id='endDate'
													min='{{currentDate}}'
													{...register('endDate', { required: true })}
												/>
												{errors.endDate && <p>{errors.endDate.message}</p>}
												<label htmlFor='endDate'>Booking end date</label>
											</div>
										</div>

										<div className='d-flex flex-row align-items-center mt-3'>
											<div className=' ml-3'> Total price:</div>
											<h5 className='mb-1 me-1 m-2'>??120.00</h5>
										</div>

										<div className='d-flex flex-column mt-3'>
											<button
												className='btn btn-primary btn-sm '
												type='submit'
												data-mdb-dismiss='modal'
											>
												Book
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
