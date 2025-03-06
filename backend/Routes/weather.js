import { Router } from "express";
import { getWeather } from "../Controllers/weather.js";

const router = Router();

router.get("/", getWeather)

export default router;