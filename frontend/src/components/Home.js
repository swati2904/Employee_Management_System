import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css'; // Import the external CSS file

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setemployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios.get('http://localhost:3001/auth/admin_records').then((result) => {
      if (result.data.Status) {
        setAdmins(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  };
  const adminCount = () => {
    axios.get('http://localhost:3001/auth/admin_count').then((result) => {
      if (result.data.Status) {
        setAdminTotal(result.data.Result[0].admin);
      }
    });
  };
  const employeeCount = () => {
    axios.get('http://localhost:3001/auth/employee_count').then((result) => {
      if (result.data.Status) {
        setemployeeTotal(result.data.Result[0].employee);
      }
    });
  };
  const salaryCount = () => {
    axios.get('http://localhost:3001/auth/salary_count').then((result) => {
      if (result.data.Status) {
        setSalaryTotal(result.data.Result[0].salaryOFEmp);
      } else {
        alert(result.data.Error);
      }
    });
  };
  return (
    <div className='homeContainer'>
      <div className='homeStatsContainer'>
        <div className='homeStat'>
          <h4>Admin</h4>
          <hr />
          <div className='homeStatDetail'>
            <span>Total:</span>
            <span>{adminTotal}</span>
          </div>
        </div>
        <div className='homeStat'>
          <h4>Employee</h4>
          <hr />
          <div className='homeStatDetail'>
            <span>Total:</span>
            <span>{employeeTotal}</span>
          </div>
        </div>
        <div className='homeStat'>
          <h4>Salary</h4>
          <hr />
          <div className='homeStatDetail'>
            <span>Total:</span>
            <span>${salaryTotal}</span>
          </div>
        </div>
      </div>
      <div className='homeAdminList'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a, index) => (
              <tr key={index}>
                <td>{a.email}</td>
                <td>
                  <button className='btn btn-info btn-sm me-2'>Edit</button>
                  <button className='btn btn-warning btn-sm'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
