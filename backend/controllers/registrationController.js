const Registration = require('../models/Registration');

// Controller for handling registration form submission
exports.createRegistration = async (req, res) => {
  try {
    console.log(req.body);
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};