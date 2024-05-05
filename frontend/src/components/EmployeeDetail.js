import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'antd'; // Import Ant Design components
import './style.css';

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/employee/detail/${id}`)
      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios
      .get('http://localhost:3001/employee/logout')
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem('valid');
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='employeeDetailContainer'>
      <div className='employeeHeader'>
        <h4>Employee Management System</h4>
        <Button
          type='primary'
          onClick={() => navigate(`/dashboard/edit_employee/${id}`)}
        >
          Edit
        </Button>
      </div>
      <div className='employeeDetails'>
        <div className='employeeImageContainer'>
          <img
            src={`http://localhost:3001/Images/${employee.image}`}
            alt='Employee'
            className='employeeImage'
          />
        </div>
        <div className='employeeInfo'>
          <h3 className='detailTitle'>Name:</h3>
          <p className='detailText'>{employee.name}</p>
          <h3 className='detailTitle'>Email:</h3>
          <p className='detailText'>{employee.email}</p>
          <h3 className='detailTitle'>Salary:</h3>
          <p className='detailText'>${employee.salary}</p>
          <Button type='danger' onClick={handleLogout} className='logoutBtn'>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
