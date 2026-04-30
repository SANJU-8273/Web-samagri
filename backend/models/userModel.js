import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    // 🔐 Clerk User ID (main identity)
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },

    // 👤 Basic Info
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    // 🖼️ Optional fields (future use)
    image: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    // 🛡️ Role
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;