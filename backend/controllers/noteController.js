const asyncHandler = require('express-async-handler')
const noteModel = require('../models/noteModel')
const ticketModel = require('../models/ticketModel')
const userModel = require('../models/userModel')

const User = userModel
const Note = noteModel
const Ticket = ticketModel

// @desc    Get notes for a ticket
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using id  in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.ticketId)

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const notes = Note.find({ ticket: req.params.ticketId })
  console.log(notes);
  res.status(200).json(notes)
})

module.exports = { getNotes }