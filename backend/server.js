import dotenv from "dotenv";
dotenv.config()
import path from "path";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import shopRoutes from "./routes/shopRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";


connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://samagri-store.vercel.app",
      "https://web-samagri.vercel.app"
    ],
    credentials: true,
  })
);


app.use(express.json());

/* =========================
   DEV LOGGING
========================= */
if (process.env.NODE_ENV === "development") {
   app.use(morgan("dev"));
}

/* =========================
   ROUTES
========================= */

// 🔥 Order matter nahi karta but clean grouping best hai
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/shops", shopRoutes); // ✅ nearby shops
app.use("/api/upload", uploadRoutes);

/* =========================
   STATIC FILES (UPLOADS)
========================= */
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

/* =========================
   ROOT
========================= */
app.get("/", (req, res) => {
   res.send("API is running...");
});

/* =========================
   ERROR HANDLER
========================= */
app.use(notFound);
app.use(errorHandler);

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(
      `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
         .yellow.bold
   );
});