const express = require('express')
const router = express.Router()
const rateLimit = require('express-rate-limit')
const userController = require('../controllers/user')
const { verifyToken } = require('../middlewares/auth')

router
/* CREATE */
    .post('/skill/:userId', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), userController.addSkill)
    .post('/service/:userId', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), userController.addService)

/* READ */
    .get('/', rateLimit({ windowMs: 60 * 1000, max: 10 }), userController.getUserDetails)

/* UPDATE */
    .patch('/:userId', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), userController.updateUserDetails)

/* DELETE */
    .delete('/skill/:id', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), userController.deleteSkill)
    .delete('/service/:id', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), userController.deleteService)

exports.router = router