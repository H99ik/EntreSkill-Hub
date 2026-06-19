import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();


const app = express();

app.get("/", (req, res) => {
  res.send("EntreSkill Hub API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});