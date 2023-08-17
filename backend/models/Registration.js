// models/Registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  organization: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
