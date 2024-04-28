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

-- Insert data into the category table
INSERT INTO category (name) VALUES
    ('Category 1'),
    ('Category 2'),
    ('Category 3');

-- Insert data into the admin table
INSERT INTO admin (email, password) VALUES
    ('admin1@example.com', 'password123'),
    ('admin2@example.com', 'password456');

-- Insert data into the employee table
INSERT INTO employee (name, email, password, address, salary, image, category_id) VALUES
    ('Employee 1', 'employee1@example.com', 'password123', 'Address 1', 50000.00, 'image1.jpg', 1),
    ('Employee 2', 'employee2@example.com', 'password456', 'Address 2', 60000.00, 'image2.jpg', 2),
    ('Employee 3', 'employee3@example.com', 'password789', 'Address 3', 70000.00, 'image3.jpg', 3);

