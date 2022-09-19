const { AuthenticationError, ApolloError } = require('apollo-server');
const { Booking } = require('../models');

const bookings = async (_, __, { user }) => {
	try {
		if (user) {
			const bookings = await Booking.find({}).populate('car');

			return bookings;
		} else {
			throw new AuthenticationError('Unauthorized access');
		}
	} catch (error) {
		console.log(`[ERROR]: Failed to get all bookings | ${error.message}`);

		throw new ApolloError('Failed to get all bookings');
	}
};

module.exports = bookings;
