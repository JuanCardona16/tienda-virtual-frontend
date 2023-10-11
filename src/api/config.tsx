import axios from 'axios'

export const tiendaApi = axios.create({
  baseURL: 'http://localhost:8080/api/v1'
})