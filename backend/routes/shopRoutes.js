import express from "express";
import { getNearbyShops } from "../controllers/shopController.js";

const router = express.Router();

router.get("/nearby", getNearbyShops);

export default router;