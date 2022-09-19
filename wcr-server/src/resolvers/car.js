const { Car } = require('../models');

const car = async (_, { carId }) => {
	const car = await Car.findById(carId);
	console.log(car);

	return car;
};

module.exports = car;
