import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/database/db.config.js";
import jobSearchRouter from "./src/routes/jobSearch.route.js";

dotenv.config(); // Load .env variables

const app = express(); // create express app

app.use(express.json()); // Middleware to parse JSON bodies

app.use(
  cors({
    origin: "https://job-search-pi-ashen.vercel.app",
  })
); // CORS Middleware

connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api", jobSearchRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
