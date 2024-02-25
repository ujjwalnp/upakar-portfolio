const express = require('express')
const router = express.Router()
const bogController = require('../controllers/blog')

router
/* CREATE */
    .post('/', bogController.createBlog)

/* READ */
    .get('/', bogController.getAllBlogs)
    .get('/:id', bogController.getSpecificBlog)

/* UPDATE */
    .patch('/:id', bogController.updateBlog)

/* DELETE */
    .delete('/:id', bogController.deleteBlog)

module.exports = router