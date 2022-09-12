const { Car } = require('../models');

const cars = [
	{
		make: '',
		model: '',
		imageUrl: '',
		dailyPrice: 1,
		weeklyPrice: 1,
		specifications: {
			seats: 1,
			doors: 1,
			transmission: 'automatic',
			color: 'red',
			ac: true,
		},
	},
];
const seedcars = async () => {
	const promises = cars.map((car) => Car.create(car));

	await Promise.all(promises);

	console.log('[INFO]: Successfully seeded users');
};

module.exports = { seedUsers };
