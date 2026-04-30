import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";

const router = express.Router();

/* Create Order + Get All Orders */
router.route("/")
  .post(addOrderItems)
  .get(getOrders);

/* Single Order */
router.route("/:id")
  .get(getOrderById);

/* Payment */
router.route("/:id/pay")
  .put(updateOrderToPaid);

/* Delivery */
router.route("/:id/deliver")
  .put(updateOrderToDelivered);

export default router;