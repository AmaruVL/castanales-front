import axios from 'axios'

export const axiosClient = axios.create({
})

export function setClient(token) {
    axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`
}
