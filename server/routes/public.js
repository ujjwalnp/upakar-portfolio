const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
const blogController = require('../controllers/blog')

router
    .get('/user', userController.getUserDetails)
    .get('/blog', blogController.getAllBlogs)
    .get('/blog/:id', blogController.getSpecificBlog)

module.exports = router