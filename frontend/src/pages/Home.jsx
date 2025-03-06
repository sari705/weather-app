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
                        Latitude: {weatherDetails.location.lat} &nbsp;&nbsp;
                        Longitude: {weatherDetails.location.lon} <br />
                        Accurate to {weatherDetails.location.localtime}
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