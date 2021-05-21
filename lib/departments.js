const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");


// Department Start

const viewDepartments = () => {
    console.clear();

    const sql = `SELECT id AS ID,
                    department_name AS Department
                    FROM departments`;

                    db.query(sql, function (err, res) {
                        if (err) throw err;

                        console.table(`
                        
                        LIST OF DEPARTMENTS`, res
                        );

                        return res;
                    });
};

const addDepartment = () => {
    console.clear();

    return inquirer.prompt([
        {
            type: "input",
            name: "newDepartment",
            message: ` Enter Department name:`,
        }
    ])

    .then(answer => {
        db.query(
            `INSERT INTO departments (department_name)
                VALUES (?)`,
            [answer.newDepartment],
            function (err, res) {
                if (err) throw err;

                console.log(`
                Added new Department ${answer.newDepartment}
                
                    Rows affected: ${res.affectedRows}
                    `);

                    return res;
            }
        );
    });
};

module.exports = { viewDepartments, addDepartment };