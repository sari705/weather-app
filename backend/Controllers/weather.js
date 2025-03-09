import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherApiUri = process.env.WEATHER_API_URI;

export async function getWeather(req, res) {
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ title: "can't send response", message: "no city was sending" });
    }
    try {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0]; // yyyy-mm-dd


        //היום ומחר
        const response = await axios.get(`${weatherApiUri}?key=${weatherApiKey}&q=${city}&days=2&aqi=no&alerts=no`);
        const forecastData = response.data.forecast.forecastday;

        const historyResponse = await axios.get(`${weatherApiUri}/history.json?key=${weatherApiKey}&q=${city}&dt=${yesterdayStr}`);
        const yesterdayData = historyResponse.data.forecast.forecastday[0].hour;

        const currentHour = new Date().getHours();

        const todayForecast = forecastData[0].hour;
        const tomorrowForecast = forecastData[1].hour;
        const combinedForecast = [...yesterdayData,...todayForecast, ...tomorrowForecast];

        return res.status(200).json({
            location: response.data.location,
            current: response.data.current,
            todayForecast, tomorrowForecast, yesterdayData, 
            forecastHours: combinedForecast,
            currentHourData: todayForecast[currentHour]
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ title: "error", message: "no such city" })
    }
}