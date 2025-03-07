import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherApiUri = process.env.WEATHER_API_URI;

export async  function getWeather(req, res){
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ title: "can't send response", message: "no city was sending" });
    }
    try {
        const response = await axios.get(`${weatherApiUri}?key=${weatherApiKey}&q=${city}&days=1&aqi=no&alerts=no`);
        const forecastData = response.data.forecast.forecastday[0].hour;
        const currentHour = new Date().getHours();

        return res.status(200).json({
            location: response.data.location,
            current: response.data.current,
            forecastHours: forecastData,
            currentHourData: forecastData[currentHour]
        });
    }
    catch (err) {
        return res.status(500).json({ title: "error", message: "no such city" })
    }
}