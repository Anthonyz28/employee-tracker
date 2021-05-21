const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

const viewEmployees = () => {
    console.clear();

    const sql = `SELECT id AS ID,
                    last_name AS Last,
                    first_name AS First,
                    title AS Title,
                    manager_title AS Supervisor
                    FROM employees`;

    db.query(sql, function (err, res) {
        if (err) throw err;

        console.table(`
        LIST OF EMPLOYEES`, res
        );

        return res;
    });
};

const addEmployee = () => {
    console.clear();

    return inquirer.prompt([
        {
            type: "input",
            name: "lastName",
            message: `Enter Employee's last name:`
        },
        {
            type: "input",
            name: "firstName",
            message: `Enter Employee's first name:`
        },
        {
            type: "input",
            name: "role",
            message: `Enter Employee's role:`
        },
        {  
            type: "list",
            name: "manager",
            message: ` Who is the employee's direct manager's role`,
            choices: ["Sales Lead", "Lead Engineer", "Legal Team Lead", "Accountant","null"]

        }
    ])

        .then(anwsers => {
            db.query(
                `INSERT INTO employees (last_name, first_name, title, manager_title)
                    VALUES (?, ?, ?, ?)`,
                [answers.lastName, answers.firstName, answers.role, answers.manager],
                function (err, res) {
                    if (err) throw err;

                    console.log(`Added a new Employee: ${answers.firstName} ${answers.lastName}
                    
                        Rows affected: ${res.affectedRows}
                        `);

                        return res;
                }
            );
        });
};

const updateEmployee = () => {
    console.clear();

    db.query(
        `SELECT last_name, first_name, title, id FROM employees`,
        function (err, results) {
            if (err) throw err;

            const employees = results.map(data => {
                let employee = `${data.lastName}, ${data.first_name}, ${data.title}, ${data.id}`;

                return employee;
            });

            return inquirer.prompt([
                {
                    type: "list",
                    name: "pickEmployee",
                    message: ` Pick an employee to update`,
                    choices: employees
                },
                {
                    type: "input",
                    name: "newTitle",
                    message: `What is Employee's new role?`
                }
            ])

            .then(employee => {
                const employeeData = employee.whichEmployee.split(",");
                const employeeName = employeeData[1] + employeeData[0];
                const employeeID = parseInt(employeeData[3]);

                const oldRole = employeeData[2];
                const newRole = employee.newTitle;

                db.query(
                    `UPDATE employees SET title = ? WHERE id = ?`,
                    [employee.newTitle, employeeID],
                    function (err, res) {
                        if (err) throw err;

                        console.log(` Updated Employee Role from ${oldRole} to ${newRole}

                        Rows affected: ${res.affectedRows}
                        `)

                        return res;
                    }
                );
            });
        }
    );
};

module.exports = { viewEmployees, addEmployee, updateEmployee };