const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Please add a password'],
  },
  email: {
    type: String,
    required: [true, 'Please add a email'],
  },
  password: {
    type: String,
    required: [true, 'Please add a email'],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)