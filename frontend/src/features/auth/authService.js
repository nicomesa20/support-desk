import axios from 'axios'

const API_URL = 'api/users'

const userAPI = axios.create({ baseURL: API_URL })

// Register user
const register = async (userData) => {
  const response = await userAPI.post('', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Auth user
const login = async (userData) => {
  const response = await userAPI.post('/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login
}

export default authService