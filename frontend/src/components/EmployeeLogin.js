import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { ReactComponent as TextSVG } from '../assets/homePage.svg';
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
          navigate('/employeedashboard');
        } else {
          setError(result.data.error);
        }
      })
      .catch((err) => console.error('Error during login:', err));
  };

  const handleLogin = () => {
    // Manually handle form submission
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <Row className='containerStyle'>
      <Col span={12}>
        <div className='transparentImgContainer'>
          <div className='imgContainer'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 0.7 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <TextSVG />
            </motion.div>
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div className='loginPage'>
          <div className='loginForm'>
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
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
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
              <Button
                type='primary'
                className='btn btn-success w-100 rounded-0 mb-2'
                onClick={handleLogin} // Handle login on button click
              >
                Log in
              </Button>
              <div className='mb-1'>
                <input type='checkbox' name='tick' id='tick' className='me-2' />
                <label htmlFor='password'>
                  You agree with terms & conditions
                </label>
              </div>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default EmployeeLogin;
