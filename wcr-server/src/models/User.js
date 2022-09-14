const bcrypt = require('bcrypt');
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
	email: {
		type: String,
		required: true,
		// Using REGEX to validate email
		match: [/^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
		trim: true,
		unique: true,
	},
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},

	password: {
		type: String,
		required: true,
		minLength: 8,
		maxLength: 50,
		trim: true,
	},
	bookings: { type: Schema.Types.ObjectId, ref: 'Booking' },
};
const options = {
	toJSON: {
		virtuals: true,
		getters: true,
	},
	id: false,
};

const schema = new Schema(userSchema, options);

schema.method('checkPassword', async function (password) {
	const isValid = await bcrypt.compare(password, this.password);
	return isValid;
});
schema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const password = await bcrypt.hash(this.password, 10);
		this.password = password;
	}
	next();
});

const User = model('User', schema);

module.exports = User;
