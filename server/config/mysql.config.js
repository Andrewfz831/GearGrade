// This is where we make our database connection and we put it in a different file for seperation of concerns.

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "GearGrade"
})
console.log('config file');