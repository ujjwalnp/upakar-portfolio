const mongoose = require('mongoose') 
const { Schema } = mongoose 

const blogSchema = new Schema({
  category: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
},
  { timestamps: true }
) 

const Blog = mongoose.model('Blog', blogSchema) 

module.exports = Blog