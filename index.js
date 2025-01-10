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

// Root route to display welcome message and list of APIs
app.get("/", (req, res) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'; // Default to localhost if not provided

  res.status(200).json({
    success: true,
    message: "Welcome to the User Management System",
    apis: [
      `${baseUrl}/api/users - Get all users`,
      `${baseUrl}/api/users/:id - Get a user by ID`,
      `${baseUrl}/api/users/update/:id - Update user information`,
      `${baseUrl}/api/users/delete/:id - Delete a user`,
      `${baseUrl}/api/login - User login`,
    ],
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
