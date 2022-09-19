const { User } = require('../models');

const user = async (_, { userId }) => {
	const user = await User.findById(userId).populate('car');
	console.log(user);
	return user;
};

module.exports = user;
