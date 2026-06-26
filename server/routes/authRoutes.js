import express from "express";
import { registerUser, loginuser } from "../controllers/authController.js";

const router = express.Router();

// Register and Login routes
router.post("/register", registerUser);
router.post("/login", loginuser);

export default router;