import "../styles/WeatherDisplay.css"

const WeatherDisplay = ({ weatherDetails }) => {

    const now = parseInt((weatherDetails.current.last_updated.split(" ")[1]).split(":")[0])
    const allHours = weatherDetails.forecastHours
        .filter(hour => {
            const hourNumber = new Date(hour.time).getHours();
            return [
                (now - 2 + 24) % 24,
                (now - 1 + 24) % 24,  
                now,                  
                (now + 1) % 24,       
                (now + 2) % 24    
            ].includes(hourNumber);
        })

    return (
        <div className="weather-background">
            <div className="weather-container">

                <div className="city-info">
                    <h1 className="city">{weatherDetails.location.name} </h1>
                    <h2 className="country">{weatherDetails.location.country}</h2>
                    <p className="last-updated">{`${(weatherDetails.current.last_updated).split(" ")[0]} `}
                        at{` ${(weatherDetails.current.last_updated).split(" ")[1]}`}
                    </p>
                </div>

                <div className="weather-main">
                    <h1>{(weatherDetails.current.temp_c).toFixed()}<sup>°</sup></h1>
                    <p className="condition-text">{weatherDetails.current.condition.text}</p>
                </div>

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
                        {allHours.map(hour => (
                            <p key={hour.time} className="forecast-time">{hour.time.split(" ")[1]}</p>
                        ))}
                    </div>

                    <div className="forecast-row">
                        {allHours.map(hour => (
                            <p key={hour.time} className="forecast-temp">{(hour.temp_c).toFixed()}°</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;
