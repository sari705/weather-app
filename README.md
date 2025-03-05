# Weather App 🌤️

A simple weather application built with **React** for the frontend and **Node.js (Express)** for the backend. The app allows users to search for a city's weather and displays real-time weather conditions.

## 📸 Preview
![Website Preview](assets/images/screenshot.png)

> Replace `./assets/weather-app-preview.png` with the actual path where your screenshot is stored.

---

## 📌 Features
- 🌍 Search for weather in any city worldwide.
- 🌡 Uses an external weather API.
- 📊 Displays current temperature, humidity, wind speed, and precipitation.
- 🥒 Shows hourly forecast (2 hours before and after the current time).
- 🎨 Responsive and clean UI.

---

## 🛠️ Tech Stack
### **Frontend**
- React.js
- CSS (custom styling)

### **Backend**
- Node.js with Express.js
- Axios for API requests
- dotenv for environment variables

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/sari705/weather-app.git
cd weather-app
```

### **2️⃣ Install Dependencies**
#### **Frontend**
```sh
cd client
npm install
```

#### **Backend**
```sh
cd server
npm install
```

---

## 🏃‍♂️ Running the Application

### **Start the Backend Server**
1. Navigate to the `server` folder.
2. Create a **.env** file and add:
    ```env
    WEATHER_API_URI=your_api_url
    WEATHER_API_KEY=your_api_key
    ```
3. Run the backend server:
    ```sh
    npm start
    ```
   The server will run on `http://localhost:5000`.

### **Start the Frontend**
1. Navigate to the `client` folder.
2. Start the React app:
    ```sh
    npm start
    ```
   The frontend will be available at `http://localhost:3000`.

---

## ⚙️ Environment Variables
Create a `.env` file inside the **server** directory and add the following:
```env
WEATHER_API_URI=https://api.weatherapi.com/v1/forecast.json
WEATHER_API_KEY=your_api_key
```

Replace `your_api_key` with your actual API key.

---

## 🐂 Project Structure

```
weather-app/
│── client/               # React Frontend
│   ├── src/
│   │   ├── components/   # UI Components
│   │   ├── styles/       # CSS Styles
│   │   ├── services/     # API Requests
│   │   ├── App.js        # Main React App
│   │   ├── index.js      # React Entry Point
│   ├── public/           # Static Files
│   ├── package.json      # Frontend Dependencies
│
│── server/               # Node.js Backend
│   ├── routes/           # API Routes
│   ├── .env              # Environment Variables
│   ├── index.js          # Main Express Server
│   ├── package.json      # Backend Dependencies
│
│── assets/               # Screenshots & Images
│── README.md             # Documentation
│── .gitignore            # Files to Ignore
```

---

## 📝 License
This project is licensed under the **MIT License**. Feel free to modify and use it.

---

## 📩 Contact
If you have any questions, feel free to reach out!

📧 Email: your-email@example.com  
🐙 GitHub: [your-github-username](https://github.com/YOUR_GITHUB_USERNAME)

---

This **README.md** provides everything a user needs to **install**, **run**, and **understand** your project. 🚀 Let me know if you need any adjustments! 🎯

