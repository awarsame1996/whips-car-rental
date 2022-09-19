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
				let start = startDate;
				console.log(start);

				const startArray = start.split('-');
				let startDuration = new Date(
					startArray[1] + '/' + startArray[2] + '/' + startArray[0]
				);
				console.log('start', startDuration);

				let end = endDate;
				const endArray = end.split('-');
				let endDuration = new Date(
					endArray[1] + '/' + endArray[2] + '/' + endArray[0]
				);

				const timeDifference =
					endDuration.getTime() - startDuration.getTime();
				duration = timeDifference / (1000 * 60 * 60 * 24);
				console.log(duration);
			}

			if (!isDaily && isWeekly) {
				price = car.get('weeklyPrice');
				let start = startDate;

				const startArray = start.split('-');
				let startDuration = new Date(
					startArray[1] + '/' + startArray[2] + '/' + startArray[0]
				);

				let end = endDate;
				const endArray = end.split('-');
				let endDuration = new Date(
					endArray[1] + '/' + endArray[2] + '/' + endArray[0]
				);

				console.log(endDuration);
				const timeDifference =
					endDuration.getTime() - startDuration.getTime();
				duration = timeDifference / (1000 * 60 * 60 * 24);
			}
			const totalCost = price * duration;
			console.log('totalCost', totalCost);
			// calculating difference of days

			const newBooking = await Booking.create({
				startDate,
				endDate,
				isDaily,
				isWeekly,
				totalCost,
				car: carId,
			});

			await User.findByIdAndUpdate(user.id, {
				$push: {
					bookings: newBooking._id,
				},
			});

			// await User.findOneAndUpdate(user.id).populate(bookings);
		} else {
			throw new AuthenticationError('Unauthorized access');
		}
	} catch (error) {
		console.log(`[ERROR]: Failed to create booking | ${error.message}`);

		throw new ApolloError(error);
	}
};

module.exports = createBooking;
