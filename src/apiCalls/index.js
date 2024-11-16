import axios from 'axios';


const token = localStorage.getItem('token')
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3005",
    headers: {
        authorization: `Bearer ${token}`
    }
})