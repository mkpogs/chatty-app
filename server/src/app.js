import "./configs/dotenv.config.js";
import express from "express";
import allRoutes from "./routes/index.route.js";
import mountStatic from "./configs/serveStatic.config.js";

const app = express();
app.use(express.json());

// *** Setup middlewares configurations ***

// *** Mount all Routes ***
app.use("/api", allRoutes);

// *** Make ready for deployment ***
mountStatic(app);

export default app;
