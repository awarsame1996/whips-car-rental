const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Specifications {
		seats: Int
		doors: Int
		transmission: String
		suitCases: Int
		ac: Boolean
		satNav: Boolean
		similar: String
	}
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		username: String!
		bookings: [Booking]
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
	input UserUpdate {
		firstName: String
		lastName: String
		email: String
		username: String
	}
	input CreateBookingInput {
		startDate: String!
		endDate: String!
		isDaily: Boolean!
		isWeekly: Boolean!
		carId: ID!
	}
	type Booking {
		_id: ID!
		startDate: String!
		endDate: String!
		isDaily: Boolean!
		isWeekly: Boolean!
		totalCost: String!
		car: [Car]
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
		user(userId: ID!): User
		booking(bookingId: ID!): Booking
	}

	type Mutation {
		login(loginInput: LoginInput!): LoginSuccess
		signup(signupInput: SignupInput!): SignupSuccess
		createBooking(createBookingInput: CreateBookingInput!): Booking
		updateUser(userInput: UserUpdate!, userId: ID): User
		deleteUser(userId: ID): User
	}
`;

module.exports = typeDefs;
