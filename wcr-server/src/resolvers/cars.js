const { Car } = require('../models');

const cars = async () => {
	const cars = await Car.find({});

	return cars;
};

module.exports = cars;
