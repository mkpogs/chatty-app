import "./configs/dotenv.config.js";
import app from "./app.js";
import connectDB from "./configs/db.config.js";

// *** Connect to Database ***
connectDB();

// *** Start Express Server ***
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
