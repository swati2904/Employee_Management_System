import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table } from 'antd'; // Import Ant Design components
import './style.css';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/auth/employee')
      .then((result) => {
        if (result.data.Status) {
          setEmployees(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:3001/auth/delete_employee/' + id)
      .then((result) => {
        if (result.data.Status) {
          // Reload the page after successful deletion
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  // Define columns for the Ant Design Table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img
          src={`http://localhost:3001/Images/${image}`}
          alt='Employee'
          className='employeeImage'
        />
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <span>
          <Button className='primaryBtn'>
            <Link to={`/dashboard/edit_employee/${record.id}`}>Edit</Link>
          </Button>
          <Button
            type='link'
            className='secondaryBtn'
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div className='employeeContainer'>
      <div className='employeeHeader'>
        <h2>Employee List</h2>
        <Link to='/dashboard/add_employee'>
          <Button className='primaryBtn'>Add Employee</Button>
        </Link>
      </div>
      <div className='employeeTable'>
        <Table columns={columns} dataSource={employees} pagination={false} />
      </div>
    </div>
  );
};

export default Employee;
