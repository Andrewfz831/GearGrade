const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const db = require('./config/mysql.config')

app.get('/', (req,res) => {
    return res.json(
        "From the Backend"
    )
})

app.get('/users', (res,req) => {
    const getAllUsers = "SELECT * FROM userTable";

})

app.listen(8080, () => {
    console.log("Listening to port 8080");
})