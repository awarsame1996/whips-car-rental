const { AuthenticationError, ApolloError } = require('apollo-server');
const { Schema } = require('mongoose');
const { Car, User, Booking } = require('../models');

const createBooking = async (_, { createBookingInput }, { user }) => {
	try {
		if (user) {
			const { startDate, endDate, isDaily, isWeekly, carId } =
				createBookingInput;

			const car = await Car.findById(carId);

			let price;
			let duration;

			if (isDaily && !isWeekly) {
				price = car.get('dailyPrice');
				let start = new Date('07/15/2015');

				let end = new Date('07/29/2015');

				console.log(end);
				const timeDifference = end.getTime() - start.getTime();

				duration = timeDifference / (1000 * 60 * 60 * 24);
			}

			if (!isDaily && isWeekly) {
				price = car.get('weeklyPrice');
				let start = new Date('07/15/2015');

				let end = new Date('07/29/2015');

				console.log(end);
				const timeDifference = end.getTime() - start.getTime();
				duration = timeDifference / (1000 * 60 * 60 * 24 * 7);
			}
			const totalCost = price * duration;
			// calculating difference of days

			const newBooking = await Booking.create({
				startDate,
				endDate,
				pickupLocation,
				isDaily,
				isWeekly,
				totalCost,
				car: carId,
			});

			const bookingId = newBooking.get('_id');

			await User.findByIdAndUpdate(user.id, {
				$push: {
					bookings: bookingId,
				},
			});

			const booking = await Booking.findById(bookingId).populate('Car');

			return booking;
		} else {
			throw new AuthenticationError('Unauthorized access');
		}
	} catch (error) {
		console.log(`[ERROR]: Failed to create booking | ${error.message}`);

		throw new ApolloError('Failed to create booking');
	}
};

module.exports = createBooking;
