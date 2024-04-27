const express = require('express');
const cors = require('cors');
const { adminRouter } = require('./routes/AdminRoute.js');
const { employeeRouter } = require('./routes/EmployeeRoute.js');
const Jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use('/auth', adminRouter);
app.use('/employee', employeeRouter);
app.use(express.static('Public'));

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    Jwt.verify(token, 'jwt_secret_key', (err, decoded) => {
      if (err) return res.json({ Status: false, Error: 'Wrong Token' });
      req.id = decoded.id;
      req.role = decoded.role;
      next();
    });
  } else {
    return res.json({ Status: false, Error: 'Not autheticated' });
  }
};
app.get('/verify', verifyUser, (req, res) => {
  return res.json({ Status: true, role: req.role, id: req.id });
});

app.listen(3001, () => {
  console.log('Server is running');
});
