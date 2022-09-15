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
		<div class='col-lg-3 col-md-6 mt-4'>
			<div
				className='card vehicles-card text-center border border-primary shadow-0 '
				// style={{background-color:#fafafa}}
			>
				<div class=' card-header'>
					<h5 class='card-title '>
						{car.make}, {car.model}
					</h5>
				</div>

				<div
					class='bg-image card shadow-1-strong car-img'
					style={{
						backgroundImage: `url(${car.imageUrl})`,
					}}
				>
					<div class='card-body text-white'>
						<p class='card-text'>
							{car.specifications.seats} seats | {car.specifications.doors}{' '}
							doors
						</p>
					</div>
				</div>
				<div className='pricing mt-2 align-items-center'>
					<h5 className=''>Price: £{car.price}</h5>
					<h7 className='text-muted mb-1'>Incl. 450 miles</h7>
				</div>

				<div className='card-info mb-1 mt-2 '>
					<h7 className='text-muted'>Deposit: £500</h7>
					<h7 className='text-muted'>Insurance: Comprehensive</h7>
					<h7 className='text-muted'>Incl. 450 miles</h7>
				</div>

				{/* <button type="button" className="btn mb-2  btn-primary btn-lg">
          View
        </button> */}

				<TestModal car={car} id={carID}></TestModal>
			</div>
		</div>
	);
};
