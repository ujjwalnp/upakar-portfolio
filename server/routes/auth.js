const express = require('express')
const router = express.Router()
const rateLimit = require('express-rate-limit')
const authController = require('../controllers/auth')

router
  /* LOGIN_USER API */
  .post('/', rateLimit({ windowMs: 60 * 1000, max: 5 }), authController.loginUser)
//   .post('/signup', require('../controllers/createUser').createUser)


exports.router = router
