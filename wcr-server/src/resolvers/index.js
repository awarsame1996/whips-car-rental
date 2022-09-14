const login = require('./login');
const signup = require('./signup');
const cars = require('./cars');
const car = require('./car');
const createBooking = require('./createBooking');
const booking = require('./booking');
const bookings = require('./bookings');

const resolvers = {
	Query: {
		cars,
		car,
		bookings,
		booking,
	},
	Mutation: {
		login,
		signup,
		createBooking,
	},
};

module.exports = resolvers;
