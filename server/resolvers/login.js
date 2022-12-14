const { ApolloError } = require("apollo-server-express");

const { User } = require('../models');
const { signToken } = require('../context/auth');

const login = async (_, { loginInput }) => {
	try {
		const user = await User.findOne({ email: loginInput.email });

		if (!user) {
			console.log(
				`[ERROR]: Failed to login | ${loginInput.email} does not exist`
			);

			throw new ApolloError('Failed to login');
		}

		const isPasswordValid = await user.checkPassword(loginInput.password);

		if (!isPasswordValid) {
			console.log(
				`[ERROR]: Failed to login | ${loginInput.email} has incorrect password`
			);

			throw new ApolloError('Failed to login');
		}

		return {
			success: true,
			token: signToken(user),
			user: {
				id: user.get('_id'),
				firstName: user.get('firstName'),
				lastName: user.get('lastName'),
				email: user.get('email'),
				username: user.get('username'),
				address: user.get('address'),
			},
		};
	} catch (error) {
		console.log(`[ERROR]: Failed to login | ${error.message}`);

		throw new ApolloError(error.message);
	}
};

module.exports = login;
