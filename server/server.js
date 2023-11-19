const express = require('express');
const cors = require('cors');
const mysql = require('mysql2')

const app = express();
app.use(cors());

const db = require('./config/mysql.config')

app.get('/', (req, res) => {
    return res.json(
        "From the Backend"
    )
})

app.get('/api/users', (req, res) => {
    db.query("SELECT * FROM userTable", (err, results) => {
        if (err) throw err;
        console.log(results);
    })

})

app.listen(8080, () => {
    console.log("Listening to port 8080");
})