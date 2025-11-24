import "./configs/dotenv.config.js";
import express from "express";
import allRoutes from "./routes/index.route.js";

const app = express();

// *** Setup middlewares configurations ***

// *** Mount all Routes ***
app.use("/api", allRoutes);

export default app;
