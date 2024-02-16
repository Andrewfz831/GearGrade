const CONTROLLER = require('../controllers/posts.controller')
const express = require('express')
const router = express.Router();
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'uploads/')
    },
    filename: function(req,file,cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})


module.exports = app => {

    router.post('/createPost',upload.single('image'), CONTROLLER.createPost)

    // Don't forget to add this line to use the router in the app
    app.use('/api', router);
}