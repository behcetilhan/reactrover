import axios from 'axios'

export const axiosBase = axios.create({
  withCredentials: true,
  baseURL: 'https://localhost:3001'
})
