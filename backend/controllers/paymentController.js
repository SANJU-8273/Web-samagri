import Razorpay from "razorpay";

export const createRazorpayOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json(order);
  } catch (error) {
    console.log("Payment error:", error);
    res.status(500).json({
      message: "Payment error",
      error: error.message,
    });
  }
};