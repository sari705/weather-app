import express from "express";
import weatherRouter from "./Routes/weather.js";
import cors from "cors";
const app = express();

app.use(cors())
app.use(express.json())


app.use("/api/weather", weatherRouter)

let port = process.env.PORT || 8000;

app.listen(port, "localhost", () => {
    console.log(`app is runing on port ${port}`);
})

