import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import "../styles/Home.css"

const Home = () => {
    const [weatherDetails, setWeatherDetails] = useState({})

    return (
        <div className="home-container">
            <div className="left-section">
                <h1>Use our weather app <br /> to see the weather <br /> around the world</h1>
                <SearchBar setWeatherDetails={setWeatherDetails} />
                {weatherDetails.location && (
                    <p className="coordinates">
                        latitude: {weatherDetails.location.lat} &nbsp;&nbsp;
                        longitude: {weatherDetails.location.lon} <br />
                        {`${(weatherDetails.location.localtime).split(" ")[0]}
                         at ${(weatherDetails.current.last_updated).split(" ")[1]}`}

                    </p>
                )}
            </div>

            <div className="right-section">
                {weatherDetails?.location && <WeatherDisplay weatherDetails={weatherDetails} />}
            </div>
        </div>
    );
}

export default Home;