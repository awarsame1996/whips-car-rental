import React from 'react';

import './style.css';
import { VehicleCard } from '../../components/vehiclesPage/vehiclesCards';
import { VehicleHero } from '../../components/vehiclesPage/hero';

import { Sorter } from '../../components/vehiclesPage/sorting';
import { useQuery } from '@apollo/client';
import { ALL_CARS } from '../../graphql/queries';

export const VehiclesPage = () => {
	// use
	const { loading, error, data } = useQuery(ALL_CARS);

	if (loading) return 'Loading...';

	if (error) return `Error! ${error.message}`;

	if (data) {
		console.log(data);

		return (
			<div>
				{/* component one */}
				<VehicleHero></VehicleHero>
				<Sorter></Sorter>
				<div className='vh-60 mt-1 d-flex justify-content-center flex-row flex-wrap'>
					{data.cars.map((car) => {
						return <VehicleCard car={car}> </VehicleCard>;
					})}
				</div>
				<div className='vh-40 border border-danger mt-1'></div>
				<div className='vh-40 border border-danger mt-1'></div>
			</div>
		);
	}
	// graph ql query to get car data
};
