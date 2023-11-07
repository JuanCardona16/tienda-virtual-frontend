import axios from 'axios'

// const API_URL = import.meta.env.API_URL;

export const tiendaApi = axios.create({
  baseURL: 'http://localhost:8080/api/v1'
})