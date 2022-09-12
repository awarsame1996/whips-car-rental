import React from 'react';

export const VehicleCard = (props) => {
	const { car } = props;

	const redirectToWhateverCarPage = () => {
		// take you to the  specific car page
		console.log('something');
	};

	return (
		<div className='card m-5 vehicle-card'>
			<img
				src='https://mdbcdn.b-cdn.net/img/new/slides/017.webp'
				class='card-img'
				alt='Stony Beach'
			/>
			<div class='card-img-overlay'>
				<h5 class='card-title text-white'>
					{car.make}, {car.model}
				</h5>
				<p className='card-text text-white'>
					{car.seats} | {car.doors} | {car.transmission}
				</p>
			</div>
			<div className='mt-2 justify-content-center '>
				<h5 className='card-title'>PRICE</h5>
				<p className='card-text'>{car.price}</p>
			</div>

			<a className='btn btn-primary' onClick={redirectToWhateverCarPage}>
				Button
			</a>
		</div>
	);
};
