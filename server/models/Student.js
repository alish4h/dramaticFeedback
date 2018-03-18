const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SchoolSchema = require('./School')

// // A Validation function for username
// var validateUsername = (username) => {
//   return (username.match(/^[a-zA-Z0-9.-_]+$/) !== null)
// }
// Student Schema

const StudentSchema = new Schema({
  id: {
    type: String
  },
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
  school: [SchoolSchema],
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

module.exports = mongoose.model('Student', StudentSchema)
