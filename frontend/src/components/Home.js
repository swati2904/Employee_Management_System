import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, Table } from 'antd';
import './style.css';

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .all([
        axios.get('http://localhost:3001/auth/admin_count'),
        axios.get('http://localhost:3001/auth/employee_count'),
        axios.get('http://localhost:3001/auth/salary_count'),
        axios.get('http://localhost:3001/auth/admin_records'),
      ])
      .then(
        axios.spread(
          (
            adminCountRes,
            employeeCountRes,
            salaryCountRes,
            adminRecordsRes
          ) => {
            if (adminCountRes.data.Status) {
              setAdminTotal(adminCountRes.data.Result[0].admin);
            }
            if (employeeCountRes.data.Status) {
              setEmployeeTotal(employeeCountRes.data.Result[0].employee);
            }
            if (salaryCountRes.data.Status) {
              setSalaryTotal(salaryCountRes.data.Result[0].salaryOFEmp);
            }
            if (adminRecordsRes.data.Status) {
              setAdmins(adminRecordsRes.data.Result);
            } else {
              alert(adminRecordsRes.data.Error);
            }
          }
        )
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button size='large' className='primaryBtn'>
            Edit
          </Button>
          <Button size='large' className='secondaryBtn'>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className='homeContainer'>
      <div className='homeStatsContainer'>
        <Card className='homeStatCard'>
          <h2>Admin</h2>
          <hr />
          <div className='homeStatDetail'>
            <span>Total:</span>
            <span>{adminTotal}</span>
          </div>
        </Card>
        <Card className='homeStatCard'>
          <h2>Employee</h2>
          <hr />
          <div className='homeStatDetail'>
            <span>Total:</span>
            <span>{employeeTotal}</span>
          </div>
        </Card>
        <Card className='homeStatCard'>
          <h2>Salary</h2>
          <hr />
          <div className='homeStatDetail'>
            <span>Total:</span>
            <span>${salaryTotal}</span>
          </div>
        </Card>
      </div>
      <div className='homeAdminList'>
        <h3>List of Admins</h3>
        <Table dataSource={admins} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default Home;
