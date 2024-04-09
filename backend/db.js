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

module.exports = pool;
