import React, { useState } from 'react';
import axios from 'axios';

const EmployeeTaskDetails = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    due_date: '',
    assigned_to: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/employee/task', formData)
      .then((response) => {
        setSuccessMessage('Task added successfully.');
        setFormData({
          title: '',
          description: '',
          due_date: '',
          assigned_to: '',
        });
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Failed to add task.');
        setSuccessMessage('');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='task-container'>
      <h2>Add Task</h2>
      {successMessage && (
        <div className='success-message'>{successMessage}</div>
      )}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
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
        <div className='form-group'>
          <label htmlFor='due_date'>Due Date:</label>
          <input
            type='date'
            id='due_date'
            name='due_date'
            value={formData.due_date}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='assigned_to'>Assigned To:</label>
          <input
            type='text'
            id='assigned_to'
            name='assigned_to'
            value={formData.assigned_to}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};

export default EmployeeTaskDetails;
