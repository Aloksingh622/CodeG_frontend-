


import axios from "axios";

const axios_client = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // ✅ correct key
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axios_client;
