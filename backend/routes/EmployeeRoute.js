const express = require('express');
const con = require('../utils/db.js');
const bcrypt = require('bcrypt');

const router = express.Router();

// Employee Login API
router.post('/employee_login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM employee WHERE email = ? AND password = ?';

  con.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Return success response with user ID
    return res.json({ loginStatus: true, id: result[0].id });
  });
});

// Employee Detail API
router.get('/detail/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM employee WHERE id = ?';

  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Return the result as JSON
    return res.json(result);
  });
});

// Add Holiday API
router.post('/holidays', (req, res) => {
  const { date, description } = req.body;
  const sql = 'INSERT INTO holidays (date, description) VALUES (?, ?)';

  con.query(sql, [date, description], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Return success response
    return res.json({ success: true });
  });
});

// Add Leave Request API
router.post('/leave_requests', (req, res) => {
  const { employee_id, start_date, end_date, reason } = req.body;
  const status = 'pending'; // Default status for new leave requests
  const sql =
    'INSERT INTO leave_requests (employee_id, start_date, end_date, reason, status) VALUES (?, ?, ?, ?, ?)';

  con.query(
    sql,
    [employee_id, start_date, end_date, reason, status],
    (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      // Return success response
      return res.json({ success: true });
    }
  );
});

// Add Task API
router.post('/tasks', (req, res) => {
  const { title, description, due_date, assigned_to } = req.body;
  const status = 'pending'; // Default status for new tasks
  const sql =
    'INSERT INTO tasks (title, description, due_date, assigned_to, status) VALUES (?, ?, ?, ?, ?)';

  con.query(
    sql,
    [title, description, due_date, assigned_to, status],
    (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      // Return success response
      return res.json({ success: true });
    }
  );
});

// Add Department Shift API
router.post('/department_shifts', (req, res) => {
  const { employee_id, shift_start, shift_end } = req.body;
  const sql =
    'INSERT INTO department_shifts (employee_id, shift_start, shift_end) VALUES (?, ?, ?)';

  con.query(sql, [employee_id, shift_start, shift_end], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Return success response
    return res.json({ success: true });
  });
});

// Logout API
router.get('/logout', (req, res) => {
  // Here, you can implement any logout logic you need
  return res.json({ Status: true });
});

module.exports = { employeeRouter: router };
