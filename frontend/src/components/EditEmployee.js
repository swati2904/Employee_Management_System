import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    salary: '',
    address: '',
    category_id: '',
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/auth/category')
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get('http://localhost:3001/auth/employee/' + id)
      .then((result) => {
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          salary: result.data.Result[0].salary,
          category_id: result.data.Result[0].category_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:3001/auth/edit_employee/' + id, employee)
      .then((result) => {
        if (result.data.Status) {
          navigate('/dashboard/employee');
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='editEmployeeContainer'>
      <div className='editEmployeeForm'>
        <h3>Edit Employee</h3>
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='inputName'>Name</label>
            <input
              type='text'
              id='inputName'
              placeholder='Enter Name'
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='inputEmail'>Email</label>
            <input
              type='email'
              id='inputEmail'
              placeholder='Enter Email'
              autoComplete='off'
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='inputSalary'>Salary</label>
            <input
              type='text'
              id='inputSalary'
              placeholder='Enter Salary'
              autoComplete='off'
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='inputAddress'>Address</label>
            <input
              type='text'
              id='inputAddress'
              placeholder='1234 Main St'
              autoComplete='off'
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='category'>Category</label>
            <select
              id='category'
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <button type='submit' className='submitButton'>
            Edit Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
