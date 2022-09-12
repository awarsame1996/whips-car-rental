const { Schema } = require('mongoose');

const specificationsSchema = {
	seats: {
		type: Number,
	},
	doors: {
		type: Number,
	},
	transmission: {
		type: String,
	},
	color: {
		type: String,
	},
	ac: {
		type: Boolean,
	},
};

const schema = new Schema(specificationsSchema, {
	_id: false,
});

module.exports = schema;
