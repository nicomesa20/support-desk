const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  User: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  ticket: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Ticket'
  },
  text: {
    type: String,
    required: [true, 'Please add some text'],
  },
  isStaff: {
    type: Boolean,
    default: false,
  },
  staffId: {
    type: String,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)