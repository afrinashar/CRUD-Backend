const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  userType: String,
});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
