import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import "../styles/home.css"

// פונקציה המציגה את שני הקומפוננטות
// SearchBar ו WeatherDisplay
function Home() {
    // משתנה בסטייט המכיל את פרטי מזג האויר
    const [weatherDetails, setWeatherDetails] = useState({})

    return (
        <div className="home-container">
            {/* צד שמאל - חיפוש וטקסט */}
            <div className="left-section">
                <h1>Use our weather app <br/> to see the weather <br/> around the world</h1>
                {/* שולחים לקומפוננטה פונקציה לעריכת פרטי מזג האויר */}
                <SearchBar setWeatherDetails={setWeatherDetails} />
                {weatherDetails.location && (
                    <p className="coordinates">
                        Latitude: {weatherDetails.location.lat} &nbsp;&nbsp;
                        Longitude: {weatherDetails.location.lon} <br />
                        Accurate to {weatherDetails.location.localtime}
                    </p>
                )}
            </div>

            {/* צד ימין - תצוגת מזג האוויר */}
            <div className="right-section">
                {/* שולחים לקומפוננטה את פרטי מזג האויר */}
                <WeatherDisplay weatherDetails={weatherDetails} />
            </div>
        </div>
    );
}

export default Home;
