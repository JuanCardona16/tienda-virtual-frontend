import axios from 'axios'

const API_URL = process.env.API_UL;

export const tiendaApi = axios.create({
  baseURL: API_URL
})