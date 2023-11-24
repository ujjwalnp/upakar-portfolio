require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')

/* EXPRESS SERVER  */
const server = express()

/* DB CONNECTION TO MONGO ATLAS */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.log(err)
  })

/* BODY PARSERS */
server.use(express.json())

/* MIDDLEWARES */
server.use(cors())

/* ROUTES */
// server.use('/api', (req, res) => {
//   res.send('Server API is responding - Happy Hacking!')
// })
server.use('/api/auth', authRouter.router)
server.use('/api/user', userRouter.router)
server.use('/api/blog', blogRouter.router)

/* SERVER LISTEN */
server.listen(process.env.PORT || process.env.SERVER_PORT, () => {
  console.log(`Server Started on port: ${process.env.PORT || process.env.SERVER_PORT}`)
})
