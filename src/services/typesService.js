import axios from 'axios';
import { header, baseURL } from './../utils/headers'

export async function getAll() {
    try {
        const url = baseURL + '/type_sans'
        const response = await axios.get(url, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

export async function store(param) {
    try {
        const url = baseURL + '/type_sans'
        const response = await axios.post(url, param, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

export async function update(param, id) {
    try {
        const url = baseURL + '/type_sans/' + id
        const response = await axios.put(url, param, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

export async function show(id) {
    try {
        const url = baseURL + '/type_sans/' + id
        const response = await axios.get(url, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

export async function destroy(id) {
    try {
        const url = baseURL + '/type_sans/' + id
        const response = await axios.delete(url, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

