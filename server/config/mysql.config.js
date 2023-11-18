// This is where we make our database connection and we put it in a different file for seperation of concerns.

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "GearGrade"
})

db.connect((err) => {
    if (err) {
        console.error("error line 14", err)
        return
    }
    console.log("connected to DB");
})
console.log('config file');