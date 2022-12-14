import React from 'react';
import { CarModal } from '../car-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const VehicleCard = (props) => {
	const { car } = props;

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
	AOS.init();
	return (
		<div className='col-lg-3 col-md-6 mt-4 mb-5'>
			<div
				className='card vehicles-card text-center border border-primary shadow-0 '
				// style={{background-color:#fafafa}}
			>
				<div className=' card-header'>
					<h5 className='card-title  '>
						{car.make}, {car.model}
					</h5>
					<h5 className='card-text text-muted'>
						{car.specifications.seats} seats | {car.specifications.doors}{' '}
						doors
					</h5>
				</div>

				<div
					data-aos='zoom-out-down'
					className='bg-image card shadow-1-strong car-img mt-2 m-1'
					style={{
						backgroundImage: `url(${car.imageUrl})`,
					}}
				>
					<div data-aos='fade-down' className='card-body text-white'></div>
				</div>
				<div
					data-aos='zoom-out-down'
					data-aos-delay='300'
					className='pricing mt-2 align-items-center'
				>
					<h5 className='text-muted'>Daily Price: £{car.dailyPrice}</h5>
					<h5 className='text-muted mb-1'>
						Weekly Price: £{car.weeklyPrice}
					</h5>
				</div>

				<div
					data-aos-delay='300'
					className='card-info mb-2 mt-4 border-sm-start-none border-bottom '
				>
					<h6 className='text-muted'>Deposit: £500</h6>
					<h6 className='text-muted'>Insurance: Comprehensive</h6>
					<h6 className='text-muted mb-1'>Incl. 450 miles</h6>
				</div>

				<CarModal car={car} id={carID}></CarModal>
			</div>
		</div>
	);
};
