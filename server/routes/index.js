const express = require('express')
const router = express.Router()
const { rateLimitPerRequestType } = require('../middlewares/rateLimit')
const authRouter = require('./auth')
const userRouter = require('./user')
const blogRouter = require('./blog')

router
    .use('/auth', rateLimitPerRequestType('auth'), authRouter)
    .use('/user', rateLimitPerRequestType('api'), userRouter)
    .use('/blog', rateLimitPerRequestType('general'), blogRouter)

module.exports = router