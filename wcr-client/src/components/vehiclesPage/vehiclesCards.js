import React from 'react';

export const VehicleCard = (props) => {
	const { car } = props;

	const redirectToWhateverCarPage = () => {
		// take you to the  specific car page
		console.log('something');
	};

	return (
		<div className='card w-75 m-3'>
			<div className='card-body'>
				<h5 className='card-title'>
					{car.make}, {car.model}
				</h5>
				<p className='card-text'>
					{car.seats} | {car.doors} | {car.transmission}
				</p>
			</div>
			<img
				src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp'
				className='card-img-top'
				alt='Fissure in Sandstone'
			/>
			<div className='card-body d-flex justify-content-between flex-row'>
				<div>
					<h5 className='card-title'>PRICE</h5>
					<p className='card-text'>{car.price}</p>
				</div>

				<a className='btn btn-primary' onClick={redirectToWhateverCarPage}>
					Button
				</a>
			</div>
		</div>
	);
};
