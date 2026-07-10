import express from "express";
import {
  getBusinessIdeas,
  getBusinessIdeaById,
  createBusinessIdea,
  updateBusinessIdea,
  deleteBusinessIdea,
} from "../controllers/businessIdeaController.js";

const router = express.Router();

// Get all ideas & Create new idea
router.route("/").get(getBusinessIdeas).post(createBusinessIdea);

// Get idea by ID & Update & Delete idea
router.route("/:id").get(getBusinessIdeaById).put(updateBusinessIdea).delete(deleteBusinessIdea);

export default router;
