import axios from "axios";

const baseUri = import.meta.env.VITE_API_URI;

export const getWeather = (city) => {
    return axios.get(`${baseUri}/api/weather?city=${city}`);
}