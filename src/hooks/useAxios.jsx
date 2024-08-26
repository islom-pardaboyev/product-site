import axios from "axios";
const API = import.meta.env.VITE_API_KEY

export const useAxios = () => {
    return axios.create({baseURL: API})
}