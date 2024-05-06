import React, { useState, useEffect } from 'react';
import FormattedDate from './FormattedDate';
import { Table } from 'antd';

const ViewEmployeeLeave = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = () => {
    fetch('http://localhost:3001/employee/leave_requests')
      .then((response) => response.json())
      .then((data) => setLeaveRequests(data))
      .catch((error) => console.error('Error fetching leave requests:', error));
  };

  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'employee_id',
      key: 'employee_id',
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      render: (start_date) => <FormattedDate dateString={start_date} />,
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_date',
      render: (end_date) => <FormattedDate dateString={end_date} />,
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className='leave-requests-container'>
      <h1>Leave Requests</h1>
      <Table dataSource={leaveRequests} columns={columns} pagination={true} />
    </div>
  );
};

export default ViewEmployeeLeave;
