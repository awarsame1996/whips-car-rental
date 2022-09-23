import React, { useState } from 'react';
import { v4 } from 'uuid';

import './style.css';
import { VehicleCard } from '../../components/vehiclesPage/vehiclesCards';
import { VehicleHero } from '../../components/vehiclesPage/hero';
import { useQuery } from '@apollo/client';
import { ALL_CARS } from '../../graphql/queries';

export const VehiclesPage = () => {
	const { loading, error, data } = useQuery(ALL_CARS);
	const [filteredList, setFilteredList] = useState([]);

	let carList = filteredList.length > 0 ? filteredList : data?.cars || [];

	const handleFilter = (e) => {
		// setSelectedFilter(e.target.id);
		filterByMake(e.target.id);
	};
	const filterByMake = (filteredInput) => {
		// Avoid filter for empty string
		let filteredCars = [];
		if (filteredInput) {
			filteredCars = data.cars.filter(
				(car) => car.make === `${filteredInput}`
			);
			setFilteredList(filteredCars);
		}
	};

	const handleSorter = (e) => {
		sortByPrice(e.target.id);
	};
	const sortByPrice = (filteredInput) => {
		if (filteredInput === 'low') {
			let sortedList = [...carList].sort(
				(a, b) => a.dailyPrice - b.dailyPrice
			);
			setFilteredList(sortedList);
		}

		if (filteredInput === 'high') {
			let sortedList = [...carList].sort(
				(a, b) => b.dailyPrice - a.dailyPrice
			);

			setFilteredList(sortedList);
		}
	};
	if (loading) return 'Loading...';

	if (error) return `Error! ${error.message}`;

	return (
		<div>
			<VehicleHero />
			<div className='options-nav mb-5 '>
				<div className='btn-group '>
					<button
						type='button'
						className='btn  btn-dark  dropdown-toggle'
						data-mdb-toggle='dropdown'
						aria-expanded='false'
					>
						make
					</button>
					<ul className='dropdown-menu dropdown-menu-end'>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleFilter}
								id='dsd'
							>
								All
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								onClick={handleFilter}
								type='button'
								id='Audi'
							>
								Audi
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleFilter}
								id='BMW'
							>
								BMW
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleFilter}
								id='Mercedes-Benz'
							>
								Mercedes
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleFilter}
								id='Ford'
							>
								Ford
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleFilter}
								id='Mini'
							>
								Mini
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleFilter}
								id='Renault'
							>
								Renault
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleFilter}
								id='volkswagen'
							>
								Volkswagen
							</button>
						</li>
					</ul>
				</div>

				<div className='btn-group'>
					<button
						type='button'
						className='btn  btn-dark dropdown-toggle'
						data-mdb-toggle='dropdown'
						aria-expanded='false'
					>
						Price High to Low
					</button>
					<ul className='dropdown-menu dropdown-menu-end'>
						<li>
							<button
								className='dropdown-item'
								type='button'
								onClick={handleSorter}
							>
								recommended
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								id='low'
								onClick={handleSorter}
							>
								low to high
							</button>
						</li>
						<li>
							<button
								className='dropdown-item'
								type='button'
								id='high'
								onClick={handleSorter}
							>
								high to low
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className='container'>
				<div className='row gx-2 justify-content-start'>
					{carList.map((car) => {
						return (
							<VehicleCard car={car} key={v4()}>
								{' '}
							</VehicleCard>
						);
					})}
				</div>
			</div>
		</div>
	);

	// graph ql query to get car data
};
