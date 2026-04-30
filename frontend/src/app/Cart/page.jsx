"use client";

import React from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import ImageWithFallback from "../../components/Fallback/ImageWithFallback";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems = [], updateQuantity, removeItem } = useCart();
  const [paymentMethod, setPaymentMethod] = React.useState("COD");
  const router = useRouter();

  // ✅ SAFE CALCULATIONS
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const shipping = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 40;
  const total = subtotal + shipping;

  /* ---------------- EMPTY CART ---------------- */
  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="text-center">
          <ShoppingBag className="mx-auto mb-6 h-20 w-20 text-gray-300" />

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mb-6 text-sm">
            Looks like you haven't added anything yet.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  /* ---------------- MAIN UI ---------------- */
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto px-4 pb-36 pt-6">

        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Shopping Cart ({cartItems.length})
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {/* -------- LEFT -------- */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl p-4 shadow-sm border flex gap-4"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 border">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 text-sm mt-1">
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">

                    {/* QTY */}
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-md border">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, Math.max(1, item.quantity - 1))
                        }
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="px-3 text-sm">{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>

                {/* ITEM TOTAL */}
                <div className="hidden md:block text-right">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* -------- RIGHT -------- */}
          <div className="bg-white rounded-xl p-6 shadow-sm border h-fit">

            <h3 className="text-lg font-semibold mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm pb-4 border-b">

              <div className="flex justify-between">
                <span>Cart Total</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Packaging</span>
                <span>₹0</span>
              </div>

            </div>

            <div className="flex justify-between font-bold py-4">
              <span>Total</span>
              <span className="text-blue-600">₹{total}</span>
            </div>

            {/* PAYMENT */}
            <h4 className="text-sm font-semibold mb-3">
              Payment Method
            </h4>

            {["UPI","Debit Card","Credit Card","Net Banking","Wallets","COD"].map((method) => (
              <label
                key={method}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer mb-2 ${
                  paymentMethod === method
                    ? "border-blue-500 bg-blue-50"
                    : "bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                {method}
              </label>
            ))}

            {/* BUTTON */}
            <button
              onClick={() => {
                localStorage.setItem("paymentMethod", paymentMethod);
                router.push("/CheckOut"); // ✅ FIXED
              }}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg"
            >
              Proceed to Payment
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t flex justify-between px-4 py-4">

        <div>
          <p className="text-xs">Total</p>
          <p className="text-xl font-bold">₹{total}</p>
        </div>

        <button
          onClick={() => {
            localStorage.setItem("paymentMethod", paymentMethod);
            router.push("/CheckOut"); // ✅ FIXED
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}