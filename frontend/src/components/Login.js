import React, { useState } from 'react';
import './style.css'; // Import the external CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/auth/adminlogin', values)
      .then((result) => {
        if (result.data.loginStatus) {
          localStorage.setItem('valid', true);
          navigate('/dashboard');
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='loginPage'>
      {' '}
      {/* Remove inline class */}
      <div className='loginForm'>
        {' '}
        {/* Remove inline class */}
        {error && <div className='errorMsg'>{error}</div>}
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email:</strong>
            </label>
            <input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Enter Email'
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password:</strong>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className='form-control rounded-0'
            />
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>
            Log in
          </button>
          <div className='mb-1'>
            <input type='checkbox' name='tick' id='tick' className='me-2' />
            <label htmlFor='password'>
              You are Agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
