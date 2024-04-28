import React from 'react';

const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;

/*
import React, { useState } from 'react';
import { Button, Col, Row, Modal } from 'antd';
import './style.css';
import homePage from '../assets/homePage.jpg';
import Login from './Login';
import EmployeeLogin from './EmployeeLogin';

const Start = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [loginType, setLoginType] = useState(null);

  const showLoginModal = (type) => {
    setLoginModalVisible(true);
    setLoginType(type);
  };

  const hideLoginModal = () => {
    setLoginModalVisible(false);
    setLoginType(null);
  };

  const renderLoginComponent = () => {
    if (loginType === 'admin') {
      return <Login onCancel={hideLoginModal} />;
    } else if (loginType === 'employee') {
      return <EmployeeLogin onCancel={hideLoginModal} />;
    }
    return null;
  };

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
          <div className='button-group'>
            <Button
              type='primary'
              size='large'
              shape='round'
              className='primary-button'
              onClick={() => showLoginModal('employee')}
            >
              Employee Login
            </Button>
            <Button
              type='primary'
              size='large'
              shape='round'
              className='secondary-button'
              onClick={() => showLoginModal('admin')}
            >
              Admin Login
            </Button>
          </div>
        </div>
      </Col>
      <Modal
        title='Login'
        visible={loginModalVisible}
        onCancel={hideLoginModal}
        footer={null}
      >
        {renderLoginComponent()}
      </Modal>
    </Row>
  );
};

export default Start;



*/
