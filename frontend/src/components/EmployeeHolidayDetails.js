import React, { useState } from 'react';
import axios from 'axios';

const EmployeeHolidayDetails = () => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/employee/holiday', formData)
      .then((response) => {
        setSuccessMessage('Holiday added successfully.');
        setFormData({
          date: '',
          description: '',
        });
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Failed to add holiday.');
        setSuccessMessage('');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='holidays-container'>
      <h2>Add Holiday</h2>
      {successMessage && (
        <div className='success-message'>{successMessage}</div>
      )}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add Holiday</button>
      </form>
    </div>
  );
};

export default EmployeeHolidayDetails;
