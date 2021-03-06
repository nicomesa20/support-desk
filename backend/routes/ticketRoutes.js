const { getTicket, getTickets, createTicket, updateTicket, deleteTicket } = require('../controllers/ticketController')
const express = require('express')
const router = express.Router()
const noteRouter = require('./noteRoutes')
// Re-route to note router
router.use('/:ticketId/notes', noteRouter)

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).put(protect, updateTicket).delete(protect, deleteTicket)

module.exports = router