// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Add a console.log statement to indicate that the server is starting
console.log('Starting backend server...');

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Insert new user into the database
  console.log('signup code');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists and password is correct
  console.log('login code');
});

app.listen(PORT, () => {
  // Add a console.log statement to indicate that the server is listening on the specified port
  console.log(`Server is running on port ${PORT}`);
});
