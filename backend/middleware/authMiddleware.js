import asyncHandler from "express-async-handler";
import { verifyToken } from "@clerk/backend";

const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    req.user = {
      clerkId: payload.sub,
      name: payload.name || "User",
      email: payload.email,
    };

    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized, invalid token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as admin");
  }
};

export { protect, admin };