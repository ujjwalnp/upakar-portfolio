const express = require('express')
const router = express.Router()
const { rateLimitPerRequestType } = require('../middlewares/rateLimit')
const userController = require('../controllers/user')
const { verifyToken } = require('../middlewares/auth')

router
/* CREATE */
    .post('/skill/:userId', verifyToken, rateLimitPerRequestType('api'), userController.addSkill)
    .post('/service/:userId', verifyToken, rateLimitPerRequestType('api'), userController.addService)

/* READ */
    .get('/', rateLimitPerRequestType('general'), userController.getUserDetails)

/* UPDATE */
    .patch('/:userId', verifyToken, rateLimitPerRequestType('api'), userController.updateUserDetails)

/* DELETE */
    .delete('/skill/:id', verifyToken, rateLimitPerRequestType('api'), userController.deleteSkill)
    .delete('/service/:id', verifyToken, rateLimitPerRequestType('api'), userController.deleteService)

exports.router = router