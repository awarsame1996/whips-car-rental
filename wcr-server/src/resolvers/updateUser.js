const { ApolloError } = require('apollo-server');
const { User } = require('../models');

const updateUser = async (_, { userId, userInput }) => {
	const user = await User.findOneAndUpdate({ _id: userId }, userInput, {
		new: true,
	});
	console.log('USER', user);
	return user;
};

module.exports = updateUser;