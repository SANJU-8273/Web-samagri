"use client";

import Image from "next/image";
import Link from "next/link";
import { Flower2 } from "lucide-react";
import { categoryData } from "../data/CategoryData";

export default function Categories() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#FFF8F0] to-[#FDEEDC]">
      <div className="container mx-auto px-6 lg:px-12">

   {/* ---------------- SECTION TITLE ---------------- */}
<div className="text-center mb-14">

  {/* HEADING */}
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
  Sacred Puja Collections
</h2>



  {/* DECORATIVE DIVIDER */}
  <div className="flex items-center justify-center gap-4">
    <div className="h-0.5 w-16 bg-gray-300" />

    <Flower2 className="h-6 w-6 text-amber-600" />

    <div className="h-0.5 w-16 bg-gray-300" />
  </div>

  {/* SUBTEXT */}
  <p className="mt-3 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
    Explore premium categories crafted with care for your rituals, festivals, and daily devotion.
  </p>
</div>



        {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
  {categoryData.map((cat) => (
    <Link
      key={cat.id}
      href={`/shop?category=${encodeURIComponent(cat.name)}`}
      className="
        group relative rounded-2xl 
        border border-[#E5C28A]/40 
        shadow-lg hover:shadow-2xl 
        transition-all duration-500 
        overflow-hidden flex flex-col
        bg-white/60 backdrop-blur-md
      "
    >
      {/* Image Wrapper */}
      <div className="
        relative h-36 sm:h-44 md:h-52 lg:h-56 overflow-hidden rounded-t-2xl
      ">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="
            object-cover transition-all duration-700
            group-hover:scale-110 
            group-hover:brightness-[0.85]
          "
        />

        {/* Soft Gold Overlay */}
        <div className="
          absolute inset-0 
          bg-gradient-to-t 
          from-[#5C1A1B]/60 via-transparent to-transparent
          opacity-60
        " />
      </div>

      {/* Text Wrapper (UPDATED BG HERE) */}
      <div
  className="
    p-3 sm:p-4 text-center flex-1 flex flex-col justify-center
    bg-gradient-to-br from-[#FFF4D6] via-[#FFE9AD] to-[#FFDD85]
    group-hover:from-[#FFE39A] group-hover:via-[#FFD067] group-hover:to-[#FFBE3F]
    transition-all duration-500
  "
>
  <h3
    className="
      text-sm sm:text-lg font-semibold 
      text-black
      mb-1 sm:mb-2 transition-all
      group-hover:text-[#7A2E00]   /* subtle saffron-brown hover */
    "
  >
    {cat.name}
  </h3>

  <p
    className="
      text-[11px] sm:text-sm 
      text-black/70
      leading-relaxed line-clamp-2
    "
  >
    {cat.description}
  </p>
</div>



      {/* Gold Glow Border */}
      <div
        className="
          absolute inset-0 
          border-2 border-[#D4AF37] rounded-2xl 
          opacity-0 group-hover:opacity-100 
          transition-all duration-500 
          shadow-[0_0_12px_#D4AF37]
        "
      />
    </Link>
  ))}
</div>


      </div>
    </section>
  );
}  