const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

const viewRoles = () => {
    console.clear();

    const sql = `SELECT id AS ID,
                    title AS Title,
                    department_name AS Department,
                    salery AS Salary
                    FROM roles`;

    db.query(sql, function (err, res) {
        if (err) throw err;

        console.table(`
        EMPLOYEE ROLES`, res
        );

        return res;
    });
};

const addRole = () => {
    console.clear();

    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: ` Enter title of new role`
        },
        {
            type: "input",
            name: "salary",
            message: ` What is Salary for this role:`
        },
        {
            type: "list",
            name: "department",
            message: ` What department this role in?`,
            choices:[
                "Sales",
                "Engineering",
                "Legal",
                "Finance"
            ]
        }
    ])

    .then((answers) => {
        db.query(
            `INSERT INTO roles (title, salary, department_name)
                VALUES (?, ?, ?, ?)`,
            [answers.title, answers.salary, answers.department],
            function (err, res) {
                if (err) throw err;

                console.log (`
                Add new role: ${answers.title}
                
                Rows affected: ${res.affectedRows}

                `);

                return res;
            }
        );
    });
};

module.export = { viewRoles, addRole };