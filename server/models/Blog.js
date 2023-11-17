const mongoose = require('mongoose') 
const { Schema } = mongoose 

const blogSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
},
  { timestamps: true }
) 

const Blog = mongoose.model('User', blogSchema) 
