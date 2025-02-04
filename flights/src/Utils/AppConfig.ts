import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;
const BASE_AIRPORT_URL = `https://${API_HOST}/api/v1/flights`;
const BASE_FLIGHT_URL = `https://${API_HOST}/api/v2/flights`;

const HEADERS = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST
}

export const apiAirportClient = axios.create({
    baseURL: BASE_AIRPORT_URL,
    headers: HEADERS
});


export const apiFlightClient = axios.create({
    baseURL: BASE_FLIGHT_URL,
    headers: HEADERS
});
