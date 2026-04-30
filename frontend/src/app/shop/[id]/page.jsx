"use client";

import { use,useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../../components/ProductCard";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Check,
  Truck,
  ShieldCheck,
  Store,
  Undo2,
} from "lucide-react";

import Link from "next/link";

export default function ProductDetails(props) {
  const { addToCart } = useCart(); // Hook inside component
 const { user } = useUser();
const { openSignIn } = useClerk();
const router = useRouter();


  // Get product
  const { id } = use(props.params);
useEffect(() => {
  const fetchProduct = async () => {
    const res = await fetch(`http://localhost:5000/api/products/${id}`);
    const data = await res.json();
setProduct(data);
setActive(data.image);  };

  const fetchAllProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setAllProducts(data.products || []);
  };

  fetchProduct();
  fetchAllProducts();
}, [id]);
const [product, setProduct] = useState(null);
const [allProducts, setAllProducts] = useState([]);
const [quantity, setQuantity] = useState(1);
const [active, setActive] = useState("");

  if (!product)
    return (
      <div className="min-h-screen flex mx-auto container items-center justify-center bg-[#F9F2DF]">
        <div className="text-center space-y-3">
          <p className="text-sm tracking-[0.2em] uppercase text-gray-400">
            Oops!
          </p>
          <p className="text-2xl font-semibold text-gray-800">
            Product Not Found
          </p>
          <Link
            href="/shop"
            className="inline-flex mt-4 px-5 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Go back to shop
          </Link>
        </div>
      </div>
    );

  // Similar Products (same category, excluding current)
