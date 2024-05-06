DROP DATABASE IF EXISTS employeemanagementsystem;

-- Create a new database
CREATE DATABASE employeemanagementsystem;

use employeemanagementsystem;

-- Create the admin table
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the category table
CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the employee table
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    category_id INT,
    admin_id INT, -- New column for admin foreign key
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (admin_id) REFERENCES admin(id) -- New foreign key constraint
);

CREATE TABLE holidays (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL,
  description VARCHAR(255)
);

CREATE TABLE leave_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  reason VARCHAR(255),
  status ENUM('pending', 'approved', 'rejected'),
  FOREIGN KEY (employee_id) REFERENCES employee(id) -- Foreign key constraint to employee table
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  assigned_to INT, -- Foreign key to employee table
  status ENUM('pending', 'in_progress', 'completed'),
  FOREIGN KEY (assigned_to) REFERENCES employee(id) -- Foreign key constraint to employee table
);

CREATE TABLE department_shifts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  shift_start DATETIME NOT NULL,
  shift_end DATETIME NOT NULL,
  FOREIGN KEY (employee_id) REFERENCES employee(id) -- Foreign key constraint to employee table
);

INSERT INTO admin (email, password) VALUES
('admin@gmail.com', '123456'),
('admin1@gmail.com', '123456'),
('admin2@gmail.com', '123456'),
('admin3@gmail.com', '123456'),
('admin4@gmail.com', '123456'),
('admin5@gmail.com', '123456');

-- Insert data into the category table
INSERT INTO category (name) VALUES 
('Software Development'),
('Customer Service'),
('Sales & Marketing'),
('Human Resources'),
('Finance & Accounting'),
('Operations'),
('Information Technology'),
('Management'),
('Engineering'),
('Healthcare'),
('Education'),
('Hospitality'),
('Retail'),
('Manufacturing'),
('Transportation'),
('Construction'),
('Media & Communications'),
('Design'),
('Research & Development'),
('Legal');

INSERT INTO employee (name, email, password, address, salary, image, category_id, admin_id) VALUES
('Swati Saxena', 'swati@gmail.com', 'swati@123', '1660, kendall dr, USA', 50000.00, 'swati.jpg', 1, NULL),
('John Doe', 'john.doe@example.com', 'johnpassword', '123 Main St, Anytown, USA', 50000.00, 'john.jpg', 1, NULL),
('Jane Smith', 'jane.smith@example.com', 'janepassword', '456 Elm St, Othertown, USA', 60000.00, 'jane.jpg', 2, NULL),
('Michael Johnson', 'michael.johnson@example.com', 'michaelpassword', '789 Oak St, Anothertown, USA', 55000.00, 'michael.jpg', 3, NULL),
('Emily Brown', 'emily.brown@example.com', 'emilypassword', '101 Pine St, Somewhere, USA', 52000.00, 'emily.jpg', 4, NULL),
('David Wilson', 'david.wilson@example.com', 'davidpassword', '246 Maple St, Anytown, USA', 48000.00, 'david.jpg', 5, NULL),
('Sarah Taylor', 'sarah.taylor@example.com', 'sarahpassword', '369 Oak St, Othertown, USA', 52000.00, 'sarah.jpg', 6, NULL),
('Chris Clark', 'chris.clark@example.com', 'chrispassword', '482 Pine St, Anothertown, USA', 50000.00, 'chris.jpg', 7, NULL),
('Jessica Martinez', 'jessica.martinez@example.com', 'jessicapassword', '573 Elm St, Somewhere, USA', 51000.00, 'jessica.jpg', 8, NULL),
('Kevin Lee', 'kevin.lee@example.com', 'kevinpassword', '688 Cedar St, Anytown, USA', 49000.00, 'kevin.jpg', 9, NULL),
('Amanda Rodriguez', 'amanda.rodriguez@example.com', 'amandapassword', '777 Maple St, Othertown, USA', 53000.00, 'amanda.jpg', 10, NULL),
('Mark Garcia', 'mark.garcia@example.com', 'markpassword', '894 Oak St, Anothertown, USA', 54000.00, 'mark.jpg', 11, NULL),
('Laura Martinez', 'laura.martinez@example.com', 'laurapassword', '112 Pine St, Somewhere, USA', 57000.00, 'laura.jpg', 12, NULL),
('Eric Johnson', 'eric.johnson@example.com', 'ericpassword', '246 Cedar St, Anytown, USA', 51000.00, 'eric.jpg', 13, NULL),
('Anna Davis', 'anna.davis@example.com', 'annapassword', '399 Elm St, Othertown, USA', 53000.00, 'anna.jpg', 14, NULL),
('Daniel Brown', 'daniel.brown@example.com', 'danielpassword', '582 Pine St, Anothertown, USA', 52000.00, 'daniel.jpg', 15, NULL);

