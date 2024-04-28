const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'EmployeeManagementSystem',
});

module.exports = pool;
