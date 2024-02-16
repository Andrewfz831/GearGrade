const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
require("dotenv").config()

const app = express();
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json()); // Add this line to parse JSON requests

const userRoutes = require('./routes/users.routes')
const postRoutes = require('./routes/posts.routes')
userRoutes(app)
postRoutes(app)


app.listen(8080, () => {
    console.log("Listening to port 8080");
})