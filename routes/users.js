const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const User     = require('./../models/user')


// Index
router.get('/users', function (req, res) {
    User.find({ deletedOn: null })
        .exec(function (err, users) {
            res.json(users)
        })
})

// Show
router.get('/users/:username', function (req, res) {
    User.findOne({
        username: req.params.username,
        deletedOn: null
    }, function (err, user) {
        res.json(user)
    })
})

// Create
router.post('/users', function (req, res) {
  console.log(req.body.email)
    const user = new User({
        email:  req.body.email,
        _id: req.body._id
    })

    user.save(function (err, user) {
        if (err) {
                      console.log(err);
            res.json(err);
        } else {

            res.status(201)
            res.json(user)
        }
    })
})

// Update
router.put('/users/:id', function (req, res) {
    User.findByIdAndUpdate(
        req.params.id, {
            email:  req.body.email,
            password:     req.body.password,
            updatedOn:    new Date()
        },
        { new: true, runValidators: true },
        function (err, user) {
            res.json(user)
        })
})

// Destroy
router.delete('/users/:id', function (req, res) {
    User.findByIdAndUpdate(
        req.params.id,
        { deletedOn: new Date() },
        { new: true, runValidators: true },
        function (err, user) {
            res.json(user)
        })
})


module.exports = router
