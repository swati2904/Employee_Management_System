import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import './style.css';

const ViewEmployeeTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch('http://localhost:3001/employee/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  };

  return (
    <>
      <h1>Employee Tasks</h1>
      <div className='task-cards-container'>
        {tasks.map((task) => (
          <Card key={task.id} className='task-card'>
            <h2>{task.title}</h2>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Due Date:</strong>{' '}
              {new Date(task.due_date).toLocaleDateString()}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ViewEmployeeTasks;
