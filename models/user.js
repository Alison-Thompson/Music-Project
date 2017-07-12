const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    firstName: {
        type: String,
        default: null,
    },
    lastName: {
        type: String,
        default: null
    },
    username: {
        type: String,
        minlength: [6, 'Username needs at least 6 characters'],
        maxlength: [30, 'Username cannot be more than 30 characters'],
        required: [true, 'A User needs a username'],
        unique: true,
        validate: [
            function (username, callback) {
                User.findOne({ username: username}, function (err, user) {
                    if (err) { console.log(err) }
                    if (user) {
                        callback(false)
                    } else {
                        callback(true)
                    }
                })
            },
            'Username already exists'
        ]
    },
    password: {
        type: String,
        minlength: [6, 'Password not long enough']
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        default: new Date()
    },
    deletedOn: {
        type: Date,
        default: null
    }
})
userSchema.options.toJSON = {
    getters: true,
    virtuals: true,
    transform: function (doc, ret, options) {
      delete ret._id
      delete ret.__v
      return ret
    }
}

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = User
