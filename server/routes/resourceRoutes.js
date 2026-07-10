import express from "express";
import {
  getResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
} from "../controllers/resourceController.js";

const router = express.Router();

// Get all resources & Create resource
router.route("/").get(getResources).post(createResource);

// Get, Update & Delete resource by ID
router
  .route("/:id")
  .get(getResourceById)
  .put(updateResource)
  .delete(deleteResource);

export default router;
