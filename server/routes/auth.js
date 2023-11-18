const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router
  /* LOGIN_USER API */
  .post('/', authController.loginUser)
//   .post('/signup', require('../controllers/createUser').createUser)


exports.router = router
