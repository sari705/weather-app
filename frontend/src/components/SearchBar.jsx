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

        if (!/^[A-Za-z\s]+$/.test(choiseCity)) {
            setError("City name can only contain English letters and spaces");
            return;
        }

        try {
            const response = await getWeather(choiseCity);
            if (response.error) {
                setError(response.error);
            } else {
                setWeatherDetails(response);
            }
        } catch (e) {
            setError("An unexpected error occurred");
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
