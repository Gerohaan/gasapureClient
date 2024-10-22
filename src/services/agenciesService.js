import axios from 'axios';
const baseURL = 'https://api.leadbox.ec/api';
import { header, leadboxAppCurrentCompany } from './../utils/headers'

export async function create(param) {
    try {
        const url = baseURL+'/agencies'
        const response = await axios.post(url, param, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}


export async function getAll(limit, page) {
    try {
        const url = baseURL+`/agencies?company_id=${leadboxAppCurrentCompany}&limit=${limit}&page=${page}`
        const response = await axios.get(url, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

export async function deleteById(id) {
    try {
        const url = baseURL+'/agencies/'+id
        const response = await axios.delete(url, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

export async function show(id) {
    try {
        const url = baseURL+'/agencies/'+id
        const response = await axios.get(url, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

export async function update(id, params) {
    try {
        const url = baseURL+'/agencies/'+id
        const response = await axios.put(url, params, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}
