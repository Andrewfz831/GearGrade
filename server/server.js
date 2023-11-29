const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

//code under is importing the code from mysql.config.js and runs it 
const db = require('./config/mysql.config')
const userRoutes = require('./routes/users.routes')
userRoutes(app)


app.listen(8080, () => {
    console.log("Listening to port 8080");
})