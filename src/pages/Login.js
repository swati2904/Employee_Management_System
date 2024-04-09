import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import Home from './Home';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = (formData) => {
    // Implement login logic here
    console.log('Login:', formData);
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <h2>Login</h2>
        <LoginForm onLogin={handleLogin} />
        <div className='button-container'>
          <span>
            Don't have an account? <Link to='/signup'>Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
