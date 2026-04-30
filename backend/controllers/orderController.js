import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";


const addOrderItems = asyncHandler(async (req, res) => {
  const {
    user,
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  // ✅ Validation
  if (!user) throw new Error("User missing");

  if (!orderItems?.length) throw new Error("No order items");

  if (
    !shippingAddress?.address ||
    !shippingAddress?.city ||
    !shippingAddress?.postalCode
  ) {
    throw new Error("Invalid shipping address");
  }

  
  const order = await Order.create({
    user,
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  res.status(201).json(order);
});


const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 }); // 🔥 latest first
  res.json(orders);
});


const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  res.json(order);
});


const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.isPaid = true;
  order.paidAt = Date.now();

  order.paymentResult = {
    id: req.body?.id,
    status: req.body?.status,
    update_time: req.body?.update_time,
    email_address: req.body?.email_address,
  };

  const updatedOrder = await order.save();

  res.json(updatedOrder);
});


const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();

  res.json(updatedOrder);
});

export {
  addOrderItems,
  getOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
};