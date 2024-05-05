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
    FOREIGN KEY (category_id) REFERENCES category(id)
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
  status ENUM('pending', 'approved', 'rejected')
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  assigned_to INT, -- Foreign key to employee table
  status ENUM('pending', 'in_progress', 'completed')
);

CREATE TABLE department_shifts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  shift_start DATETIME NOT NULL,
  shift_end DATETIME NOT NULL
);

-- Insert data into the admin table
INSERT INTO admin (email, password) VALUES
    ('admin1@example.com', 'password123'),
    ('admin2@example.com', 'password456');

-- Insert data into the employee table
INSERT INTO employee (name, email, password, address, salary, image, category_id) VALUES
    ('Swati Saxena', 'swati@gmail.com', '123456', '1660, Kendall Dr', 90000.00, 'swati_profile.jpg', 1),
    ('Alice Johnson', 'alice@example.com', 'password123', '123 Main St, City A', 55000.00, 'alice_profile.jpg', 1),
    ('Bob Smith', 'bob@example.com', 'password456', '456 Elm St, City B', 60000.00, 'bob_profile.jpg', 2),
    ('Charlie Brown', 'charlie@example.com', 'password789', '789 Oak St, City C', 65000.00, 'charlie_profile.jpg', 3),
    ('David Lee', 'david@example.com', 'passwordabc', '321 Maple St, City D', 70000.00, 'david_profile.jpg', 4),
    ('Emma Wilson', 'emma@example.com', 'passworddef', '654 Pine St, City E', 75000.00, 'emma_profile.jpg', 5),
    ('Frank Miller', 'frank@example.com', 'passwordghi', '987 Cedar St, City F', 80000.00, 'frank_profile.jpg', 6),
    ('Grace Taylor', 'grace@example.com', 'passwordjkl', '789 Willow St, City G', 85000.00, 'grace_profile.jpg', 7),
    ('Harry Thompson', 'harry@example.com', 'passwordmno', '456 Birch St, City H', 90000.00, 'harry_profile.jpg', 8),
    ('Ivy White', 'ivy@example.com', 'passwordpqr', '321 Cherry St, City I', 95000.00, 'ivy_profile.jpg', 9),
    ('Jack Brown', 'jack@example.com', 'passwordstu', '123 Pineapple St, City J', 100000.00, 'jack_profile.jpg', 10),
    ('Kate Green', 'kate@example.com', 'passwordvwx', '654 Mango St, City K', 105000.00, 'kate_profile.jpg', 11),
    ('Liam Davis', 'liam@example.com', 'passwordyz1', '987 Banana St, City L', 110000.00, 'liam_profile.jpg', 12),
    ('Mia Clark', 'mia@example.com', 'password234', '789 Orange St, City M', 115000.00, 'mia_profile.jpg', 13),
    ('Noah Moore', 'noah@example.com', 'password567', '456 Lemon St, City N', 120000.00, 'noah_profile.jpg', 14),
    ('Olivia Hill', 'olivia@example.com', 'password890', '321 Lime St, City O', 125000.00, 'olivia_profile.jpg', 15),
    ('Peter King', 'peter@example.com', 'passwordabc1', '123 Grape St, City P', 130000.00, 'peter_profile.jpg', 16),
    ('Quinn Young', 'quinn@example.com', 'passworddef2', '654 Apple St, City Q', 135000.00, 'quinn_profile.jpg', 17),
    ('Ryan Harris', 'ryan@example.com', 'passwordghi3', '987 Pear St, City R', 140000.00, 'ryan_profile.jpg', 18),
    ('Sophia Walker', 'sophia@example.com', 'passwordjkl4', '789 Watermelon St, City S', 145000.00, 'sophia_profile.jpg', 19),
    ('Thomas Turner', 'thomas@example.com', 'passwordmno5', '456 Kiwi St, City T', 150000.00, 'thomas_profile.jpg', 20);

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

INSERT INTO holidays (date, description) VALUES
('2024-12-25', 'Christmas Day'),
('2025-01-01', 'New Year\'s Day'),
('2025-07-04', 'Independence Day'),
('2025-11-27', 'Thanksgiving Day'),
('2025-12-25', 'Christmas Day'),
('2026-01-01', 'New Year\'s Day'),
('2026-07-04', 'Independence Day'),
('2026-11-26', 'Thanksgiving Day'),
('2026-12-25', 'Christmas Day'),
('2027-01-01', 'New Year\'s Day');

