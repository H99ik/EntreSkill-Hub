import express from "express";
import { registerUser, loginUser, getProfile, updateProfile, forgotPassword, verifyResetOtp, resetPassword, changePassword} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register and Login routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.post("/forgot-password", forgotPassword);
router.post("/verify-reset-otp", verifyResetOtp);
router.post("/reset-password", resetPassword);
router.post("/change-password", protect, changePassword);


export default router;