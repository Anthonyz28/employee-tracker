---- Database ----
DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

----- Create Department Table -----
CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
    ); 

----- Create Roles Table ----
CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30), 
    salary DECIMAL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
    );

---- Create Employees Table
CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR(30),
    manager_title VARCHAR(30),
    PRIMARY KEY (id)
    );
