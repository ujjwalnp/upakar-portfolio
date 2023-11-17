const mongoose = require('mongoose') 
const { Schema } = mongoose 

const skillSchema = new Schema({
  value: {
    type: String,
  },
},
    { timestamps: true }
) 

const serviceSchema = new Schema({
  index: {
    type: Number,
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

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  homeDescription: {
    type: String,
  },
  contact: {
    email: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  about: {
    about: {
      type: String,
    },
    experience_years: {
      type: String,
    },
    happy_clients: {
      type: String,
    },
    companies_worked: {
      type: String,
    },
    resume: {
      type: String,
    },
  },
  skills: [skillSchema],
  services: [serviceSchema],
  resume: {
    type: String,
  },
},
  { timestamps: true }
) 
    
const User = mongoose.model('User', userSchema) 
