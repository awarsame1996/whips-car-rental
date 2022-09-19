const { Booking } = require('../models');

const booking = async (_, { bookingId }) => {
	const booking = await Booking.findById(bookingId).populate('car');
	console.log(booking);
	return booking;
};

module.exports = booking;
