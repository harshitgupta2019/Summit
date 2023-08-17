const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const registrationRoutes = require('./routes/registration');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const dotenv=require('dotenv');
// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import and use routes

app.use('/register', registrationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
