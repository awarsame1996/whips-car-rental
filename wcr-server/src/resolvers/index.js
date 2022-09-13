const login = require('./login');
const signup = require('./signup');
const cars = require('./cars');

const resolvers = {
	Query: {
		cars,
		// car,
		// bookings,
		// booking,
	},
	Mutation: {
		login,
		signup,
	},
};

module.exports = resolvers;
