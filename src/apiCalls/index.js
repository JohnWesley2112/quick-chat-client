import axios from 'axios';



export const axiosInstance = axios.create({
    baseURL: "http://localhost:3005",
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})