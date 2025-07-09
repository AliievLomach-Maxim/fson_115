// import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3000/api'
// // axios.defaults.baseURL = 'https://next-docs-api.onrender.com'
import axios from 'axios'

export const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
})
