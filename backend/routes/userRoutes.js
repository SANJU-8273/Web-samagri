import express from "express";
import {
  syncClerkUser,
  getUsers,
  getUserByClerkId,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();


// 🔥 Clerk Sync
router.post("/sync", syncClerkUser);

// Get all users
router.get("/", getUsers);

// Get user by Clerk ID
router.get("/:clerkId", getUserByClerkId);

// Delete user
router.delete("/:id", deleteUser);

export default router;