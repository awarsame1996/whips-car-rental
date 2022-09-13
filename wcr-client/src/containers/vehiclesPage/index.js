import React from 'react';

import './style.css';
import { VehicleCard } from '../../components/vehiclesPage/vehiclesCards';
import { VehicleHero } from '../../components/vehiclesPage/hero';

import { Sorter } from '../../components/vehiclesPage/sorting';
import { useQuery } from '@apollo/client';
import { ALL_CARS } from '../../graphql/queries';

export const VehiclesPage = async () => {
	// use
	const Cars = () => {
		const { loading, error, data } = useQuery(ALL_CARS);

		if (loading) return 'Loading...';

		if (error) return `Error! ${error.message}`;
	};

	const myArr = [
		{
			make: 'Ford',
			model: 'Focus',
			seats: 4,
			doors: 3,
			transmission: 'automatic',
			price: 7000,
		},
		{
			make: 'Lexus',
			model: 'IS300',
			seats: 5,
			doors: 5,
			transmission: 'automatic',
			price: 12000,
		},
		{
			make: 'Ford',
			model: 'Focus',
			seats: 4,
			doors: 3,
			transmission: 'automatic',
			price: 7000,
		},
	];
	// graph ql query to get car data

	return (
		<div>
			{/* component one */}
			<VehicleHero></VehicleHero>
			<Sorter></Sorter>
			<div className='vh-60 mt-1 d-flex justify-content-center flex-row flex-wrap'>
				{myArr.map((car) => {
					return <VehicleCard car={car}> </VehicleCard>;
				})}
			</div>
			<div className='vh-40 border border-danger mt-1'></div>
			<div className='vh-40 border border-danger mt-1'></div>
		</div>
	);
};
