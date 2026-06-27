import express from "express";
import { registerUser, loginuser, getProfile } from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register and Login routes
router.post("/register", registerUser);
router.post("/login", loginuser);
router.get("/profile", protect, getProfile);


export default router;