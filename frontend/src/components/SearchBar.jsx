import { useState } from "react";
import { getWeather } from "../services/api";
import "../styles/searchBar.css"


// קומפוננטה המציגה תיבת חיפוש עיר + כפתור לשליחת העיר
// מקבלת בפרופס פונקציה לעריכת פרטי מזג האויר
function SearchBar(props) {
    const { setWeatherDetails } = props;
    // משתנה בסטייט המכיל את תוכן תיבת הטקסט - שם העיר
    const [choiseCity, setChoiseCity] = useState("");
    const [error, setError] = useState({})

    /*
    The loadWeather function receives a city name, 
    checks that it is not empty or only spaces. 
    If valid, it requests weather data from the server; 
    otherwise, it displays a message to enter a city name.
    */
    async function getWeatherByCity(city) {
        if (!city.trim()) {
            setError({ message: "Must enter a city name" });
            return;
        }
        if (/\d/.test(city)) {
            setError({ message: "City name cannot contain numbers" });
            return;
        }
        try {
            const response = await getWeather(city)
            if (response && response.data) {
                setWeatherDetails(response.data);
            }
            else {
                alert("No data received from API");
            }
        }
        catch (e) {
            console.error("Error fetching weather data:", e);
            setError({ message: e.response?.data?.message || "Error fetching weather data" });
        }
    }

    return (
        // div ראשי שעוטף את התגיות input ו button
        <div className="search-container">
            {/* תגית מילוי טקסט להכנסת שם עיר
            ברגע שהתוכן משתנה מעדכנים את המשתנה בסטייט
            אם המשתמש מקיש על enter
            מופעלת הפונקציה לטעינת מזג אויר */}
            {/* <label className="search-label">Enter city</label> */}
            {error.message && <p className="error-message">{error.message}</p>}
            <input
                className="search-input"
                type="text"
                name="city"
                value={choiseCity}
                onChange={(e) => { setChoiseCity(e.target.value); setError({}) }}
                placeholder="Enter city name..."
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        getWeatherByCity(choiseCity)
                    }
                }}
                autoComplete="off"
            />
            {/* כפתור לשליחת שם העיר לחיפוש מזג אויר
            בלחיצה על הכפתור מופעלת הפונקציה 
            למציאת מזג האויר לאותה עיר */}
            <button className="search-button" onClick={() => { getWeatherByCity(choiseCity) }}>Check</button>
        </div>
    );
}

export default SearchBar;
