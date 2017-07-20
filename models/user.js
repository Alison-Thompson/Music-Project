const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({

    email: {
        type: String,
        minlength: [3, 'Email needs at least 3 characters'],
        maxlength: [30, 'Email cannot be more than 30 characters'],
        required: [true, 'Email is required'],
        unique: true,
        validate: [
            function (email, callback) {
                User.findOne({ email}, function (err, user) {
                    if (err) { console.log(err) }
                    if (user) {
                        callback(false)
                    } else {
                        callback(true)
                    }
                })
            },
            'Email already exists'
        ]
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
    },
    _id: {
      type: String,
      default: null
    },
    username: {
      type: String,
      unique: false
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
