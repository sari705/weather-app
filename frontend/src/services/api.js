import axios from "axios";

const baseUri = "http://localhost:8800";

export const getWeather = (city) => {
    return axios.get(`${baseUri}/api/weather?city=${city}`);
}