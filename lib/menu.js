const db = require("../db/database");
const inquirer = require("inquirer");
const { viewDepartments, addDepartment } = require("./departments");
const { viewRoles, addRole } = require("./roles");
const { viewEmployees, addEmployee, updateEmployee } = require("./employees");

const startPrompt = () => {
    return inquirer.prompt({
          type: "list",
          message: "What would you like to do?",
          name: "choice",
          choices: [
              "View All Employees",
              "View All Roles",
              "View All Departments",
              "Add a Employee",
              "Add a Role",
              "Add a Department",
              "Update Employee's Role"
              
          ]
        
        }).then((options) => {
          switch(options.menu) {
              case "View All Employees":{
                  viewEmployees();
              break;}

              case "View All Roles":{
                  viewRoles();
              break;}

              case "View All Departments":{
                  viewDepartments();
              break;}

              case "Add a Employee":{
                  addEmployee();
              break;}

              case "Add a Role":{
                  addRole();
              break;}

              case "Add a Department":{
                  addDepartment();
              break;}

              case "Update Employee":{
                  updateEmployee();
              break;}

              }
        })
        .then(startPrompt)
        .catch(err => {
            console.log(err)
            throw err;
        })
};

module.exports = startPrompt;