import axios from "axios";
import Constants from "../constants";
import { getFromStorage } from "../helpers/storage";

const instance =  axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL
})

instance.interceptors.request.use(
    async (config) => {
        const token = await getFromStorage(Constants.STORAGE_AUTH_KEY);
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default instance;