import React, { useState } from 'react';
import axios from 'axios';

const EmployeeLeaveRequestRecord = () => {
  const [formData, setFormData] = useState({
    employee_id: '',
    start_date: '',
    end_date: '',
    reason: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/employee/leave_request', formData)
      .then((response) => {
        setSuccessMessage('Leave request submitted successfully.');
        setFormData({
          employee_id: '',
          start_date: '',
          end_date: '',
          reason: '',
        });
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Failed to submit leave request.');
        setSuccessMessage('');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='leave-request-container'>
      <h2>Submit Leave Request</h2>
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
          <label htmlFor='start_date'>Start Date:</label>
          <input
            type='date'
            id='start_date'
            name='start_date'
            value={formData.start_date}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='end_date'>End Date:</label>
          <input
            type='date'
            id='end_date'
            name='end_date'
            value={formData.end_date}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='reason'>Reason:</label>
          <textarea
            id='reason'
            name='reason'
            value={formData.reason}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit Leave Request</button>
      </form>
    </div>
  );
};

export default EmployeeLeaveRequestRecord;
