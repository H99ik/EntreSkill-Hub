import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import businessIdeaRoutes from "./routes/businessIdeaRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

connectDB();

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

//middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/business-ideas", businessIdeaRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/mentors", mentorRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("EntreSkill Hub API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