INSERT INTO leave_requests (employee_id, start_date, end_date, reason, status) VALUES
(1, '2025-03-10', '2025-03-15', 'Vacation', 'pending'),
(2, '2025-04-20', '2025-04-25', 'Personal Leave', 'pending'),
(3, '2025-05-15', '2025-05-17', 'Sick Leave', 'pending'),
(4, '2025-06-10', '2025-06-15', 'Family Emergency', 'pending'),
(5, '2025-07-20', '2025-07-25', 'Vacation', 'pending'),
(6, '2025-08-15', '2025-08-17', 'Personal Leave', 'pending'),
(7, '2025-09-10', '2025-09-15', 'Sick Leave', 'pending'),
(8, '2025-10-20', '2025-10-25', 'Vacation', 'pending'),
(9, '2025-11-15', '2025-11-17', 'Personal Leave', 'pending'),
(10, '2025-12-10', '2025-12-15', 'Sick Leave', 'pending');

INSERT INTO tasks (title, description, due_date, assigned_to, status) VALUES
('Complete project proposal', 'Prepare a detailed project proposal document for the upcoming project.', '2025-03-20', 1, 'pending'),
('Review code for bug fixes', 'Review and provide feedback on the recent code changes for bug fixes.', '2025-04-10', 2, 'pending'),
('Update project documentation', 'Update project documentation with the latest changes and enhancements.', '2025-05-01', 3, 'pending'),
('Test new feature', 'Perform testing on the newly developed feature to ensure it meets requirements.', '2025-06-15', 4, 'pending'),
('Prepare presentation slides', 'Create slides for the upcoming project presentation to stakeholders.', '2025-07-10', 5, 'pending'),
('Code refactoring', 'Refactor existing codebase to improve maintainability and performance.', '2025-08-01', 6, 'pending'),
('Client meeting', 'Attend a meeting with the client to discuss project progress and updates.', '2025-09-20', 7, 'pending'),
('User training session', 'Conduct a training session for users on how to use the new software features.', '2025-10-05', 8, 'pending'),
('Bug triage', 'Prioritize and assign bugs reported by users to the development team for resolution.', '2025-11-15', 9, 'pending'),
('Code review session', 'Participate in a code review session to ensure code quality and best practices.', '2025-12-01', 10, 'pending');

INSERT INTO department_shifts (employee_id, shift_start, shift_end) VALUES
(1, '2025-03-10 08:00:00', '2025-03-10 16:00:00'),
(2, '2025-03-10 12:00:00', '2025-03-10 20:00:00'),
(3, '2025-03-10 09:00:00', '2025-03-10 17:00:00'),
(4, '2025-03-10 08:30:00', '2025-03-10 16:30:00'),
(5, '2025-03-10 10:00:00', '2025-03-10 18:00:00'),
(6, '2025-03-10 11:00:00', '2025-03-10 19:00:00'),
(7, '2025-03-10 07:00:00', '2025-03-10 15:00:00'),
(8, '2025-03-10 08:00:00', '2025-03-10 16:00:00'),
(9, '2025-03-10 09:30:00', '2025-03-10 17:30:00'),
(10, '2025-03-10 08:00:00', '2025-03-10 16:00:00');

select * from employee;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM your_table_name WHERE your_condition;

DELETE FROM category WHERE name = 'Category 1';

DELETE FROM employee WHERE category_id = (SELECT id FROM category WHERE name = 'Category 1');
DELETE FROM category WHERE name = 'Category 1';

DELETE FROM employee WHERE category_id = (SELECT id FROM category WHERE name = 'Category 2');
DELETE FROM category WHERE name = 'Category 2';
 

DELETE FROM employee WHERE category_id = (SELECT id FROM category WHERE name = 'Category 3');
DELETE FROM category WHERE name = 'Category 3';

DELETE FROM employee WHERE category_id = (SELECT id FROM category WHERE name = 'swati');
DELETE FROM category WHERE name = 'swati';

select * from category;