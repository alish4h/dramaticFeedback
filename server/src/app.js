// All the dependancies declared
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const passport = require('passport')
const session = require('express-session')

const routes = require('./routes/auth')(passport)

// Database configutation
const DBconfig = require('../config/database')
// Config passsport and send passport object
require('../config/passport')(passport)

// Map global promise - get rid of warning
mongoose.Promise = global.Promise

// Connecting to mLab with mongoose
mongoose.connect(DBconfig.url)
  .then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err))

// Initiate express app
const app = express()

// Variable for port (Environment and 8081 for local)
const port = process.env.PORT || 3000

// ======= Express Middleware ==========
// Morgan to provide us with logs when our server endpoints are hit
app.use(morgan('combined'))
// body-parser middleware to parse json in http requests
app.use(bodyParser.json())
// Cors
app.use(cors())
// express session for passport
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))
// Initialize passport
app.use(passport.initialize())
// Let passport use session
app.use(passport.session())
// Flash
app.use(flash())

// Load routes
app.use('/', routes)

// Server starts listening on the defined port and console logs the port.
app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
