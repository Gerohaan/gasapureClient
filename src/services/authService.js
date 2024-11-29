import axios from 'axios';
import { header, baseURL } from './../utils/headers'

export async function register(param) {
  try {
    const url = baseURL + '/register'
    const response = await axios.post(url, param, header)
    const responseData = await response.data
    return responseData
  } catch (error) {
    throw error
  }
}

export async function login(param) {
  try {
    const url = baseURL + '/user/login'
    const response = await axios.post(url, param, header)
    const responseData = await response.data
    return responseData
  } catch (error) {
    throw error
  }
}

export async function logout() {
  try {
    const url = baseURL + '/user/logout'
    const response = await axios.get(url, header)
    const responseData = await response.data
    return responseData
  } catch (error) {
    throw error
  }
}

export async function getAll() {
  try {
    const url = baseURL + '/users'
    const response = await axios.get(url, header)
    const responseData = await response.data
    return responseData
  } catch (error) {

    throw error
  }
}

