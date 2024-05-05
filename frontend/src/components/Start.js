import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import './style.css';
import { ReactComponent as TextSVG } from '../assets/homePage.svg';

const Start = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('http://localhost:3001/verify')
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === 'admin') {
            navigate('/dashboard');
          } else {
            navigate('/employeedashboard');
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

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

            {/* <img src={homePage} alt='' className='homePageImg' /> */}
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div className='hero-text'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='animated-text'
          >
            Welcome to the Employee Management System{' '}
          </motion.h1>
        </div>
        <div className='subtext'>
          <p>
            Streamline your employee management process with our intuitive
            platform.
          </p>
        </div>
        <div className='start-container'>
          <div className='start-content'>
            <div className='button-group'>
              <Button
                type='primary'
                size='large'
                shape='round'
                className='primary-button'
                onClick={() => navigate('/employee_login')}
              >
                Employee Login
              </Button>
              <Button
                type='primary'
                size='large'
                shape='round'
                className='secondary-button'
                onClick={() => navigate('/adminlogin')}
              >
                Admin Login
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Start;
