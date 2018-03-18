const express = require('express')
const router = express.Router()

module.exports = (app, passport) => {
  router.get('/', (req, res) => {
    res.send({
      success: 'server is running'
    })
  })
  router.get('/register', (req, res) => {
    res.send({
      message: 'register route'
    })
  })

  router.post('/login', passport.authenticate('login'), {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  })
}
