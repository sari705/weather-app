import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherApiUri = "http://api.weatherapi.com/v1/forecast.json";

export async  function getWeather(req, res){
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ title: "can't send response", message: "no city was sending" });
    }
    try {
        const response = await axios.get(`${weatherApiUri}?key=${weatherApiKey}&q=${city}&days=1&aqi=no&alerts=no`);
        const forecastData = response.data.forecast.forecastday[0].hour; // מערך השעות
        const currentHour = new Date().getHours(); // השעה הנוכחית לפי השרת

        return res.status(200).json({
            location: response.data.location, // מידע על המיקום
            current: response.data.current, // מידע עדכני
            forecastHours: forecastData, // כל השעות של היום
            currentHourData: forecastData[currentHour] // המידע על השעה הנוכחית
        });
    }
    catch (err) {
        console.log("error: ", err.message);
        return res.status(500).json({ title: "error", message: "no such city" })
    }
}