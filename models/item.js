const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    index: {
        type: Number,
        required: [true, 'Need to know what to edit']
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: [true, 'An Item needs a group']
    }
})

itemSchema.statics.findByName = function(name, callback) {
  return this.find({ name: new RegExp(name, 'i') }, callback)
}

itemSchema.options.toJSON = {
    getters: true,
    virtuals: true,
    transform: function (doc, ret, options) {
      delete ret._id
      delete ret.__v
      return ret
    }
}

const itemModel = mongoose.model('Item', itemSchema)

module.exports = itemModel