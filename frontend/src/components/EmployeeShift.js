import React, { useState } from 'react';
import axios from 'axios';

const EmployeeShift = () => {
  const [formData, setFormData] = useState({
    employee_id: '',
    shift_start: '',
    shift_end: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/employee/department_shift', formData)
      .then((response) => {
        setSuccessMessage('Shift added successfully.');
        setFormData({
          employee_id: '',
          shift_start: '',
          shift_end: '',
        });
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Failed to add shift.');
        setSuccessMessage('');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='shift-container'>
      <h2>Add Shift</h2>
      {successMessage && (
        <div className='success-message'>{successMessage}</div>
      )}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='employee_id'>Employee ID:</label>
          <input
            type='text'
            id='employee_id'
            name='employee_id'
            value={formData.employee_id}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='shift_start'>Shift Start:</label>
          <input
            type='datetime-local'
            id='shift_start'
            name='shift_start'
            value={formData.shift_start}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='shift_end'>Shift End:</label>
          <input
            type='datetime-local'
            id='shift_end'
            name='shift_end'
            value={formData.shift_end}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add Shift</button>
      </form>
    </div>
  );
};

export default EmployeeShift;
