import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AddCategory = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/auth/add_category', { category })
      .then((result) => {
        if (result.data.Status) {
          navigate('/dashboard/category');
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='addCategoryContainer'>
      <div className='formContainer'>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='category'>
              <strong>Category:</strong>
            </label>
            <input
              type='text'
              name='category'
              placeholder='Enter Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='formControl'
            />
          </div>
          <button className='submitButton'>Add Category</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
