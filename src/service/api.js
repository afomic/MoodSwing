import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    baseURL: "https://my-json-server.typicode.com/afomic/demo/",
    timeout: 60000,
});
axiosInstance.interceptors.response.use((response) => {
    return response.data;
});
export const getEmojis = () => {
    return axiosInstance.get("/emojis")
}