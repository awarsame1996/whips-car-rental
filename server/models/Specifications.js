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
  suitCases: {
    type: Number,
  },
  ac: {
    type: Boolean,
  },
  similar: {
    type: String,
  },
  satNav: {
    type: Boolean,
  },
};

const schema = new Schema(specificationsSchema, {
  _id: false,
});

module.exports = schema;
