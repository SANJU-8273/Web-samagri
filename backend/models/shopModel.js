import mongoose from "mongoose";

const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    owner: {
      type: String, // 🔥 clerkId
      required: true,
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      },
    },
  },
  { timestamps: true }
);

// 🔥 geo index
shopSchema.index({ location: "2dsphere" });

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;