import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";


const syncClerkUser = asyncHandler(async (req, res) => {
  console.log("🔥 HIT API:", req.body);

  const { clerkId, name, email } = req.body;

  if (!clerkId || !email) {
    return res.status(400).json({ message: "Missing data" });
  }

  let user = await User.findOne({ clerkId });

  if (!user) {
    user = await User.create({ clerkId, name, email });
  }

  res.json(user);
});


const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});


const getUserByClerkId = asyncHandler(async (req, res) => {
  const user = await User.findOne({ clerkId: req.params.clerkId });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await user.deleteOne();

  res.json({ message: "User removed" });
});

export {
  syncClerkUser,
  getUsers,
  getUserByClerkId,
  deleteUser,
};