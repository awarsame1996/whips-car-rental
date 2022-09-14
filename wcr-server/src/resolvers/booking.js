const { Booking } = require('../models');

const booking = async (_, { bookingId }) => {
	const booking = await Booking.findById(bookingId).populate('Car');

	return booking;
};

module.exports = booking;
