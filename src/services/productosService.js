import axios from 'axios';
import { header, baseURL } from './../utils/headers'

export async function getAll() {
  try {
    const url = baseURL + '/productos/list'
    const response = await axios.get(url, header)
    const responseData = await response.data
    return responseData
  } catch (error) {
    throw error
  }
}

export async function store(param) {
  try {
    const url = baseURL + 'productos/add'
    const response = await axios.post(url, param, header)
    const responseData = await response.data
    return responseData
  } catch (error) {
    throw error
  }
}

export async function destroy(id) {
  try {
    const url = baseURL + '/productos/delete' + id
    const response = await axios.delete(url, header)
    const responseData = await response.data
    return responseData
  } catch (error) {
    throw error
  }
}