-- Update the admin_id for selected employees in the employee table
UPDATE employee 
SET admin_id = (SELECT id FROM admin ORDER BY RAND() LIMIT 1)
WHERE id IN (1, 3, 5, 7, 9);

-- Insert data into the holidays table
INSERT INTO holidays (date, description) VALUES
('2024-12-25', 'Christmas Day'),
('2024-07-04', 'Independence Day'),
('2024-01-01', 'New Year''s Day'),
('2024-09-07', 'Labor Day'),
('2024-11-11', 'Veterans Day'),
('2024-05-28', 'Memorial Day'),
('2024-02-14', 'Valentine''s Day'),
('2024-10-31', 'Halloween'),
('2024-04-22', 'Earth Day'),
('2024-06-14', 'Flag Day');

-- Insert data into the leave_requests table
INSERT INTO leave_requests (employee_id, start_date, end_date, reason, status) VALUES
(1, '2024-05-10', '2024-05-12', 'Vacation', 'approved'),
(2, '2024-06-15', '2024-06-18', 'Family event', 'pending'),
(3, '2024-08-20', '2024-08-22', 'Sick leave', 'pending'),
(4, '2024-07-10', '2024-07-12', 'Vacation', 'approved'),
(5, '2024-08-15', '2024-08-17', 'Family event', 'pending'),
(6, '2024-09-01', '2024-09-03', 'Personal reasons', 'pending'),
(7, '2024-10-10', '2024-10-12', 'Doctor appointment', 'pending'),
(8, '2024-11-15', '2024-11-17', 'Vacation', 'pending'),
(9, '2024-12-20', '2024-12-24', 'Holiday travel', 'pending'),
(10, '2024-05-05', '2024-05-07', 'Family gathering', 'approved'),
(11, '2024-06-10', '2024-06-12', 'Sick leave', 'pending'),
(12, '2024-08-15', '2024-08-17', 'Vacation', 'pending'),
(13, '2024-09-10', '2024-09-12', 'Personal reasons', 'pending'),
(14, '2024-10-20', '2024-10-22', 'Conference', 'pending'),
(15, '2024-12-01', '2024-12-03', 'Family event', 'pending');

-- Insert data into the tasks table
INSERT INTO tasks (title, description, due_date, assigned_to, status) VALUES
('Project Alpha', 'Complete project planning phase', '2024-06-30', 1, 'in_progress'),
('Marketing Campaign', 'Develop social media strategy', '2024-07-15', 4, 'pending'),
('IT Support Tickets', 'Resolve outstanding support tickets', '2024-05-20', 3, 'completed'),
('Product Launch', 'Plan and execute product launch event', '2024-08-31', 10, 'pending'),
('Training Program', 'Develop training materials for new hires', '2024-06-15', 11, 'completed'),
('Research Project', 'Conduct market research', '2024-09-30', 12, 'in_progress'),
('Software Development', 'Implement new feature', '2024-07-10', 13, 'pending'),
('Public Relations Campaign', 'Plan PR campaign', '2024-11-15', 14, 'pending'),
('Employee Training', 'Organize training sessions', '2024-06-20', 15, 'pending'),
('Quality Control Inspection', 'Perform quality checks', '2024-08-10', 2, 'completed');

-- Insert data into the department_shifts table
INSERT INTO department_shifts (employee_id, shift_start, shift_end) VALUES
(1, '2024-05-05 08:00:00', '2024-05-05 16:00:00'),
(2, '2024-05-05 09:00:00', '2024-05-05 17:00:00'),
(3, '2024-05-05 10:00:00', '2024-05-05 18:00:00'),
(4, '2024-05-05 11:00:00', '2024-05-05 19:00:00'),
(5, '2024-05-05 12:00:00', '2024-05-05 20:00:00'),
(6, '2024-05-05 08:00:00', '2024-05-05 16:00:00'),
(7, '2024-05-05 09:00:00', '2024-05-05 17:00:00'),
(8, '2024-05-05 10:00:00', '2024-05-05 18:00:00'),
(9, '2024-05-05 11:00:00', '2024-05-05 19:00:00'),
(10, '2024-05-05 12:00:00', '2024-05-05 20:00:00'),
(11, '2024-05-05 08:00:00', '2024-05-05 16:00:00'),
(12, '2024-05-05 09:00:00', '2024-05-05 17:00:00'),
(13, '2024-05-05 10:00:00', '2024-05-05 18:00:00'),
(14, '2024-05-05 11:00:00', '2024-05-05 19:00:00'),
(15, '2024-05-05 12:00:00', '2024-05-05 20:00:00');

-- Add isAdmin column to the admin table
ALTER TABLE admin
ADD COLUMN isAdmin BOOLEAN NOT NULL DEFAULT false;


-- Update isAdmin for admin users
-- Update isAdmin for admin users using a WHERE clause with a KEY column
UPDATE admin
SET isAdmin = true
WHERE id IN (1, 2, 3, 4, 5, 6);


 
