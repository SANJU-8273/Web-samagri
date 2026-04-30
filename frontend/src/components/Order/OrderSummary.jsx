"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useCart } from "@/app/context/CartContext";

export default function OrderSummary({
  paymentMethod,
  deliveryMethod,
  buyNowItem,
}) {
  const { cartItems } = useCart();
  const { user } = useUser();

  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");

  const items = buyNowItem ? [buyNowItem] : cartItems;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = Math.round(subtotal * 0.05);

  const shipping =
    deliveryMethod === "express"
      ? 79
      : deliveryMethod === "standard"
      ? subtotal >= 500
        ? 0
        : 40
      : 0;

  const total = subtotal + gst + shipping;

const handlePlaceOrder = async () => {
  console.log("BUTTON CLICKED");

  try {
    setError("");

    if (!user) {
      console.log("User missing");
      return setError("Please login first");
    }

    console.log("Calling Payment API...");

    const res = await fetch("http://localhost:5000/api/payment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total }),
    });

    const data = await res.json();

    console.log("Payment response:", data);

    if (!res.ok) {
      throw new Error("Payment API failed");
    }

    // 🔥 Razorpay open
    const options = {
      key: "rzp_test_Sjdh0AfsQOQkfH",
      amount: data.amount,
      currency: "INR",
      name: "Samagri Store",
      order_id: data.id,

      handler: function (response) {
        console.log("Payment Success", response);
        alert("Payment Successful 🎉");
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();

  } catch (err) {
    console.error("ERROR:", err);
    setError("Something went wrong");
  }
};
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm sticky top-24">

      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      {error && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
          {error}
        </div>
      )}

      <div className="space-y-4 text-sm">

        <Row label="Subtotal" value={`₹${subtotal}`} />
        <Row label="GST (5%)" value={`₹${gst}`} />
        <Row
          label="Shipping"
          value={
            !deliveryMethod
              ? "Select Delivery"
              : shipping === 0
              ? "FREE"
              : `₹${shipping}`
          }
        />
        <Row label="Delivery" value={deliveryMethod || "Not Selected"} />
        <Row label="Payment" value={paymentMethod || "Not Selected"} />

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-blue-600">₹{total}</span>
        </div>
      </div>

     <button
  onClick={handlePlaceOrder}
  disabled={placing}
  className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all
    ${
      placing
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-white"
    }`}
>
  {placing ? "Placing..." : "Place Order"}
</button>

      <p className="mt-4 text-xs text-center text-gray-500">
        Secure checkout • GST Included
      </p>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-gray-700">
      <span>{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}