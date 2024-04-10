// backend/db.js

const mysql = require('mysql');

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'your_database_name',
});

// Check if the connection to the database is successful
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    connection.release(); // Release the connection
  }
});

// Handle database connection errors
pool.on('error', (err) => {
  console.error('Database connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection was closed');
  } else {
    console.error('Unexpected database error');
  }
});

module.exports = pool;