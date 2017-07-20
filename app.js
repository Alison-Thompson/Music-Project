const express       = require('express')

const bodyParser    = require('body-parser')
const mongoose      = require('mongoose')
const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy
const cookieParser  = require('cookie-parser')
const session       = require('express-session')

const items         = require('./routes/items')
const groups        = require('./routes/groups')
const users         = require('./routes/users')
const auth          = require('./routes/auth')

const passportSetup = require('./config/passport')

const app           = express()

passportSetup(passport)


// connect to your local DB
// mongod
mongoose.connect('mongodb://mongodb.cs.dixie.edu/chris2')
// Connect to Kaden's DB
// mongoose.connect('mongodb://144.38.175.196/YourName')
// connect to DJ's DB
// mongoose.connect('mongodb://mongodb.cs.dixie.edu/YourName')


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static('public'))


app.use(session({ secret: 'mysupersecretsessionkey' }))
app.use(passport.initialize())
app.use(passport.session())

const User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Logging Middleware
app.use(function (res, req, next) {
	next()
})

app.use(auth)
app.use(users)
app.use(items)
app.use(groups)

app.get('/', function (req, res) {
  res.redirect('/index.html')
})

app.listen(3000, function () {
  console.log('Music API listening on port 3000!')
})
