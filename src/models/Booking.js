const { Schema, model } = require('mongoose');

const bookingSchema = {
  startDate: {
    type: Date,
    required: true,
    trim: true,
  },
  endDate: {
    type: Date,
    required: true,
    trim: true,
  },

  isWeekly: {
    type: Boolean,
    default: true,
  },
  isDaily: {
    type: Boolean,
    default: true,
  },

  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
  },

  totalCost: {
    type: Number,
    required: true,
  },
  pickupLocation: {
    type: addressSchema,
    required: true,
  },
};

const schema = new Schema(bookingSchema);

const Booking = model('Booking', schema);

module.exports = Booking;
