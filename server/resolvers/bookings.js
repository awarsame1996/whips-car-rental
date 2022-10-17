const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { Booking } = require('../models');

const bookings = async (_, __, { user }) => {
	try {
		const bookings = await Booking.find({}).populate('car');

		return bookings;
	} catch (error) {
		console.log(`[ERROR]: Failed to get all bookings | ${error.message}`);

		throw new ApolloError('Failed to get all bookings');
	}
};

module.exports = bookings;
