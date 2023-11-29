// This is where we make our database connection and we put it in a different file for seperation of concerns.

const mysql = require('mysql2');
// we are bringing in the variables from the .env file 
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// db.query("SELECT * FROM users", (err, results) => {
//     if (err) throw err;
//     console.log(results);
// })

module.exports = db;


console.log('config file');