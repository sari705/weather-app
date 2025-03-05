import "../styles/weatherDisplay.css"


// פונקציה המציגה את כרטיס הפרטים על המזג אויר
// מקבלת בפרופס אובייקט המכיל את כל הפרטים
function WeatherDisplay({ weatherDetails }) {

    // אם המשתנה ריק מוצגת הודעה שמורה למלא את תיבת החיפוש
    if (!weatherDetails || !weatherDetails.location) {
        return;
    }

    return (
        <div className="weather-background">
            <div className="weather-container">
                {/* שם העיר והמדינה */}
                <div className="city-info">
                    <h1 className="city">{weatherDetails.location.name} </h1>
                    <h2 className="country">{weatherDetails.location.country}</h2>
                    <p className="last-updated">{`${(weatherDetails.current.last_updated).split(" ")[0]} `}
                        at{` ${(weatherDetails.current.last_updated).split(" ")[1]}`}
                    </p>
                </div>



                {/* תמונת המצב ומידע הטמפרטורה */}
                <div className="weather-main">
                    <h1>{(weatherDetails.current.temp_c).toFixed()}<sup>°</sup></h1>
                    <p className="condition-text">{weatherDetails.current.condition.text}</p>
                </div>


                {/* מדדים נוספים */}
                <div className="weather-info">
                    <div>
                        <p className="info-title">precipitation</p>
                        <p className="info-value">{weatherDetails.current.precip_mm} mm</p>
                    </div>
                    <div>
                        <p className="info-title">humidity</p>
                        <p className="info-value">{weatherDetails.current.humidity}%</p>
                    </div>
                    <div>
                        <p className="info-title">wind</p>
                        <p className="info-value">{weatherDetails.current.wind_kph} km/h</p>
                    </div>
                </div>

                <div className="weather-forecast">
                    <div className="forecast-row">
                        {weatherDetails.forecastHours
                            .filter(hour => {
                                const now = parseInt((weatherDetails.current.last_updated.split(" ")[1]).split(":")[0])
                                const hourNumber = new Date(hour.time).getHours();
                                console.log("now: ", now);
                                return hourNumber >= now - 2 && hourNumber <= now + 2;
                            })
                            .map(hour => (
                                <p key={hour.time} className="forecast-time">{hour.time.split(" ")[1]}</p>
                            ))}
                    </div>

                    <div className="forecast-row">
                        {weatherDetails.forecastHours
                            .filter(hour => {
                                const now = parseInt((weatherDetails.current.last_updated.split(" ")[1]).split(":")[0])
                                const hourNumber = new Date(hour.time).getHours(); // השעה מתוך הנתונים
                                return hourNumber >= now - 2 && hourNumber <= now + 2;
                            })
                            .map(hour => (
                                <p key={hour.time} className="forecast-temp">{(hour.temp_c).toFixed()}°</p>
                            ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WeatherDisplay;