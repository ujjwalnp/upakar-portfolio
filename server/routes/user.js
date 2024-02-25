const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { verifyToken } = require('../middlewares/auth')

router
/* CREATE */
    .post('/skill/:userId', verifyToken, userController.addSkill)
    .post('/service/:userId', verifyToken, userController.addService)

/* READ */
    .get('/', userController.getUserDetails)

/* UPDATE */
    .patch('/:userId', verifyToken, userController.updateUserDetails)

/* DELETE */
    .delete('/skill/:id', verifyToken, userController.deleteSkill)
    .delete('/service/:id', verifyToken, userController.deleteService)

module.exports = router