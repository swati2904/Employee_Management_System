import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import {
  DashboardOutlined,
  UserAddOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
  CalendarOutlined,
  SelectOutlined,
  WechatWorkOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';

const Dashboard = () => {
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
        <Link to='/dashboard' className='logo'></Link>
        <ul className='sidebarMenu'>
          <li>
            <Link to='/dashboard'>
              <DashboardOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />

              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/employee'>
              <UserAddOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Manage Employees</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/category'>
              <UnorderedListOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />{' '}
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/view-leave-details'>
              <SelectOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Leaves</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/holidays'>
              <CalendarOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Holidays</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/view-tasks'>
              <WechatWorkOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/view-shift'>
              <FieldTimeOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />
              <span>Shifts</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link>
              <LogoutOutlined
                style={{ fontSize: '16px', marginRight: '10px' }}
              />{' '}
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='content'>
        <div className='header'>
          <h2>Employee Management System</h2>
        </div>
        <div className='mainContent'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
