import { gql } from '@apollo/client';

export const ALL_CARS = gql`
	query Query {
		cars {
			_id
			model
			imageUrl
			dailyPrice
			weeklyPrice
			make
			specifications {
				seats
				doors
				transmission
				suitCases
				ac
				satNav
				similiar
			}
		}
	}
`;

export const SINGLE_CAR = gql`
	query Query($carId: ID!) {
		car(carId: $carId) {
			_id
			make
			model
			imageUrl
			dailyPrice
			weeklyPrice
			specifications {
				seats
				doors
				transmission
				suitCases
				ac
				satNav
				similiar
			}
		}
	}
`;
