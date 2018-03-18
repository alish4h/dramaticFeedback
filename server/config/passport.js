var LocalStrategy = require('passport-local').Strategy
var User = require('../models/User')

module.exports = (passport) => {
  // Serialize and deserialise
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: true
  }, (req, email, password, done) => {
    // Doesn't execute until everything is done
    process.nextTick(() => {
      // Search the database to check if the user exists
      User.findOne({'local.email': email}, (err, user) => {
        if (err) {
          return done(err)
        }
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already registered'))
        } else {
          // Initialize new User
          var newUser = new User()

          // Assign variables
          newUser.local.email = email
          newUser.local.password = password

          // Save user to the database and check for errors
          newUser.save((err) => {
            if (err) {
              throw err
            }
            return done(null, newUser)
          })
        }
      })
    })
  }))
}
