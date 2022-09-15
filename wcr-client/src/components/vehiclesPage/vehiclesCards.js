import React from 'react';
import { CarModal } from '../carModal';
import { TestModal } from '../test-modal';

export const VehicleCard = (props) => {
	const { car } = props;

	const redirectToWhateverCarPage = () => {
		// take you to the  specific car page
		console.log('something');
	};

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

	return (
		<div className='card  m-5 vehicle-card'>
			{/* not mispell */}
			<div className='card-headr align-items-center'>
				{' '}
				<h5 class=''>
					{car.make}, {car.model}
				</h5>
				<p className='card-text'>
					{car.specifications.seats} seats | {car.specifications.doors}{' '}
					doors | {car.specifications.transmission}
				</p>
			</div>
			<img src={car.imageUrl} class='card-img mt-3' alt='Stony Beach' />

			<div className='mt-3 mb-2 card-descrption  align-items-center '>
				<div className='pricing align-items-center'>
					<h5 className='card-title'>Price: £{car.price}</h5>
					<h5>
						Discounted price: <s>£1600.00</s>
					</h5>
				</div>
				<h7 className='mt-4'>Brand:</h7>
				<h7 className='mt-2'>Deposit: £500</h7>
				<h7 className='mt-2'>Insurance: Comperhensive</h7>
				<h7 className='mt-2'>Incl. 450 miles</h7>
			</div>

			{/* <a
				className='btn Vehicle-card-btn m-1'
				onClick={redirectToWhateverCarPage}
			>
				Button
			</a> */}
			{/* <CarModal car={car} id={carID}></CarModal> */}
			<TestModal id={carID} car={car}></TestModal>
		</div>
	);
};
