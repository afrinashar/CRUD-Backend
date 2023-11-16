// models/photo.js
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  
        
         
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

module.exports = mongoose.model('photos', photoSchema);
