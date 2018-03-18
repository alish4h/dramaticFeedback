const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StudentScehma = require('./Student')
const UserSchema = require('./Student')
const FormSchema = require('./Form')

const SessionSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  formUser: {
    // TODO
    type: [UserSchema]
  },
  fromStudent: {
    // TODO
    type: [StudentScehma]
  },
  Form: {
    // TODO
    type: [FormSchema]
  }
})

module.exports = mongoose.model('Session', SessionSchema)
