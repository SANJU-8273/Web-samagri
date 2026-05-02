"use client";

import Link from "next/link";
import { Star, Tag, Plus, Minus, MapPin } from "lucide-react";
import ImageWithFallback from "./Fallback/ImageWithFallback";
import { useCart } from "../app/context/CartContext";
import { useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const { user } = useUser();
  const { openSignIn } = useClerk();

  const discount = product.discount || 0;

  const originalPrice =
    discount > 0
      ? Math.round((product.price * 100) / (100 - discount))
      : product.price;

  const imageUrl = product.images?.[0] || "/placeholder.png";

  const increaseQty = () => setQty((p) => p + 1);
  const decreaseQty = () => setQty((p) => (p > 1 ? p - 1 : 1));

  return (
    <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/shop/${product._id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />

          {discount > 0 && (
            <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
              <Tag className="h-3 w-3" />
              {discount}% OFF
            </span>
          )}

          {product.countInStock <= 0 && (
            <span className="absolute right-2 top-2 rounded-full bg-gray-900 px-2 py-1 text-[10px] font-bold text-white">
              Out of Stock
            </span>
          )}
        </div>
      </Link>

      <div className="rounded-b-2xl bg-gradient-to-br from-[#FFF4D6] via-[#FFE9AD] to-[#FFDD85] px-3 py-3">
        <Link href={`/shop/${product._id}`}>
          <h3 className="line-clamp-2 text-[13px] font-bold text-gray-900">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 text-[11px] font-medium text-gray-600">
          {product.category}
        </p>

        {product.location && (
          <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-500 line-clamp-1">
            <MapPin size={11} />
            {product.location}
          </p>
        )}

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-end gap-1">
            <p className="text-[15px] font-black text-[#3B1F1E]">
              ₹{product.price}
            </p>

            {discount > 0 && (
              <p className="text-[10px] text-gray-500 line-through">
                ₹{originalPrice}
              </p>
            )}
          </div>

          <div className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-1.5 py-[1px] text-[10px] font-bold text-green-700">
            <Star className="h-2.5 w-2.5 fill-green-500 text-green-500" />
            {product.rating ? product.rating.toFixed(1) : "0.0"}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl border border-gray-200 bg-white/70 px-2 py-1.5">
          <span className="text-[10px] font-bold text-gray-700">Qty</span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decreaseQty}
              className="rounded-md bg-white p-1"
            >
              <Minus size={11} />
            </button>

            <span className="text-xs font-bold">{qty}</span>

            <button
              type="button"
              onClick={increaseQty}
              className="rounded-md bg-white p-1"
            >
              <Plus size={11} />
            </button>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled={product.countInStock <= 0}
            onClick={(e) => {
              e.preventDefault();
              addToCart({ ...product, quantity: qty });
            }}
            className="rounded-xl border bg-white py-2.5 text-[12px] font-bold text-gray-800 disabled:opacity-50"
          >
            Add
          </button>

          <button
            type="button"
            disabled={product.countInStock <= 0}
            onClick={() => {
              if (!user) {
                openSignIn({
                  redirectUrl: `/CheckOut?productId=${product._id}&qty=${qty}`,
                });
                return;
              }

              window.location.href = `/CheckOut?productId=${product._id}&qty=${qty}`;
            }}
            className="rounded-xl bg-yellow-500 py-2.5 text-[12px] font-bold text-white disabled:opacity-50"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}