const { User } = require('../models');

const user = async (_, { userId }) => {
	const user = await User.findById(userId).populate({
		path: 'bookings',
		populate: {
			path: 'car',
			model: 'Car',
		},
	});
	console.log(user);
	return user;
};

module.exports = user;
