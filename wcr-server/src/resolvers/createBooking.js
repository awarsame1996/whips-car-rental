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
				let start = car.startDate;

				let end = car.endDate;

				console.log(end);
				const timeDifference = end.getTime() - start.getTime();

				duration = timeDifference / (1000 * 60 * 60 * 24);
			}

			if (!isDaily && isWeekly) {
				price = car.get('weeklyPrice');
				let start = car.startDate;

				let end = car.endDate;

				console.log(end);
				const timeDifference = end.getTime() - start.getTime();
				duration = timeDifference / (1000 * 60 * 60 * 24 * 7);
			}
			const totalCost = price * duration;
			// calculating difference of days

			const newBooking = await Booking.create({
				startDate,
				endDate,
				isDaily,
				isWeekly,
				totalCost,
				car: carId,
			});

			await User.findByIdAndUpdate(user._id, {
				$push: {
					bookings: newBooking._id,
				},
			});

			const booking = await Booking.findById(newBooking._id).populate(
				'car'
			);

			return booking;
		} else {
			throw new AuthenticationError('Unauthorized access');
		}
	} catch (error) {
		console.log(`[ERROR]: Failed to create booking | ${error.message}`);

		throw new ApolloError(error);
	}
};

module.exports = createBooking;
