require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

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


/* SERVER LISTEN */
server.listen(process.env.SERVER_PORT, () => {
  console.log('Server Started')
})
