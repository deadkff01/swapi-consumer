import axios from 'axios'
import { SWAPI_ENDPOINT } from 'consts'

/**
 * Return axios customized instance
 * @returns {axios}
 */
const baseService = () =>
  axios.create({
    baseURL: SWAPI_ENDPOINT,
    timeout: 30000,
    maxRedirects: 0,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
    }
  })

export default baseService
