import axios from 'axios'

// Get user ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(`/api/tickets/${ticketId}/notes`, config)
  return response.data
}

// Get user ticket notes
const createNote = async (noteText, ticketId, token) => {
  console.log(noteText, ticketId, token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(`/api/tickets/${ticketId}/notes`, { text: noteText }, config)
  return response.data
}

const noteService = {
  getNotes,
  createNote
}

export default noteService