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
  pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('User signed up successfully');
      res.status(200).json({ message: 'Signup successful' });
    }
  });
});


// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists and password is correct
  pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error selecting user:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      const user = results[0];
      if (user.password === password) {
        console.log('User logged in successfully');
        res.status(200).json({ message: 'Login successful', userId: user.id });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    }
  });
});


app.listen(PORT, () => {
  // Add a console.log statement to indicate that the server is listening on the specified port
  console.log(`Server is running on port ${PORT}`);
});