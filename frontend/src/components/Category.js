import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';
import './style.css';

const Category = () => {
  const [category, setCategory] = useState([]);

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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <div className='categoryContainer'>
      <div>
        <div className='headingContainer'>
          <h3>Category List</h3>
        </div>
        <Button className='primaryBtn'>
          <Link to='/dashboard/add_category'>Add Category</Link>
        </Button>
        <div className='categoryTable'>
          <Table dataSource={category} columns={columns} pagination={true} />
        </div>
      </div>
    </div>
  );
};

export default Category;
