const { User } = require('../models');

const users = [
	{
		firstName: 'abdilatif',
		lastName: 'warsame',
		email: 'abdilatifwarsame@gmail.com',
		password: 'password123',
		username: 'abdilatifw',
	},
	{
		firstName: 'adam',
		lastName: 'alibaba',
		email: 'adamali@gmail.com',
		password: 'password123',
		username: 'adamali',
	},
	{
		firstName: 'test',
		lastName: 'test',
		email: 'test@gmail.com',
		password: 'password123',
		username: 'test',
	},
];
const seedUsers = async () => {
	const promises = users.map((user) => User.create(user));

	await Promise.all(promises);

	console.log('[INFO]: Successfully seeded users');
};

module.exports = { seedUsers };
