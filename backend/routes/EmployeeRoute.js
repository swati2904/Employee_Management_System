const express = require('express');
const con = require('../utils/db.js');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/employee_login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM employee WHERE email = ?';
  console.log('sql ', sql);

  con.query(sql, [email], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result[0];
    bcrypt.compare(password, user.password, (err, response) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      if (!response) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Return success response with user ID
      return res.json({ loginStatus: true, id: user.id });
    });
  });
});

router.get('/detail/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM employee WHERE id = ?';

  // Retrieve employee details based on the provided ID
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Return the result as JSON
    return res.json(result);
  });
});

router.get('/logout', (req, res) => {
  // Here, you can implement any logout logic you need
  return res.json({ Status: true });
});

module.exports = { employeeRouter: router };
