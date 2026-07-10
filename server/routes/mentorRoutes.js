import express from "express";
import {
  getMentors,
  getMentorById,
  createMentor,
  updateMentor,
  deleteMentor,
} from "../controllers/mentorController.js";

const router = express.Router();

// Get all mentors & Create mentor
router.route("/").get(getMentors).post(createMentor);

// Get, Update & Delete mentor by ID
router.route("/:id").get(getMentorById).put(updateMentor).delete(deleteMentor);

export default router;
