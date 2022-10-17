const { ApolloError } = require("apollo-server-express");
const { User } = require('../models');

const updateUser = async (_, { userId, userInput }) => {
	const user = await User.findOneAndUpdate({ _id: userId }, userInput, {
		new: true,
	});

	return user;
};

module.exports = updateUser;
