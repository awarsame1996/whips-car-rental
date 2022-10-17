const { User } = require('../models');

const { ApolloError } = require("apollo-server-express");

const user = async (_, { userId }) => {
	const user = await User.findById(userId).populate({
		path: 'bookings',
		populate: {
			path: 'car',
			model: 'Car',
		},
	});
	if (!user) {
		throw new ApolloError('Failed to find user');
	}
	console.log(user);
	return user;
};

module.exports = user;
