import axios from 'axios';
const API_URL = '/api/tickets'

const ticketsAPI = axios.create({ baseURL: API_URL })

// Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await ticketsAPI.post('', ticketData, config)
  return response.data
}

// Get user tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await ticketsAPI.get('', config)
  return response.data
}

// Get user ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await ticketsAPI.get(`/${ticketId}`, config)
  return response.data
}

// Close user ticket
const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await ticketsAPI.put(`/${ticketId}`,
    { status: 'closed' }
    , config
  )
  return response.data
}

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  closeTicket
}
export default ticketService