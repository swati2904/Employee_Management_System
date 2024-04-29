import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';

const EmployeeLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/employee/employee_login', values, {
        withCredentials: true,
      })
      .then((result) => {
        if (result.data.loginStatus) {
          localStorage.setItem('valid', true);
          navigate('/employee_detail/' + result.data.id);
        } else {
          setError(result.data.error);
        }
      })
      .catch((err) => console.error('Error during login:', err));
  };

  return (
    <div className='employeeLoginContainer'>
      <div className='loginFormContainer'>
        <div className='loginHeader'>
          <h2>Login Page</h2>
        </div>
        <div className='errorText'>{error && error}</div>
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Enter Email'
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className='formControl'
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className='formControl'
            />
          </div>
          <button className='submitButton' type='submit'>
            Log in
          </button>
          <div className='checkboxGroup'>
            <input type='checkbox' name='tick' id='tick' className='checkbox' />
            <label htmlFor='tick'>You agree with the terms & conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
