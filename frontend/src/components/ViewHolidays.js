import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import FormattedDate from './FormattedDate';
import './style.css';

const ViewHolidays = () => {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = () => {
    setLoading(true);
    fetch('http://localhost:3001/employee/holidays')
      .then((response) => response.json())
      .then((data) => {
        setHolidays(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching holidays:', error);
        setLoading(false);
      });
  };

  return (
    <div className='holiday-list-container'>
      <h1>Holiday List</h1>
      <div className='holiday-cards-container'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          holidays.map((holiday) => (
            <Card key={holiday.id} style={{ marginBottom: '20px' }}>
              <h2>{holiday.name}</h2>
              <p>
                Date: <FormattedDate dateString={holiday.date} />
              </p>{' '}
              <p>Type: {holiday.description}</p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewHolidays;
