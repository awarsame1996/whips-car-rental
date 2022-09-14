const { gql } = require('apollo-server');

const typeDefs = gql`
	type Specifications {
		seats: Int
		doors: Int
		transmission: String
		suitCases: Int
		ac: Boolean
		satNav: Boolean
		similiar: String
	}
	type User {
		_id: ID!
		firstName: String!
		lastName: String!
		email: String!
		username: String!
	}
	type SignupSuccess {
		success: Boolean!
	}
	type LoginSuccess {
		success: Boolean!
		token: String!
		user: User!
	}
	input LoginInput {
		email: String!
		password: String!
	}
	input SignupInput {
		firstName: String!
		lastName: String!
		email: String!
		password: String!
		username: String!
	}
	input CreateBookingInput {
		startDate: String!
		endDate: String!
		isDaily: Boolean!
		isWeekly: Boolean!
		carId: ID!
	}
	type Booking {
		id: ID!
		startDate: String!
		endDate: String!
		isDaily: Boolean!
		isWeekly: Boolean!
		totalCost: String!
		car: Car
	}
	type Car {
		_id: ID!
		make: String!
		model: String!
		imageUrl: String!
		dailyPrice: String!
		weeklyPrice: String!
		specifications: Specifications
	}
	type Query {
		cars: [Car]
		car(carId: ID!): Car
		bookings: [Booking]
		booking(bookingId: ID!): Booking
	}

	type Mutation {
		login(loginInput: LoginInput!): LoginSuccess
		signup(signupInput: SignupInput!): SignupSuccess
		createBooking(createBookingInput: CreateBookingInput!): Booking
	}
`;

module.exports = typeDefs;
