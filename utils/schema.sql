---- Database ----
DROP DATABASE IF EXISTS employeeDb;

CREATE DATABASE employeeDB;

USE employeeDB;

----- Create Department Table -----
CREATE TABLE Department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
    ); 

----- Create Role Table ----
CREATE TABLE Role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30), 
    salary DECIMAL,
    department_id INT
    PRIMARY KEY (id)
    );

---- Create Employee Table
CREATE TABLE Employee(
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL
    PRIMARY KEY (id)
    );
