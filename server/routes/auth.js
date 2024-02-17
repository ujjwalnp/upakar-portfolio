const express = require('express')
const router = express.Router()
const { rateLimitPerRequestType } = require('../middlewares/rateLimit')
const authController = require('../controllers/auth')

router
  /* LOGIN_USER API */
  .post('/', rateLimitPerRequestType('auth'), authController.loginUser)
//   .post('/signup', require('../controllers/createUser').createUser)


exports.router = router
