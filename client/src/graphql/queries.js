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
				similar
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
				similar
			}
		}
	}
`;

export const SINGLE_USER = gql`
	query User($userId: ID!) {
		user(userId: $userId) {
			id
			firstName
			lastName
			email
			username
			bookings {
				_id
				startDate
				endDate
				isDaily
				isWeekly
				totalCost
				car {
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
						similar
					}
				}
			}
		}
	}
`;

export const SINGLE_BOOKING = gql`
	query Query($bookingId: ID!) {
		booking(bookingId: $bookingId) {
			_id
			startDate
			endDate
			isDaily
			isWeekly
			totalCost
			car {
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
					similar
				}
			}
		}
	}
`;
