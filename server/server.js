const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req,res) => {
    return res.json(
        "From the Backend"
    )
})

app.listen(8080, () => {
    console.log("Listening to port 8080");
})