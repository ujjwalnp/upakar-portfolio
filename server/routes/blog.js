const express = require('express')
const router = express.Router()
const bogController = require('../controllers/blog')
const { verifyToken } = require('../middlewares/auth')

router
/* CREATE */
    .post('/', verifyToken, bogController.createBlog)

/* READ */
    .get('/', verifyToken, bogController.getAllBlogs)
    .get('/:id', verifyToken, bogController.getSpecificBlog)

/* UPDATE */
    .patch('/:id', verifyToken, bogController.updateBlog)

/* DELETE */
    .delete('/:id', verifyToken, bogController.deleteBlog)

exports.router = router