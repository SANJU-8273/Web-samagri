import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all products
// @route   GET /api/products
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .populate("shop", "shopName city address")
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    products,
    page,
    pages: Math.ceil(count / pageSize),
  });
});

// @desc    Get single product
// @route   GET /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate(
    "shop",
    "shopName city address"
  );

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
});

// @desc    Get logged-in vendor products
// @route   GET /api/products/my-products
const getMyProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.user.clerkId })
    .populate("shop", "shopName city address")
    .sort({ createdAt: -1 });

  res.json(products);
});

// @desc    Create product by vendor
// @route   POST /api/products
const createProduct = asyncHandler(async (req, res) => {
  const shop = await Shop.findOne({ user: req.user.clerkId });

  const imageUrls = req.files.map((file) => {
    return `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
  });

  const product = await Product.create({
    user: req.user.clerkId,
    shop: shop?._id || null,

    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    brand: req.body.brand,

    location: req.body.location,
    lat: Number(req.body.lat),
    lng: Number(req.body.lng),

    price: Number(req.body.price),
    discount: Number(req.body.discount || 0),
    countInStock: Number(req.body.countInStock),

    ecoFriendly: req.body.ecoFriendly === "true",
    madeInIndia: req.body.madeInIndia === "true",

    whatsInside: req.body.whatsInside
      ? req.body.whatsInside.split(",").map((i) => i.trim())
      : [],

    images: imageUrls,
  });

  res.status(201).json(product);
});
// @desc    Update product
// @route   PUT /api/products/:id
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user !== req.user.clerkId) {
    res.status(403);
    throw new Error("Aap sirf apne product update kar sakte ho");
  }

  product.name = req.body.name || product.name;
  product.images = req.body.images || product.images;
  product.description = req.body.description || product.description;
  product.brand = req.body.brand || product.brand;
  product.category = req.body.category || product.category;
  product.price = req.body.price ?? product.price;
  product.discount = req.body.discount ?? product.discount;
  product.countInStock = req.body.countInStock ?? product.countInStock;
  product.ecoFriendly = req.body.ecoFriendly ?? product.ecoFriendly;
  product.madeInIndia = req.body.madeInIndia ?? product.madeInIndia;
  product.whatsInside = req.body.whatsInside || product.whatsInside;

  const updatedProduct = await product.save();

  res.json(updatedProduct);
});

// @desc    Delete product
// @route   DELETE /api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user !== req.user.clerkId) {
    res.status(403);
    throw new Error("Aap sirf apne product delete kar sakte ho");
  }

  await product.deleteOne();

  res.json({ message: "Product removed" });
});

// @desc    Create product review
// @route   POST /api/products/:id/reviews
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const alreadyReviewed = product.reviews.find(
    (review) => review.user === req.user.clerkId
  );

  if (alreadyReviewed) {
    res.status(400);
    throw new Error("Product already reviewed");
  }

  const review = {
    name: req.user.name || "User",
    rating: Number(rating),
    comment,
    user: req.user.clerkId,
  };

  product.reviews.push(review);
  product.numReviews = product.reviews.length;

  product.rating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save();

  res.status(201).json({ message: "Review added" });
});

// @desc    Get top rated products
// @route   GET /api/products/top
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
    .sort({ rating: -1 })
    .limit(3)
    .populate("shop", "shopName city address");

  res.json(products);
});

export {
  getProducts,
  getProductById,
  getMyProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};