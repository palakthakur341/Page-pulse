const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const analyzeRoutes = require("./routes/analyzeRoutes");

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register Routes
app.use("/api", analyzeRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Backend is Running 🚀");
});

// Start Server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});