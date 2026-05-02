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
  const { user, isLoaded } = useUser();

  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");

  const items = buyNowItem ? [buyNowItem] : cartItems || [];

  const subtotal = items.reduce((sum, item) => {
    return sum + Number(item.price || 0) * Number(item.quantity || 1);
  }, 0);

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
    try {
      setPlacing(true);
      setError("");

      if (!isLoaded) {
        setError("User loading...");
        return;
      }

      if (!user) {
        setError("Please login first");
        return;
      }

      if (!paymentMethod) {
        setError("Please select payment method");
        return;
      }

      if (!deliveryMethod) {
        setError("Please select delivery method");
        return;
      }

      if (!items.length) {
        setError("Cart is empty");
        return;
      }

      if (!process.env.NEXT_PUBLIC_API_URL) {
        setError("NEXT_PUBLIC_API_URL missing hai");
        return;
      }

      if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY) {
        setError("NEXT_PUBLIC_RAZORPAY_KEY missing hai");
        return;
      }

      if (!window.Razorpay) {
        setError("Razorpay script load nahi hui");
        return;
      }

      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/payment/create`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: total }),
  }
);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Payment API failed");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency || "INR",
        name: "Samagri Store",
        description: "Order Payment",
        order_id: data.id,

        handler: function (response) {
          console.log("Payment Success:", response);
          alert("Payment Successful 🎉");
        },

        prefill: {
          name: user?.fullName || "",
          email: user?.primaryEmailAddress?.emailAddress || "",
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error("ERROR:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setPlacing(false);
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
        className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all ${
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