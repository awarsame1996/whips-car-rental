const { Schema, model } = require('mongoose');

const userSchema = {
	firstName: {
		type: String,
		require: true,
		minLength: 4,
		maxLength: 30,
		trim: true,
	},
	lastName: {
		type: String,
		require: true,
		minLength: 4,
		maxLength: 30,
		trim: true,
	},
};