const similarProducts = allProducts
.filter((p) => p.category === product.category && p._id !== product._id)    .slice(0, 4);

  const images = product
  ? [product.image, product.image, product.image, product.image]
  : [];

  return (
    <div className="bg-gradient-to-b mx-auto container from-[#FDF6E8] via-[#F4E2B8] to-[#E6D4AC] min-h-screen">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-6 lg:pt-10">

        {/* TOP BAR: BACK + BREADCRUMB */}
        <div className="flex items-center justify-between gap-4 mb-6 lg:mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="hidden sm:flex text-xs font-medium text-gray-500 gap-1">
            <span className="uppercase tracking-[0.18em]">Samagri</span>
            <span>•</span>
            <span className="uppercase tracking-[0.18em]">
              {product.category}
            </span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">

          {/* LEFT — IMAGE GALLERY */}
          {/* Left Gallery */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">

              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-2.5 sm:gap-4 order-2 sm:order-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(img)}
                    className={`
                      w-14 h-14 sm:w-20 sm:h-20 rounded-xl border overflow-hidden cursor-pointer
                      bg-white/60 backdrop-blur
                      transition-all duration-200
                      ${active === img
                        ? "border-[#8A4A08] ring-2 ring-[#E9B65A]/70 shadow-md scale-[1.03]"
                        : "border-gray-200 hover:border-[#C28A32]"
                      }
                    `}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={product.name} />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 order-1 sm:order-2">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#FFF7E2] via-[#FBE3B2] to-[#F2CF7D] border border-[#E7C98C] overflow-hidden relative">
                  <img src={active} className="w-full h-full object-cover" alt={product.name} />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="space-y-7 lg:space-y-8">

            {/* Category */}
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#9A6C2B]">
              {product.category}
            </p>

            {/* Title + Tagline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1A0F] leading-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-700 max-w-xl">
                Carefully curated for your sacred rituals — a premium addition
                to your puja essentials with trusted quality and elegant design.
              </p>
            </div>

            {/* Rating + small info row */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating)
                        ? "fill-[#E8A534] text-[#E8A534]"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-gray-500 text-xs">• 248 reviews</span>
              </div>

              <span className="hidden sm:inline-block text-xs px-3 py-1 rounded-full bg-white/70 border border-[#E3C89E] text-[#7E5223] font-medium">
                Best Seller in {product.category}
              </span>
            </div>

            {/* Price Block */}
            <div className="space-y-1.5 bg-white/80 border border-[#E7D3AA] rounded-2xl px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
              <div className="flex items-end gap-3">
                <p className="text-3xl sm:text-4xl font-bold text-[#2B1A0F] leading-none">
                  ₹{product.price}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-0.5">
                  Inclusive of all taxes
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-[#7A5A2E]">
                Free shipping on orders above ₹499 • Secure checkout
              </p>
            </div>

            {/* Delivery */}
            <div className="flex items-start gap-3 bg-white/80 border border-[#E5D1A7] rounded-2xl p-4 shadow-sm">
              <div className="mt-0.5">
                <Truck className="h-5 w-5 text-[#7A4A1F]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Fast & Reliable Delivery
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Usually delivered in <span className="font-semibold">2–4 days</span> across major cities.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white/80 border border-[#E5D2A9] rounded-2xl p-4 sm:p-5 space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Highlights
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  Premium handpicked quality curated for rituals
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  Thoughtful packaging ideal for gifting & occasions
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  100% authentic & trusted DivineMart product
                </li>
              </ul>
            </div>

            {/* Quantity + Buttons */}
            <div className="space-y-4">

              {/* Quantity */}
              <div className="flex  items-center justify-between gap-4">
                <p className="font-medium text-gray-900 text-sm sm:text-base">
                  Quantity
                </p>
                <div className="flex items-center gap-3 border border-[#E1CDA5] bg-white/80 rounded-2xl px-2.5 py-1.5 shadow-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="h-9 w-9 bg-[#F3E4C0] rounded-xl text-lg font-semibold flex items-center justify-center hover:bg-[#E7D29C] active:scale-95 transition"
                  >
                    −
                  </button>

                  <span className="w-10 text-center font-semibold text-base">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="h-9 w-9 bg-[#F3E4C0] rounded-xl text-lg font-semibold flex items-center justify-center hover:bg-[#E7D29C] active:scale-95 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="hidden sm:flex flex-col sm:flex-row gap-3">

                {/* ADD TO CART */}
                <button
                  onClick={() => addToCart({ ...product, quantity })}
                  className="
      flex-1 py-4
      rounded-2xl
      text-sm sm:text-base font-semibold
      flex items-center justify-center gap-2 select-none
      text-[#8A4A08]
      bg-gradient-to-r from-[#FFF7E6] to-[#FFE8BF]
      border border-[#E6CFA3]
      shadow-[0_14px_32px_rgba(0,0,0,0.18)]
      transition-all duration-300
      hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)] hover:-translate-y-[2px]
      active:scale-[0.98]
    "
                >
                  <ShoppingCart className="h-5 w-5 text-[#C27A14]" />
                  Add to Cart
                </button>

                <button
                onClick={() => {
  if (!user) {
    openSignIn({
      redirectUrl: `/CheckOut?type=buyNow`,
    });
    return;
  }

  addToCart({ ...product, quantity }); // ⭐ FIX

  router.push(`/CheckOut?type=buyNow`);
}}
                  className="
    flex-1 py-4
    rounded-2xl text-center select-none
    text-white font-semibold
    text-sm sm:text-base
    bg-gradient-to-r from-[#F4A100] to-[#F6C453]
    border border-[#E4B65B]
    shadow-[0_12px_30px_rgba(0,0,0,0.18)]
    transition-all duration-300
    hover:brightness-110 hover:-translate-y-[2px]
    active:scale-[0.98]
  "
                >
                  Buy Now
                </button>


              </div>


            </div>
          </div>
        </div>

        {/* ---------- PRODUCT DETAILS SECTION (PREMIUM PROFESSIONAL) ---------- */}
        <div className="mt-14 lg:mt-20 border-t border-[#E4D7B8] pt-10 lg:pt-12 space-y-10">

          {/* Section Title */}
          <div className="flex items-start sm:items-end justify-between">

            <div className="space-y-1">
              <div className="w-10 h-[3px] bg-gradient-to-r from-[#D6B678] to-[#E9D8A6] rounded-full"></div>

              <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-semibold text-[#2B1A0F] tracking-tight">
                Product Details
              </h2>

              <p className="text-[11px] sm:text-[13px] text-gray-600">
                Everything you need to know before you bring it home.
              </p>
            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="bg-white/95 border border-[#E6D8B5] rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm space-y-3 sm:space-y-4">

            <div className="flex flex-col gap-1">
              <div className="w-8 h-[3px] bg-gradient-to-r from-[#D6B678] to-[#E9D8A6] rounded-full"></div>
              <h3 className="text-[15px] sm:text-lg font-semibold text-[#2B1A0F] tracking-tight">
                Description
              </h3>
            </div>

            <p className="text-[13px] sm:text-[15px] text-gray-700 leading-[1.6]">
              {product.description}
            </p>
          </div>


          {/* WHAT'S INSIDE */}
          {product.whatsInside && (
            <div className="bg-white/95 border border-[#E6D8B5] rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm space-y-4">

              <div className="flex flex-col gap-1">
                <div className="w-8 h-[3px] bg-gradient-to-r from-[#D6B678] to-[#E9D8A6] rounded-full"></div>
                <h3 className="text-[15px] sm:text-lg font-semibold text-[#2B1A0F] tracking-tight">
                  What’s Inside
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {product.whatsInside.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-1" />
                    <span className="text-[13px] sm:text-[15px] text-gray-700 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          )}


          {/* SPECIFICATIONS */}
          <div className="bg-white/95 border border-[#E6D8B5] rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm space-y-4">

            <div className="flex flex-col gap-1">
              <div className="w-8 h-[3px] bg-gradient-to-r from-[#D6B678] to-[#E9D8A6] rounded-full"></div>
              <h3 className="text-[15px] sm:text-lg font-semibold text-[#2B1A0F] tracking-tight">
                Specifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[13px] sm:text-[15px] text-gray-700">

              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#3D2C13]">Weight:</span> 400g
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#3D2C13]">Material:</span> Organic
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#3D2C13]">Dimensions:</span> 18 × 12 cm
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[#3D2C13]">Origin:</span> India
              </div>

            </div>
          </div>


          {/* SELLER / WARRANTY / RETURNS (Modern Professional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {/* SELLER INFO */}
            <div className="bg-white/95 border border-[#E6D8B5] rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-[#F7EED3] to-[#E8D7A8] border border-[#E2CFA2] flex items-center justify-center shadow-inner">
                <Store className="h-5 w-5 sm:h-6 sm:w-6 text-[#7A4A1F]" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#2B1A0F] tracking-tight">
                  Sold By
                </p>
                <p className="text-[13px] sm:text-sm text-gray-700">
                  DivineMart Official Store
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#8A774F] leading-snug">
                  Verified & trusted supplier for devotional essentials.
                </p>
              </div>
            </div>

            {/* RETURN POLICY */}
            <div className="bg-white/95 border border-[#E6D8B5] rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-[#F7EED3] to-[#E8D7A8] border border-[#E2CFA2] flex items-center justify-center shadow-inner">
                <Undo2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#7A4A1F]" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#2B1A0F] tracking-tight">
                  7-Day Easy Returns
                </p>
                <p className="text-[13px] sm:text-sm text-gray-700 leading-snug">
                  Hassle-free return & refund support.
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#8A774F] leading-snug">
                  Applicable for damaged or incorrect items.
                </p>
              </div>
            </div>

            {/* WARRANTY / AUTHENTICITY */}
            <div className="bg-white/95 border border-[#E6D8B5] rounded-2xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-[#F7EED3] to-[#E8D7A8] border border-[#E2CFA2] flex items-center justify-center shadow-inner">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#7A4A1F]" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#2B1A0F] tracking-tight">
                  Authenticity Guaranteed
                </p>
                <p className="text-[13px] sm:text-sm text-gray-700 leading-snug">
                  Each item is purity-checked and quality verified.
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#8A774F] leading-snug">
                  Shop confidently with DivineMart certified assurance.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* ---------- SIMILAR PRODUCTS (PROFESSIONAL SECTION) ---------- */}
        {similarProducts.length > 0 && (
          <div className="mt-14 lg:mt-20 border-t border-[#E3D3A4] pt-10">

            {/* Section Header (Professional) */}
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#C89A3A] to-[#E4C786] rounded-full"></div>

                <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-semibold text-[#2B1A0F] tracking-tight leading-snug">
                  Similar Products
                </h2>

                <p className="text-[11px] sm:text-[13px] text-gray-600">
                  Curated picks, specially chosen for you.
                </p>
              </div>

              <Link
                href="/shop"
                className="
      hidden sm:inline-flex items-center
      text-[11px] font-medium
      text-[#5F3B14]
      border border-[#D9C08F]
      bg-white/60 backdrop-blur
      px-3.5 py-1.5 rounded-full
      hover:bg-[#FFF5DE] hover:text-[#3F280B]
      transition-all duration-200
    "
              >
                View All
              </Link>
            </div>


            {/* Product List */}
            <div
              className="
        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
        gap-3 sm:gap-5
        overflow-x-auto sm:overflow-visible
        pb-2 sm:pb-0
        scroll-smooth
      "
              style={{ scrollbarWidth: "none" }}
            >
              {similarProducts.map((item) => (
                <div key={item._id} className="min-w-[45%] sm:min-w-0">
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------- CUSTOMER REVIEWS ---------- */}
        <div className="mt-16 lg:mt-20 border-t border-[#E0CDA1] pt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#2B1A0F] mb-8">
            Customer Reviews
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* LEFT SUMMARY CARD */}
            <div className="bg-white/95 border border-[#E4D0A8] rounded-3xl p-7 shadow-sm">
              {/* Overall Rating Number + Stars */}
              <div className="flex items-end gap-3">
                <p className="text-5xl sm:text-6xl font-bold text-gray-900 leading-none">
                  {product.rating.toFixed(1)}
                </p>

                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating)
                        ? "text-[#1E824C] fill-[#1E824C]"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-1">
                Based on 248 verified customer reviews
              </p>

              {/* Rating Distribution */}
              <div className="mt-6 space-y-3">
                {[
                  { star: 5, percent: 78 },
                  { star: 4, percent: 52 },
                  { star: 3, percent: 27 },
                  { star: 2, percent: 9 },
                  { star: 1, percent: 4 },
                ].map((item) => (
                  <div key={item.star} className="flex items-center gap-3">
                    <span className="w-10 text-sm font-medium text-gray-800">
                      {item.star}★
                    </span>

                    <div className="flex-1 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#1E824C] transition-all duration-500"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>

                    <span className="w-10 text-sm text-gray-600">
                      {item.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT REVIEWS */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">

              {/* REVIEW 1 */}
              <div className="rounded-3xl bg-white/95 border border-[#E4D0A8] p-6 sm:p-7 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">
                    Riya Sharma
                  </p>
                  <p className="text-xs text-gray-400">2 days ago</p>
                </div>

                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm sm:text-[15px] mt-4 leading-relaxed">
                  Amazing quality! Packaging was premium and delivery was fast.
                  The product feels very auspicious and added a special touch to
                  our puja. Highly recommended for gifting as well.
                </p>

                <div className="flex gap-3 mt-5">
                  <img
                    src={product.image}
                    className="w-20 h-20 rounded-xl object-cover shadow-sm"
                    alt="Review photo"
                  />
                  <img
                    src={product.image}
                    className="w-20 h-20 rounded-xl object-cover shadow-sm"
                    alt="Review photo"
                  />
                </div>
              </div>

              {/* REVIEW 2 */}
              <div className="rounded-3xl bg-white/95 border border-[#E4D0A8] p-6 sm:p-7 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">
                    Amit Verma
                  </p>
                  <p className="text-xs text-gray-400">1 week ago</p>
                </div>

                <div className="flex gap-1 mt-2">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                </div>

                <p className="text-gray-700 text-sm sm:text-[15px] mt-4 leading-relaxed">
                  Very good product. Worth the money. The fragrance, packaging
                  and overall experience was great. One star less only because
                  delivery took a day extra in my area.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ---------- MOBILE BOTTOM BAR ---------- */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FFF4E2]/95 backdrop-blur border-t border-[#E4C899] p-3 flex sm:hidden gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.18)]">
        <button
          onClick={() => addToCart({ ...product, quantity })}
          className="flex-1 py-3 bg-gradient-to-r from-[#C86A11] to-[#E9B03B]
          text-white rounded-xl font-semibold flex items-center justify-center gap-2
          text-sm
          transition-all duration-200 active:scale-95"
        >
          <ShoppingCart className="h-5 w-5" /> Add
        </button>

        <button
          className="flex-1 py-3 bg-white text-[#4C2A1A] font-semibold rounded-xl
          text-sm
          border border-[#E4C899] hover:bg-[#FFF4E2] transition-all duration-200 active:scale-95"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
