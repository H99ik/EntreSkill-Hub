import express from "express";
import {
  createNotification,
  getMyNotifications,
  markAsRead,
} from "../controllers/notificationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Notification
router.post("/", protect, createNotification);

// Get Logged-in User Notifications
router.get("/", protect, getMyNotifications);

// Mark Notification as Read
router.put("/:id", protect, markAsRead);

export default router;
