import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getMyProducts,
} from "../controllers/productController.js";

import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(getProducts)
  .post(protect, upload.array("images", 5), createProduct);

// vendor ke apne products
router.get("/my-products", protect, getMyProducts);

// top products
router.get("/top", getTopProducts);

// reviews
router.route("/:id/reviews").post(protect, createProductReview);

// single product
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, deleteProduct)
  .put(protect, updateProduct);

export default router;