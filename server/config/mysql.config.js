// This is where we make our database connection and we put it in a different file for seperation of concerns.

const mysql = require('mysql2');
// we are bringing in the variables from the .env file 
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// Connect to the MySQL server
db.connect((err) => {
    if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
}
    console.log('Connected to MySQL');
});

module.exports = db;


console.log('config file');