<div class='row'>
	<div class='col-md-8bg-image card shadow-1-strong'>
		<div class='card-body text-white'>
			<h5 class='card-title'>
				Kia Ceed, citroen c3 aircross, Skoda Fabia or similar | Saloon
			</h5>
		</div>
	</div>
	<div class='col-md-4'>
		<div className=' border-sm-start-none border-start'>
			<div className='payment-options'>
				<h5 className='mt-1 mb-2 '>Your Payment Options</h5>
				<div className=' '>
					<input
						className='form-check-input mr-5'
						type='radio'
						name='flexRadioDefault'
					></input>
					<label className='duration-checklist'>Daily</label>
					<p className='text-muted small'>choose to book daily</p>
				</div>
				<div className='check-form border-sm-start-none border-bottom'>
					<input
						className='form-check-input'
						type='radio'
						name='flexRadioDefault'
						checked
					></input>
					<label className='duration-checklist '>Weekly</label>
					<p className='text-muted small mb-3'>choose to book weekly</p>
				</div>
				<div className='border-sm-start-none border-bottom mt-3'>
					<div className='form-floating mb-3'>
						<input
							type='date'
							className='form-control'
							id='startDate'
							min='{{currentDate}}'
						/>
						<label for='startDate'>Booking start date</label>
					</div>
				</div>
				<div className='d-flex flex-row align-items-center mt-3'>
					<div className=' ml-3'> Total price:</div>
					<h5 className='mb-1 me-1 m-2'>£120.00</h5>
				</div>

				<div className='d-flex flex-column mt-3'>
					<button className='btn btn-primary btn-sm ' type='button'>
						Book
					</button>
				</div>
			</div>
		</div>
	</div>
</div>;
