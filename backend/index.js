// backend/index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Add a console.log statement to indicate that the server is starting
console.log('Starting backend server...');

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  // Add a console.log statement to indicate that the server is listening on the specified port
  console.log(`Server is running on port ${PORT}`);
});
