import { useState } from "react";
import { getWeather } from "../services/api";
import "../styles/searchBar.css"


// קומפוננטה המציגה תיבת חיפוש עיר + כפתור לשליחת העיר
// מקבלת בפרופס פונקציה לעריכת פרטי מזג האויר
function SearchBar(props) {
    const { setWeatherDetails } = props;
    // משתנה בסטייט המכיל את תוכן תיבת הטקסט - שם העיר
    const [choiseCity, setChoiseCity] = useState("");


    /*
    פונקציה לטעינת מזג אויר מהשרת
    הפונקציה מקבלת במשתנה את שם העיר ומבצעת בדיקה
    שבמשתנה יש נתונים ולא משתנה ריק או רווחים
    אם הבדיקה עברה בהצלחה פונה לשרת לקבל נתונים 
    אם לא מקפיץ הודעה שיש להכניס שם עיר
    */
    async function getWeatherByCity(city) {
        if (!city.trim()) {
            alert("must enter city");
            return;
        }
        if (/\d/.test(city)) {
            alert("City name cannot contain numbers");
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
            alert(e.response?.data?.message || "Error fetching weather data")
        }
    }

    return (
        // div ראשי שעוטף את התגיות input ו button
        <div className="search-container">
            {/* תגית מילוי טקסט להכנסת שם עיר
            ברגע שהתוכן משתנה מעדכנים את המשתנה בסטייט
            אם המשתמש מקיש על enter
            מופעלת הפונקציה לטעינת מזג אויר */}
            <input
                className="search-input"
                type="text"
                name="city"
                value={choiseCity}
                onChange={(e) => { setChoiseCity(e.target.value) }}
                placeholder="Enter city name..."
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        getWeatherByCity(choiseCity)
                    }
                }}
            />
            {/* כפתור לשליחת שם העיר לחיפוש מזג אויר
            בלחיצה על הכפתור מופעלת הפונקציה 
            למציאת מזג האויר לאותה עיר */}
            <button className="search-button" onClick={() => { getWeatherByCity(choiseCity) }}>search</button>
        </div>

    );
}

export default SearchBar;