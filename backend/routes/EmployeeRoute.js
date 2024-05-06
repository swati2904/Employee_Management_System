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

router.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employee';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(result);
  });
});

// Employee Detail API
router.get('/detail/:id', (req, res) => {
  const loggedInUserId = req.params.id;
  const isAdmin = req.user && req.user.isAdmin; // Assuming isAdmin is a property indicating admin status

  let sql;
  let params;

  if (isAdmin) {
    // If the logged-in user is an admin, fetch details for the specified employee ID
    sql = `
      SELECT 
        e.id AS employee_id,
        e.name AS employee_name,
        e.email AS employee_email,
        e.address AS employee_address,
        e.salary AS employee_salary,
        e.image AS employee_image,
        t.title AS task_title,
        t.description AS task_description,
        t.due_date AS task_due_date,
        s.shift_start,
        s.shift_end,
        l.start_date AS leave_start_date,
        l.end_date AS leave_end_date,
        l.reason AS leave_reason
      FROM 
        employee e
        LEFT JOIN tasks t ON e.id = t.assigned_to
        LEFT JOIN department_shifts s ON e.id = s.employee_id
        LEFT JOIN leave_requests l ON e.id = l.employee_id
      WHERE 
        e.id = ?
    `;
    params = [loggedInUserId];
  } else {
    // If the logged-in user is an employee, fetch details only for the logged-in employee
    sql = `
      SELECT 
        e.id AS employee_id,
        e.name AS employee_name,
        e.email AS employee_email,
        e.address AS employee_address,
        e.salary AS employee_salary,
        e.image AS employee_image,
        t.title AS task_title,
        t.description AS task_description,
        t.due_date AS task_due_date,
        s.shift_start,
        s.shift_end,
        l.start_date AS leave_start_date,
        l.end_date AS leave_end_date,
        l.reason AS leave_reason
      FROM 
        employee e
        LEFT JOIN tasks t ON e.id = t.assigned_to
        LEFT JOIN department_shifts s ON e.id = s.employee_id
        LEFT JOIN leave_requests l ON e.id = l.employee_id
      WHERE 
        e.email = ?
    `;
    params = [loggedInUserId];
  }

  con.query(sql, params, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Return the result as JSON
    return res.json(result);
  });
});

// Add Holiday API
router.post('/holiday', (req, res) => {
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
router.post('/leave_request', (req, res) => {
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
router.post('/task', (req, res) => {
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
router.post('/department_shift', (req, res) => {
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

// GET Shifts API
router.get('/shifts', (req, res) => {
  const sql = 'SELECT * FROM department_shifts';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(result);
  });
});

// GET Holidays API
router.get('/holidays', (req, res) => {
  const sql = 'SELECT * FROM holidays';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(result);
  });
});

// GET Tasks API
router.get('/tasks', (req, res) => {
  const sql = 'SELECT * FROM tasks';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(result);
  });
});

// GET Leave Requests API
router.get('/leave_requests', (req, res) => {
  const sql = 'SELECT * FROM leave_requests';
  con.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(result);
  });
});

// Logout API
router.get('/logout', (req, res) => {
  // Here, you can implement any logout logic you need
  return res.json({ Status: true });
});

module.exports = { employeeRouter: router };
