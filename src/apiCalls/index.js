import axios from 'axios';


const token = localStorage.getItem('token')
export const axiosInstance = axios.create({
    baseURL: "https://quick-chat-server-rosy.vercel.app/",
    headers: {
        authorization: `Bearer ${token}`
    }
})