import axios from "axios";

const baseUri = import.meta.env.VITE_API_URI;

export const getWeather = async (city) => {
    try {
        const response = await axios.get(`${baseUri}/api/weather?city=${city}`);
        if (response?.data) {
            return response.data;
        }
        else {
            return { error: "No data received from API" };
        }
    }
    catch (e) {
        return { error: e.response?.data?.message || "Error fetching weather data" };
    }
}