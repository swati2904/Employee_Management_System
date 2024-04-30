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

-- Insert data into the admin table
INSERT INTO admin (email, password) VALUES
    ('admin1@example.com', 'password123'),
    ('admin2@example.com', 'password456');

-- Insert data into the employee table
INSERT INTO employee (name, email, password, address, salary, image, category_id) VALUES
    ('Alice Johnson', 'alice@example.com', 'password123', '123 Main St, City A', 55000.00, 'alice_profile.jpg', 5),
    ('Bob Smith', 'bob@example.com', 'password456', '456 Elm St, City B', 60000.00, 'bob_profile.jpg', 6),
    ('Charlie Brown', 'charlie@example.com', 'password789', '789 Oak St, City C', 65000.00, 'charlie_profile.jpg', 7),
    ('David Lee', 'david@example.com', 'passwordabc', '321 Maple St, City D', 70000.00, 'david_profile.jpg', 9),
    ('Emma Wilson', 'emma@example.com', 'passworddef', '654 Pine St, City E', 75000.00, 'emma_profile.jpg', 8),
    ('Frank Miller', 'frank@example.com', 'passwordghi', '987 Cedar St, City F', 80000.00, 'frank_profile.jpg', 10),
    ('Grace Taylor', 'grace@example.com', 'passwordjkl', '789 Willow St, City G', 85000.00, 'grace_profile.jpg', 21),
    ('Harry Thompson', 'harry@example.com', 'passwordmno', '456 Birch St, City H', 90000.00, 'harry_profile.jpg', 20),
    ('Ivy White', 'ivy@example.com', 'passwordpqr', '321 Cherry St, City I', 95000.00, 'ivy_profile.jpg', 13),
    ('Jack Brown', 'jack@example.com', 'passwordstu', '123 Pineapple St, City J', 100000.00, 'jack_profile.jpg', 17),
    ('Kate Green', 'kate@example.com', 'passwordvwx', '654 Mango St, City K', 105000.00, 'kate_profile.jpg', 12),
    ('Liam Davis', 'liam@example.com', 'passwordyz1', '987 Banana St, City L', 110000.00, 'liam_profile.jpg', 18),
    ('Mia Clark', 'mia@example.com', 'password234', '789 Orange St, City M', 115000.00, 'mia_profile.jpg', 11),
    ('Noah Moore', 'noah@example.com', 'password567', '456 Lemon St, City N', 120000.00, 'noah_profile.jpg', 8),
    ('Olivia Hill', 'olivia@example.com', 'password890', '321 Lime St, City O', 125000.00, 'olivia_profile.jpg', 3),
    ('Peter King', 'peter@example.com', 'passwordabc1', '123 Grape St, City P', 130000.00, 'peter_profile.jpg', 1),
    ('Quinn Young', 'quinn@example.com', 'passworddef2', '654 Apple St, City Q', 135000.00, 'quinn_profile.jpg', 2),
    ('Ryan Harris', 'ryan@example.com', 'passwordghi3', '987 Pear St, City R', 140000.00, 'ryan_profile.jpg', 3),
    ('Sophia Walker', 'sophia@example.com', 'passwordjkl4', '789 Watermelon St, City S', 145000.00, 'sophia_profile.jpg', 1),
    ('Thomas Turner', 'thomas@example.com', 'passwordmno5', '456 Kiwi St, City T', 150000.00, 'thomas_profile.jpg', 2);

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