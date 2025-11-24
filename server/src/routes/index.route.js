import express from "express";
import authRoutes from "./auth.route.js";
import messageRoutes from "./message.route.js";

const router = express.Router();

// *** Health Check Route ***
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running perfectly! 🚀",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// *** API Route Mounting ***
router.use("/auth", authRoutes);
router.use("/messages", messageRoutes);

export default router;
