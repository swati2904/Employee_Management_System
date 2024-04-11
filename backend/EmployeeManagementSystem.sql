USE employeeManagementSystem;

-- Sign Up Table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Login Table
CREATE TABLE login (
    login_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    last_login_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

FLUSH PRIVILEGES;
