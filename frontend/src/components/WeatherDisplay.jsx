import "../styles/WeatherDisplay.css"

const WeatherDisplay = ({ weatherDetails }) => {
    const lastUpdated = weatherDetails.current.last_updated.split(" ");
    const now = parseInt((weatherDetails.current.last_updated.split(" ")[1]).split(":")[0]);
    let allHours = [];
    const today = weatherDetails.todayForecast;

    if (now > 1 && now < 22) {
        allHours = today;
    }

    else {
        switch (now) {
            case 0:
                allHours = [...weatherDetails.yesterdayData.slice(22), ...today.slice(0, 22)];
                break;
            case 1:
                allHours = [...weatherDetails.yesterdayData.slice(23), ...today.slice(0, 23)];
                break;
            case 22:
                allHours = [...today.slice(1), ...weatherDetails.tomorrowForecast.slice(0, 1)];
                break;
            case 23:
                allHours = [...today.slice(2), ...weatherDetails.tomorrowForecast.slice(0, 2)];
                break;
        }
    }

    allHours = allHours.filter(hour => {
        const hourNumber = new Date(hour.time).getHours();
        return [now - 2, now - 1, now, now + 1, now + 2].map(h => (h + 24) % 24).includes(hourNumber);
    });

    const weatherInfo = [
        { title: "precipitation", value: `${weatherDetails.current.precip_mm} mm` },
        { title: "humidity", value: `${weatherDetails.current.humidity}%` },
        { title: "wind", value: `${weatherDetails.current.wind_kph} km/h` }
    ];

    return (
        <div className="weather-background">
            <div className="weather-container">

                <div className="city-info">
                    <h1 className="city">{weatherDetails.location.region} </h1>
                    <h2 className="country">{weatherDetails.location.country}</h2>
                    <p className="last-updated">{`${lastUpdated[0].replaceAll("-", "/")} `}
                        at{` ${lastUpdated[1]}`}
                    </p>
                </div>

                <div className="weather-main">
                    <h1>{Math.round(weatherDetails.current.temp_c)}<sup>°</sup></h1>
                    <p className="condition-text">{weatherDetails.current.condition.text}</p>
                </div>

                <div className="weather-info">
                    {weatherInfo.map((info, index) => (
                        <div key={index}>
                            <p className="info-title">{info.title}</p>
                            <p className="info-value">{info.value}</p>
                        </div>
                    ))}
                </div>

                <div className="weather-forecast">
                    <div className="forecast-row">
                        {allHours.map(hour => (
                            <p key={hour.time} className="forecast-time">{hour.time.split(" ")[1]}</p>
                        ))}
                    </div>

                    <div className="forecast-row">
                        {allHours.map(hour => (
                            <p key={hour.time} className="forecast-temp">{Math.round((hour.temp_c))}°</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;
