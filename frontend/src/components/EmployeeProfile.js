import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spin, Card, Divider } from 'antd';
import './style.css';
import FormattedDate from './FormattedDate';

const EmployeeProfile = ({ employeeId }) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch employee details when component mounts
    axios
      .get(`http://localhost:3001/employee/detail/${employeeId}`)
      .then((response) => {
        setEmployeeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching employee details:', error);
        setLoading(false);
      });
  }, [employeeId]);

  if (loading) {
    return <Spin size='large' className='spinner' />;
  }

  if (!employeeData) {
    return <div>No employee data found</div>;
  }

  return (
    <div className='employee-details-container'>
      <h2 className='title'>Employee Details</h2>
      <Card className='card' title='Personal Information'>
        <p>
          <strong>Name:</strong> {employeeData.employee_name}
        </p>
        <p>
          <strong>Email:</strong> {employeeData.employee_email}
        </p>
        <p>
          <strong>Address:</strong> {employeeData.employee_address}
        </p>
        <p>
          <strong>Salary:</strong> ${employeeData.employee_salary.toFixed(2)}
        </p>
      </Card>
      <Divider />
      <Card className='card' title='Tasks'>
        {employeeData.tasks.map((task) => (
          <div key={task.id}>
            <p>
              <strong>Title:</strong> {task.task_title}
            </p>
            <p>
              <strong>Description:</strong> {task.task_description}
            </p>
            <p>
              <strong>Due Date:</strong>{' '}
              {new Date(task.task_due_date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </Card>
      <Divider />
      <Card className='card' title='Shifts'>
        {employeeData.shifts.map((shift) => (
          <div key={shift.id}>
            <p>
              <strong>Shift Start:</strong>{' '}
              {new Date(shift.shift_start).toLocaleString()}
            </p>
            <p>
              <strong>Shift End:</strong>{' '}
              {new Date(shift.shift_end).toLocaleString()}
            </p>
          </div>
        ))}
      </Card>
      <Divider />
      <Card className='card' title='Leave Requests'>
        {employeeData.leave_requests.map((request) => (
          <div key={request.id}>
            <p>
              <strong>Start Date:</strong>{' '}
              {new Date(request.start_date).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong>{' '}
              {new Date(request.end_date).toLocaleDateString()}
            </p>
            <p>
              <strong>Reason:</strong> {request.leave_reason}
            </p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default EmployeeProfile;
