import express from "express";
import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
