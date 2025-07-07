import axios from 'axios'

export const api = axios.create({
  // baseURL: 'https://next-docs-api.onrender.com',
  baseURL: 'http://localhost:4000',
  withCredentials: true,
})
