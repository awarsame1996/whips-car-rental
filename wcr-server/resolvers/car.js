const { Car } = require('../models');

const car = async (_, { carId }) => {
	const car = await Car.findById(carId);

	return car;
};

module.exports = car;
