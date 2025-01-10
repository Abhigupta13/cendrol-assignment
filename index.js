const express = require("express");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
