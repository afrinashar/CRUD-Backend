// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },isVerified: {
    type: Boolean,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model('photos', imageSchema);

module.exports = Image;
