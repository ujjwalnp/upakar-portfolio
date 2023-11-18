const mongoose = require('mongoose') 
const { Schema } = mongoose 

const skillSchema = new Schema({
  value: {
    type: String,
  },
}) 

const serviceSchema = new Schema({
  index: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
}) 

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  contact: {
    email: {
      type: String,
      default: '',
    },
    linkedin: {
      type: String,
      default: '',
    },
    facebook: {
      type: String,
      default: '',
    },
  },
  about: {
    about: {
      type: String,
      default: '',
    },
    homeDescription: {
      type: String,
      default: '',
    },
    experience_years: {
      type: String,
      default: '00',
    },
    happy_clients: {
      type: String,
      default: '00',
    },
    companies_worked: {
      type: String,
      default: '00',
    },
    resume: {
      type: String,
      default: '',
    },
  },
  skills: [skillSchema],
  services: [serviceSchema],
},
  { timestamps: true }
) 
    
const User = mongoose.model('User', userSchema) 

module.exports = User