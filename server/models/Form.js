const mongoose = require('mongoose')
const Schema = mongoose.Schema

var QuestionSchema = require('./question.js')

var FormSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Form Title cannot be blank'
  },
  form_questions: [QuestionSchema],
  design: {
    colors: {
      backgroundColor: {
        type: String,
        default: '#fff'
      },
      questionColor: {
        type: String,
        default: '#333'
      },
      answerColor: {
        type: String,
        default: '#333'
      },
      buttonColor: {
        type: String,
        default: '#fff'
      },
      buttonTextColor: {
        type: String,
        default: '#333'
      }

    }
  }
})

mongoose.model('Form', FormSchema)
