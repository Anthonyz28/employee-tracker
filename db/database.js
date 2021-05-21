const mySQL = require("mysql2");

const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Maverick18",
    database: "employeeDB"
});

module.exports = db;