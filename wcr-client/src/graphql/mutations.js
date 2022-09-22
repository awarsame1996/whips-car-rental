import { gql } from '@apollo/client';

export const SIGNUP = gql`
	mutation Mutation($signupInput: SignupInput!) {
		signup(signupInput: $signupInput) {
			success
		}
	}
`;

export const LOGIN = gql`
	mutation Mutation($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			success
			token
			user {
				id
				firstName
				lastName
				email
				username
			}
		}
	}
`;

export const BOOKING = gql`
	mutation CreateBooking($createBookingInput: CreateBookingInput!) {
		createBooking(createBookingInput: $createBookingInput) {
			_id
			startDate
			endDate
			isDaily
			isWeekly
			totalCost
			car {
				_id
			}
		}
	}
`;

export const DELETEUSER = gql`
	mutation Mutation($userId: ID) {
		deleteUser(userId: $userId) {
			id
			firstName
			lastName
			email
			username
		}
	}
`;
