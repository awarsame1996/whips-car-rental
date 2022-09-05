const { Schema, model } = require('mongoose');

const carSchema = {
  model: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 30,
    trim: true,
  },
  brand: {
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
};

const schema = new Schema(carSchema);

const Car = model('Car', schema);

module.exports = Car;
