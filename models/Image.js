// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },is_verified: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  // imageUrl: {
  //   type: String,
  //   required: true
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model('photos', imageSchema);

module.exports = Image;
