const express = require('express')
const router  = express.Router()
const passport = require('passport')

const isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

router.get('/profile', isLoggedIn, function (req, res) {
    res.send('Logged in!!')
})

router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/login')
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    if (req.user) {
        res.redirect('/')
    } else {
        res.json("Not a user.")
    }
})

router.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

router.get('/auth/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    })
)

module.exports = router