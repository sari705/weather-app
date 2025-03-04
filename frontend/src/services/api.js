import axios from "axios";


export function getWeather(city){
    return axios.get(`http://localhost:8800/api/weather?city=${city}`);
}