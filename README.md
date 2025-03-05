# 🌤️ Weather App

Weather App is an interactive application that displays real-time weather information based on the user's searched city, including temperature, humidity, wind speed, and hourly forecasts.

## 📌 Key Features
- 🔎 **City Search** – Users can enter a city name and receive real-time weather data.
- 🌡️ **Weather Data** – Displays current temperature, weather conditions, humidity, and wind speed.
- ⏳ **Hourly Forecast** – Provides weather data for two hours back and two hours forward.
- 🎨 **Modern UI** – Responsive design with well-structured weather cards.

---

## 🛠️ Technologies Used
The project is built using:
- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **API:** [WeatherAPI](https://www.weatherapi.com/)
- **State Management:** useState

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository:
```bash
git clone https://github.com/username/weather-app.git
cd weather-app
```

### 2️⃣ Install Dependencies:
```bash
npm install
```

### 3️⃣ Set Up Environment Variables (ENV)
Create a `.env` file in the root directory and add:
```env
WEATHER_API_URI=https://api.weatherapi.com/v1/forecast.json
WEATHER_API_KEY=your_weather_api_key
```

### 4️⃣ Start the Server:
```bash
npm start
```

---

## 🖥️ Project Structure
```
📂 weather-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 SearchBar.jsx
 ┃ ┃ ┣ 📜 WeatherDisplay.jsx
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 weatherDisplay.css
 ┃ ┃ ┣ 📜 searchBar.css
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┣ 📂 server
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 api.js
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 .env
```

---

## 📷 Screenshot
![Weather App Screenshot](screenshot.png)

---

## 💡 Future Improvements
- ⏩ Support for GPS-based location detection.
- 📅 Weekly weather forecast.
- 🎨 Customizable themes and colors.

---

## 📩 Contact
For questions or suggestions, contact us on [GitHub](https://github.com/username).

---

**⭐ If you like this project, don't forget to give it a star!**

