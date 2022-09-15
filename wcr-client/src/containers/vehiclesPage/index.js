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
        <VehicleHero></VehicleHero>
        <Sorter></Sorter>

        <div className="container">
          <div class="row gx-2 justify-content-start">
            {data.cars.map((car) => {
              return <VehicleCard car={car}> </VehicleCard>;
            })}
          </div>
        </div>
        <div className="vh-40 border border-danger mt-1"></div>
        <div className="vh-40 border border-danger mt-1"></div>
      </div>
    );
  }
  // graph ql query to get car data
};
