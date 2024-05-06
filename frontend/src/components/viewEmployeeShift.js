import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import './style.css';
import FormattedDate from './FormattedDate';

const ViewEmployeeShifts = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    fetchShifts();
  }, []);

  const fetchShifts = () => {
    fetch('http://localhost:3001/employee/shifts')
      .then((response) => response.json())
      .then((data) => setShifts(data))
      .catch((error) => console.error('Error fetching shifts:', error));
  };

  return (
    <>
      {' '}
      <h1>Employee Shifts</h1>{' '}
      <div className='shift-cards-container'>
        {shifts.map((shift) => (
          <Card key={shift.id} className='shift-card'>
            <h2>Employee ID: {shift.employee_id}</h2>
            <p>
              Shift Start: <FormattedDate dateString={shift.shift_start} />
            </p>
            <p>
              Shift End: <FormattedDate dateString={shift.shift_end} />
            </p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ViewEmployeeShifts;
