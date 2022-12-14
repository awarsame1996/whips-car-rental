const login = require('./login');
const signup = require('./signup');
const cars = require('./cars');
const car = require('./car');
const createBooking = require('./createBooking');
const booking = require('./booking');
const bookings = require('./bookings');
const user = require('./user');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');

const resolvers = {
	Query: {
		cars,
		car,
		bookings,
		booking,
		user,
	},
	Mutation: {
		login,
		signup,
		createBooking,
		updateUser,
		deleteUser,
	},
};

module.exports = resolvers;
