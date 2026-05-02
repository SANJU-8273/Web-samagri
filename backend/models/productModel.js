import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },

    user: {
      type: String, // 🔥 clerkId (FIXED)
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: String, // 🔥 clerkId (FIXED)
      required: true,
    },

    shop: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Shop",
  required: false,
},

    name: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
        required: true,
      },
    ],

    description: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      default: "India Traditional",
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    ecoFriendly: {
      type: Boolean,
      default: false,
    },

    madeInIndia: {
      type: Boolean,
      default: true,
    },

    whatsInside: [String],

    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product =   mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;