import express from "express";
import { createRazorpayOrder } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create", createRazorpayOrder);

export default router;