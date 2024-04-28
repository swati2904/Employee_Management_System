import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import './style.css';
import homePage from '../assets/homePage.jpg';

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
            navigate('/employee_detail/' + result.data.id);
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
            <img src={homePage} alt='' className='homePageImg' />
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div className='hero-text'>
          <h1>Welcome to the Employee Management System</h1>
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
