import { axiosInstance } from "./index";

async function signupUser(user) {
    try {
        const response = await axiosInstance.post('/api/auth/signup', user);
        return response.data;
    } catch (error) {
        return error;
    }
}

async function loginUser(user) {
    try {
        const response = await axiosInstance.post('/api/auth/login', user);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export { signupUser, loginUser };