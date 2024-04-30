import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Category = () => {
  const [categoriesWithEmployees, setCategoriesWithEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees and categories data from backend
    axios
      .get('http://localhost:3001/auth/employee')
      .then((employeeResult) => {
        axios
          .get('http://localhost:3001/auth/category')
          .then((categoryResult) => {
            const categories = categoryResult.data.Result;
            // Group employees by category ID
            const employeesGroupedByCategory = {};
            employeeResult.data.Result.forEach((employee) => {
              if (!employeesGroupedByCategory[employee.category_id]) {
                employeesGroupedByCategory[employee.category_id] = [];
              }
              employeesGroupedByCategory[employee.category_id].push(employee);
            });
            // Match category name with employees
            const categoriesWithEmployeesData = categories.map((category) => ({
              categoryName: category.name,
              employees: employeesGroupedByCategory[category.id] || [],
            }));
            // Set state with categories and corresponding employees
            setCategoriesWithEmployees(categoriesWithEmployeesData);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='categoryContainer'>
      <div>
        <div className='headingContainer'>
          <h3>Category List</h3>
        </div>
        <div className='categoryCards'>
          {categoriesWithEmployees.map((category) => (
            <Card
              key={category.categoryName}
              title={category.categoryName}
              className='categoryCard'
            >
              <div className='employeeList'>
                {category.employees.map((employee) => (
                  <div key={employee.id} className='employeeItem'>
                    {/* <img
                      alt='employee'
                      src={`http://localhost:3001/Images/${employee.image}`}
                      className='employeeImage'
                    /> */}
                    <div className='employeeDetails'>
                      <p className='employeeName'>{employee.name}</p>

                      {/* <p className='employeeCategory'>
                        Category: {category.categoryName}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
