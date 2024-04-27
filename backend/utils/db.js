const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'EmployeeManagementSystem',
});

pool.getConnection(function (err, connection) {
  if (err) {
    console.log('connection error');
  } else {
    console.log('Connected');
    // Exporting pool after connection is established
    module.exports = pool;
  }
});
