const { Schema, model } = require('mongoose');

const specificationsSchema = require('./Specifications.js');

const carSchema = {
	make: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 30,
		trim: true,
	},
	model: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 30,
		trim: true,
	},
	imageUrl: {
		type: String,
		trim: true,
		default:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKNlqdROK6D7-GiqEUeTODSZmIKvcdMiW9g&usqp=CAU',
	},
	dailyPrice: {
		type: Number,
		required: true,
	},
	weeklyPrice: {
		type: Number,
		required: true,
	},
	specifications: specificationsSchema,
};
const options = {
	toJSON: {
		virtuals: true,
		getters: true,
	},
	id: false,
};
const schema = new Schema(carSchema, options);

const Car = model('Car', schema);

module.exports = Car;
