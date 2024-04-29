import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'; // Import the external CSS file

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
        <Link to='/dashboard' className='logo'>
          <span className='logoText'></span>
        </Link>
        <ul className='sidebarMenu'>
          <li>
            <Link to='/dashboard'>
              <i className='bi-speedometer2'></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/employee'>
              <i className='bi-people'></i>
              <span>Manage Employees</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/category'>
              <i className='bi-columns'></i>
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/profile'>
              <i className='bi-person'></i>
              <span>Profile</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link>
              <i className='bi-power'></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='content'>
        <div className='header'>
          <h4>Employee Management System</h4>
        </div>
        <div className='mainContent'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
