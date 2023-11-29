const CONTROLLER = require('../controllers/users.controller')
const express = require('express')
const router = express.Router();


module.exports = app => {

    router.post('/register',CONTROLLER.register)
    // router.post('/api/login', CONTROLLER.login)
    // router.post('/api/logout', CONTROLLER.logout)

    // Don't forget to add this line to use the router in the app
    app.use('/api', router);
}