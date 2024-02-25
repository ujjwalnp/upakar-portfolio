const express = require('express')
const router = express.Router()
const authRouter = require('./auth')
const userRouter = require('./user')
const blogRouter = require('./blog')

router
    .use('/auth', authRouter)
    .use('/user', userRouter)
    .use('/blog', blogRouter)

module.exports = router