import axios from "axios";


export const axiosAPI = axios.create({
    
    baseURL: "https://mern-todo-app-api-omega.vercel.app/api",
    withCredentials: true
})