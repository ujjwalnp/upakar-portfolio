const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const rateLimiter = require('../middlewares/rateLimiter')

router
  /* LOGIN_USER API */
  .post('/', rateLimiter , authController.loginUser)
//   .post('/signup', require('../controllers/createUser').createUser)


exports.router = router
