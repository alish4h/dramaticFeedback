const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // A Validation function for username
// var validateUsername = (username) => {
//   return (username.match(/^[a-zA-Z0-9.-_]+$/) !== null)
// }

// User Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: 'Account already exits with this email',
    require: [true, 'Email is required']
  },
  passwordHash: {
    type: String,
    default: ''
  },
  salt: {
    type: String
  },
  role: {
    type: [{
      type: String
    }]
  },
  created: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model('User', UserSchema)
