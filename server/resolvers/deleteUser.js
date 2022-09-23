const { ApolloError } = require("apollo-server-express");
const { User } = require('../models');

const updateUser = async (_, { userId }) => {
	const user = await User.findOneAndDelete({ _id: userId });

	return user;
};

module.exports = updateUser;
