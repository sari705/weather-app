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
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayDate = yesterday.toISOString().split('T')[0];

        let todayForecast, tomorrowForecast, yesterdayData;
        let location, current;

        try {
            const response = await axios.get(`${weatherApiUri}?key=${weatherApiKey}&q=${city}&days=2&aqi=no&alerts=no`);
            if (response.data.forecast && response.data.forecast.forecastday.length >= 2) {
                todayForecast = response.data.forecast.forecastday[0].hour;
                tomorrowForecast = response.data.forecast.forecastday[1].hour;
                location = response.data.location;
                current = response.data.current;
            }
        } catch (err) {
            console.error("Error fetching forecast data:", err.message);
            return res.status(500).json({ title: "error", message: "failed to fetch forecast data" });
        }

        try {
            const historyResponse = await axios.get(`${weatherApiUri}/history.json?key=${weatherApiKey}&q=${city}&dt=${yesterdayDate}`);
            if (historyResponse.data.forecast && historyResponse.data.forecast.forecastday.length > 0) {
                yesterdayData = historyResponse.data.forecast.forecastday[0].hour;
            }
        } catch (err) {
            console.warn("Warning: failed to fetch historical data, continuing without it.");
        }

        return res.status(200).json({
            location,
            current,
            todayForecast,
            tomorrowForecast,
            yesterdayData
        });
    }
    catch (err) {
        console.log("err", err.message);
        return res.status(500).json({ title: "error", message: "unexpected server error" });
    }
}