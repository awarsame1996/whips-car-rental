import React from 'react';

import './style.css';

export const VehicleHero = () => {
	return (
		<div className='p-5 text-center bg-image rounded-3 vehicle-image mb-4 w-100'>
			<div className='mask mask-style'>
				<div className='d-flex justify-content-center align-items-center h-100 w-100'>
					<div className='text-white'>
						<h1 className='mb-3'>Vehicles Available</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
