const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchoolSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  location: {
    type: String
  }
})

module.exports = mongoose.model('School', SchoolSchema)
