import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;
const BASE_URL = `https://${API_HOST}/api/v1/flights`;

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
    },
});

