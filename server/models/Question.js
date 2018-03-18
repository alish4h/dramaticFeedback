const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  id: {
    type: String
  },
  questiontype: {
    type: String
  },
  title: {
    type: String
  },
  rating: {
    type: Number
  }
})

module.exports = mongoose.model('Question', QuestionSchema)
