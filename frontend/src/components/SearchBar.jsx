import { useState } from "react";
import { getWeather } from "../services/api";
import "../styles/SearchBar.css"

const SearchBar = (props) => {
    const { setWeatherDetails } = props;
    const [choiseCity, setChoiseCity] = useState("");
    const [error, setError] = useState("")

    const getWeatherByCity = async () => {
        if (!choiseCity.trim()) {
            setError("Must enter a city name");
            return;
        }
        if (/\d/.test(choiseCity)) {
            setError("City name cannot contain numbers");
            return;
        }
        try {
            const response = await getWeather(choiseCity)
            if (response?.data) {
                setWeatherDetails(response.data);
            }
            else {
                setError("No data received from API");
            }
        }
        catch (e) {
            setError(e.response?.data?.message || "Error fetching weather data");
        }
    }

    return (
        <div className="search">
            <label className="search-label">City name</label>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    value={choiseCity}
                    onChange={(e) => {
                        setChoiseCity(e.target.value);
                        setError("");
                    }}
                    placeholder="Enter city name..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            getWeatherByCity();
                        }
                    }}
                    autoComplete="off"
                />
                <button type="submit" className="search-button" onClick={getWeatherByCity}>
                    Check
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default SearchBar;
