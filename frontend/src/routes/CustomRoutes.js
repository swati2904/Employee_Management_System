import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Employee from '../components/Employee';
import Category from '../components/Category';
import Profile from '../components/viewEmployeeShift';
import AddCategory from '../components/AddCategory';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Start from '../components/Start';
import EmployeeLogin from '../components/EmployeeLogin';
import EmployeeDetail from '../components/EmployeeDetail';
import PrivateRoute from '../components/PrivateRoute';
import EmployeeDashboard from '../components/EmployeeDashboard';
import EmployeeLeaveRequestRecord from '../components/EmployeeLeaveRequestRecord';
import EmployeeShift from '../components/EmployeeShift';
import EmployeeHolidayDetails from '../components/EmployeeHolidayDetails';
import EmployeeTaskDetails from '../components/EmployeeTaskDetails';
import ViewHolidays from '../components/ViewHolidays';
import ViewEmployeeLeave from '../components/ViewEmployeeLeave';
import ViewEmployeeTasks from '../components/ViewEmployeeTasks';
import ViewEmployeeShifts from '../components/viewEmployeeShift';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        {/* <Route path='/dashboard/profile' element={<Profile />}></Route> */}
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route
          path='/dashboard/edit_employee/:id'
          element={<EditEmployee />}
        ></Route>
        <Route
          path='/dashboard/holidays'
          element={<EmployeeHolidayDetails />}
        ></Route>

        <Route
          path='/dashboard/view-tasks'
          element={<ViewEmployeeTasks />}
        ></Route>
        <Route
          path='/dashboard/view-leave-details'
          element={<ViewEmployeeLeave />}
        ></Route>
        <Route
          path='/dashboard/view-shift'
          element={<ViewEmployeeShifts />}
        ></Route>
      </Route>

      {/* employee dashboard */}
      <Route
        path='/employeedashboard'
        element={
          <PrivateRoute>
            <EmployeeDashboard />
          </PrivateRoute>
        }
      >
        <Route
          path='/employeedashboard/leave-requests'
          element={<EmployeeLeaveRequestRecord />}
        ></Route>
        <Route
          path='/employeedashboard/view-holidays'
          element={<ViewHolidays />}
        ></Route>
        <Route
          path='/employeedashboard/shifts'
          element={<EmployeeShift />}
        ></Route>
        <Route
          path='/employeedashboard/tasks'
          element={<EmployeeTaskDetails />}
        ></Route>
        {/* <Route path='/employeedashboard/profile' element={<Profile />}></Route> */}
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
