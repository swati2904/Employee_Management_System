import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import { loginUser } from '../config/backend'; // Import login API function

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const data = await loginUser(formData);
      console.log(data); // Log response from backend
      if (data && data.success) {
        navigate('/dashboard');
      } else {
        // Handle login error
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
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
