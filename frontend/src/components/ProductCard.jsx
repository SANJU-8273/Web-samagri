"use client";

import Link from "next/link";
import { ShoppingCart, Star, Tag, Plus, Minus } from "lucide-react";
import ImageWithFallback from "./Fallback/ImageWithFallback";
import { useCart } from "../app/context/CartContext";
import { useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const { user } = useUser();
  const { openSignIn } = useClerk();

  const discount = product.discount || 12;
  const originalPrice = Math.round(
    (product.price * (100 + discount)) / 100
  );

  const increaseQty = () => setQty((p) => p + 1);
  const decreaseQty = () => setQty((p) => (p > 1 ? p - 1 : 1));

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xl hover:shadow-md transition-all duration-300">

      <Link href={`/shop/${product._id}`}>
        <div className="relative aspect-square bg-gray-100 overflow-hidden rounded">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />

          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-1.5 py-[1.5px] rounded-full font-semibold flex items-center gap-1 shadow-sm">
            <Tag className="h-3 w-3" />
            {discount}% OFF
          </span>
        </div>
      </Link>

      <div className="px-2.5 py-2.5 bg-gradient-to-br from-[#FFF4D6] via-[#FFE9AD] to-[#FFDD85] rounded-b-2xl">

        <Link href={`/shop/${product._id}`}>
          <h3 className="text-[12px] font-semibold text-gray-900 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center justify-between">

          <div className="flex items-end gap-1">
            <p className="text-[14px] font-bold text-[#3B1F1E]">
              ₹{product.price}
            </p>

            <p className="text-[10px] text-gray-500 line-through">
              ₹{originalPrice}
            </p>
          </div>

          <div className="inline-flex items-center gap-1 bg-green-50 border border-green-200 px-1.5 py-[1px] rounded-full text-[10px] font-semibold text-green-700">
            <Star className="h-2.5 w-2.5 fill-green-500 text-green-500" />
            {product.rating?.toFixed(1)}
          </div>
        </div>

        <div className="mt-2 bg-gray-100 px-2 py-1 rounded-md flex items-center justify-between border border-gray-200">
          <span className="text-[10px] font-medium">Qty</span>

          <div className="flex items-center gap-1.5">
            <button onClick={decreaseQty}>
              <Minus size={10} />
            </button>

            <span>{qty}</span>

            <button onClick={increaseQty}>
              <Plus size={10} />
            </button>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({ ...product, quantity: qty });
            }}
            className="py-2.5 text-[12px] font-semibold rounded-md bg-white border"
          >
            Add
          </button>

          <button
            onClick={() => {
              if (!user) {
                openSignIn({
                  redirectUrl: `/CheckOut?productId=${product._id}&qty=${qty}`,
                });
                return;
              }

              window.location.href = `/CheckOut?productId=${product._id}&qty=${qty}`;
            }}
            className="py-2.5 text-[12px] font-semibold rounded-md bg-yellow-500 text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}