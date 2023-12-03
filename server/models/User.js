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
  type: {
    type: String,
    required: true,
  },
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
    experiencedYears: {
      type: String,
      default: '00',
    },
    happyClients: {
      type: String,
      default: '00',
    },
    companiesWorked: {
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