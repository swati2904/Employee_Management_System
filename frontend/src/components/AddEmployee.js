import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    password: '',
    salary: '',
    address: '',
    category_id: '',
    image: '',
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('image', employee.image);
    formData.append('category_id', employee.category_id);

    axios
      .post('http://localhost:3001/auth/add_employee', formData)
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
    <div className='addEmployeeContainer'>
      <div className='formContainer'>
        <h3 className='text-center'>Add Employee</h3>
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='inputName'>Name</label>
            <input
              type='text'
              className='formControl'
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
              className='formControl'
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
            <label htmlFor='inputPassword'>Password</label>
            <input
              type='password'
              className='formControl'
              id='inputPassword'
              placeholder='Enter Password'
              value={employee.password}
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='inputSalary'>Salary</label>
            <input
              type='text'
              className='formControl'
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
              className='formControl'
              id='inputAddress'
              placeholder='Enter Address'
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
              className='formControl'
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              <option value=''>Select Category</option>
              {category.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className='formGroup'>
            <label htmlFor='inputImage'>Select Image</label>
            <input
              type='file'
              id='inputImage'
              name='image'
              accept='image/*'
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.files[0] })
              }
            />
          </div>
          <div className='formGroup'>
            <button type='submit' className='submitButton'>
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
