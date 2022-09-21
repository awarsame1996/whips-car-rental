import React, { useEffect, useState } from 'react';

import './style.css';
import { VehicleCard } from '../../components/vehiclesPage/vehiclesCards';
import { VehicleHero } from '../../components/vehiclesPage/hero';
import { useQuery } from '@apollo/client';
import { ALL_CARS } from '../../graphql/queries';
import { Filter } from '../../components/vehiclesPage/filter';

export const VehiclesPage = () => {

	// Selected Brand name filter
	// List of all cars satisfing all the filters

	const { loading, error, data } = useQuery(ALL_CARS);
	const [filteredList, setFilteredList] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState('');

	if (loading) return 'Loading...';

	if (error) return `Error! ${error.message}`;

	if (data) {
		const carList = data.cars;

		const filterByMake = (filteredData) => {
			// Avoid filter for empty string
			console.log(selectedFilter);
			if (!selectedFilter) {
				const filteredCars = filteredData;
				setFilteredList(filteredCars);
			} else {
				const filteredCars = filteredData.filter(
					(car) => car.make === `${selectedFilter}`
				);
				setFilteredList(filteredCars);
			}
		};
		const handleFilter = (e) => {
			console.log(e.target.id);
			setSelectedFilter(e.target.id);
			filterByMake(carList);
		};

		return (
			<div>
				<VehicleHero />
				<div className='options-nav mb-5 '>
					<div class='btn-group '>
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
									value={selectedFilter}
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
									value={selectedFilter}
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
									value={selectedFilter}
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
									value={selectedFilter}
									onClick={handleFilter}
									id='Citreon'
								>
									Citreon
								</button>
							</li>
							<li>
								<button
									className='dropdown-item'
									type='button'
									value={selectedFilter}
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
									value={selectedFilter}
									onClick={handleFilter}
									id='renault'
								>
									Renault
								</button>
							</li>
							<li>
								<button
									className='dropdown-item'
									type='button'
									value={selectedFilter}
									onClick={handleFilter}
									id='volskwagen'
								>
									Volkswagen
								</button>
							</li>
						</ul>
					</div>
					<div class='btn-group'>
						<button
							type='button'
							className='btn  btn-dark dropdown-toggle'
							data-mdb-toggle='dropdown'
							aria-expanded='false'
						>
							Any Model
						</button>
						<ul className='dropdown-menu dropdown-menu-end'>
							<li>
								<button
									className='dropdown-item'
									type='button'
									value={selectedFilter}
									onClick={handleFilter}
								>
									Action
								</button>
							</li>
							<li>
								<button
									className='dropdown-item'
									type='button'
									value={selectedFilter}
									onClick={handleFilter}
								>
									Another action
								</button>
							</li>
							<li>
								<button
									className='dropdown-item'
									type='button'
									value={selectedFilter}
									onClick={handleFilter}
								>
									Something else here
								</button>
							</li>
						</ul>
					</div>
					<div class='btn-group'>
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
									value={selectedFilter}
									onClick={handleFilter}
								>
									recommended
								</button>
							</li>
							<li>
								<button
									className='dropdown-item'
									type='button'
									value={selectedFilter}
									onClick={handleFilter}
								>
									low to high
								</button>
							</li>
							<li>
								<button
									className='dropdown-item'
									type='button'
									value={selectedFilter}
									onClick={handleFilter}
								>
									high to low
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className='container'>
					<div class='row gx-2 justify-content-start'>
						{filteredList.map((car) => {
							return <VehicleCard car={car}> </VehicleCard>;
						})}
					</div>
				</div>
			</div>
		);
	}
	// graph ql query to get car data

};
