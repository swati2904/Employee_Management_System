const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'EmployeeManagementSystem',
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    connection.release();
  }
});

pool.on('error', (err) => {
  console.error('Database connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection was closed');
  } else {
    console.error('Unexpected database error');
  }
});

module.exports = pool;
