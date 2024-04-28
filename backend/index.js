const express = require('express');
const cors = require('cors');
const { adminRouter } = require('./routes/AdminRoute.js');
const { employeeRouter } = require('./routes/EmployeeRoute.js');

const app = express();
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use('/auth', adminRouter);
app.use('/employee', employeeRouter);
app.use(express.static('Public'));

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
