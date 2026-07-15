import express from "express";
import {
  getRoadmaps,
  getRoadmapById,
  createRoadmap,
  updateRoadmap,
  deleteRoadmap,
  getRoadmapByEntrepreneur,
} from "../controllers/roadmapController.js";

const router = express.Router();

// Get all roadmaps & Create roadmap
router.route("/").get(getRoadmaps).post(createRoadmap);

router.get("/entrepreneur/:id", getRoadmapByEntrepreneur);

// Get, Update & Delete roadmap by ID
router
  .route("/:id")
  .get(getRoadmapById)
  .put(updateRoadmap)
  .delete(deleteRoadmap);

export default router;
