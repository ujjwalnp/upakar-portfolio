const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router
/* CREATE */
    .post('/skill/:userId', userController.addSkill)
    .post('/service/:userId', userController.addService)

/* UPDATE */
    .patch('/:userId', userController.updateUserDetails)

/* DELETE */
    .delete('/skill/:id', userController.deleteSkill)
    .delete('/service/:id', userController.deleteService)

module.exports = router