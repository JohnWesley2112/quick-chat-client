import axios from 'axios';



export const axiosInstance = axios.create({
    baseURL: "https://quick-chat-server-rosy.vercel.app/",
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})