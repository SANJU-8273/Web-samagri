"use client";

import { useCart } from "../app/context/CartContext";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export default function CartDrawer() {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    isCartOpen,
    closeCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 40;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[9990]"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[92%] sm:w-[420px] z-[9999]
          bg-gradient-to-b from-[#FFFCF7]/95 to-[#F4ECE2]/95
          backdrop-blur-xl border-l border-[#E3D3B4]
          shadow-[0_0_40px_rgba(0,0,0,0.25)]
          transition-transform duration-300 ease-[cubic-bezier(.32,.94,.6,1)]
          flex flex-col
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <header className="px-5 py-4 flex justify-between items-center border-b border-[#E7D9BE]">
          <h2 className="text-[1.15rem] font-semibold text-[#3A2B0A]">
            Your Shopping Bag
          </h2>

          <button
            onClick={closeCart}
            className="text-[#7A6A48] hover:text-black"
          >
            <X className="h-6 w-6" />
          </button>
        </header>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center mt-20 text-gray-500">
              <div className="text-4xl mb-3">🛍</div>
              Your bag is empty
              <p className="text-[13px] text-gray-400 mt-1">
                Add items to continue
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 p-3 bg-white rounded-xl border border-[#E8DDC8] shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border border-[#E6D9C2]"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[0.94rem] font-semibold text-[#2C1C01]">
                      {item.name}
                    </h4>

                    <p className="text-[#B96A00] font-semibold text-[0.85rem] mt-1">
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity */}
                    <div className="flex items-center gap-2 bg-[#F3EFE6] px-2 py-1 rounded-full border border-[#D7CCB1]">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, Math.max(1, item.quantity - 1))
                        }
                        className="p-[3px] bg-white rounded-full border border-[#CDC1A4]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>

                      <span className="px-2 text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                        className="p-[3px] bg-white rounded-full border border-[#CDC1A4]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <footer className="p-5 border-t border-[#E6D9C2] bg-[#FFFCF7]/95 space-y-4">
          <div className="space-y-2 text-sm">

            {/* Subtotal */}
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-semibold">₹{subtotal}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span className="font-semibold">
                {subtotal === 0 ? (
                  "₹0"
                ) : shipping === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  `₹${shipping}`
                )}
              </span>
            </div>

            <hr className="border-[#E6D9C2]" />

            {/* Total */}
            <div className="flex justify-between text-[1.05rem] font-bold text-[#3A2B0A]">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Checkout */}
          <button
            onClick={() => {
              if (cartItems.length === 0) {
                toast.error("Your cart is empty! Add items to continue.");
                return;
              }

              closeCart();
              window.location.href = "/CheckOut";
            }}
            disabled={cartItems.length === 0}
            className={`w-full py-3.5 rounded-xl text-[0.95rem] font-semibold flex items-center justify-center gap-2 transition-all duration-300
              ${
                cartItems.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#B96A00] via-[#A45E00] to-[#8A5400] text-white hover:shadow-[0_4px_20px_rgba(185,106,0,0.45)] active:scale-[0.98]"
              }
            `}
          >
            Proceed to Checkout
          </button>
        </footer>
      </aside>
    </>
  );
}