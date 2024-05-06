import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import {
  DashboardOutlined,
  LogoutOutlined,
  CalendarOutlined,
  FieldTimeOutlined,
  WechatWorkOutlined,
  SelectOutlined,
} from '@ant-design/icons';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get('http://localhost:3001/auth/logout').then((result) => {
      if (result.data.Status) {
        localStorage.removeItem('valid');
        navigate('/');
      }
    });
  };

  return (
    <div className='dashboardContainer'>
      <div className='sidebar'>
        <Link to='/employeedashboard' className='logo'></Link>
        <ul className='sidebarMenu'>
          <li>
            <Link to='/employeedashboard'>
              <DashboardOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/employeedashboard/leave-requests'>
              <SelectOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Leave Requests</span>
            </Link>
          </li>
          <li>
            <Link to='/employeedashboard/shifts'>
              <FieldTimeOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Shifts</span>
            </Link>
          </li>
          <li>
            <Link to='/employeedashboard/view-holidays'>
              <CalendarOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Holidays</span>
            </Link>
          </li>
          <li>
            <Link to='/employeedashboard/tasks'>
              <WechatWorkOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Tasks</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link>
              <LogoutOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='content'>
        <div className='header'>
          <h2>Employee Dashboard</h2>
        </div>
        <div className='mainContent'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
