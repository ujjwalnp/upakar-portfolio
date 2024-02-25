const express = require('express')
const router = express.Router()

/* MIDDLEWARES */
const { verifyToken } = require('../middlewares/auth')
const { rateLimitPerRequestType } = require('../middlewares/rateLimit')

/* SPECIFIC ROUTES */
const publicRouter = require('./public')
const authRouter = require('./auth')
const userRouter = require('./user')
const blogRouter = require('./blog')

/* ROUTES */
router
    .use('/public', rateLimitPerRequestType('general'), publicRouter)
    .use('/auth', rateLimitPerRequestType('auth'), authRouter)
    .use('/user', verifyToken, rateLimitPerRequestType('api'), userRouter)
    .use('/blog', verifyToken, rateLimitPerRequestType('general'), blogRouter)

module.exports = router