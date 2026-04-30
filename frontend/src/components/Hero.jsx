"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import heroimg from "../../public/pngtree-traditional-puja-thali-plate-for-ritual-ceremony-png-image_13695387-removebg-preview.png";

export default function Hero() {
  return (
    <section className=" rounded-b-sm container relative flex flex-row items-center justify-between w-full overflow-hidden bg-gradient-to-br from-[#ff8f27] via-[#FFE08A] to-[#FFC24A] px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-0 min-h-[380px] sm:min-h-[430px] md:min-h-[520px]">

      {/* LEFT CONTENT */}
      <div className="text-left max-w-[58%] sm:max-w-md">
        <p className="text-[#A64B00] uppercase tracking-[0.18em] text-[11px] sm:text-xs md:text-sm font-semibold mb-2 sm:mb-3">
          Pure · Sacred · Delivered
        </p>

        <h1 className="text-[26px] sm:text-[34px] md:text-5xl font-extrabold text-[#6B0000] leading-snug mb-3 sm:mb-4">
          Discover the <span className="text-[#B8860B]">Divine Essence</span> of Every Ritual
        </h1>

        <p className="text-[#7A2E00] text-[12px] sm:text-sm md:text-lg opacity-95 max-w-sm mb-5 leading-relaxed">
          Bringing you authentic <span className="text-[#FF6A00] font-medium">Puja Samagri</span>, crafted with devotion and care.
        </p>

       {/* Buttons */}
<div className="flex flex-row items-center gap-2 sm:gap-4">
  
  {/* Shop Button */}
  <Link href="/shop">
    <button
      className="bg-gradient-to-r from-[#FF6A00] to-[#E7B10A] 
      hover:from-[#ff7e1f] hover:to-[#f1c247]
      text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full 
      text-[12px] sm:text-sm font-medium border border-[#C28A0A]/60 shadow-md
      transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_4px_14px_rgba(255,140,0,0.40)]"
    >
      Shop Now
    </button>
  </Link>

  {/* Offers Button */}
  <Link href="/shop?filter=festivals">
    <button
      className="flex items-center justify-center gap-1 
      bg-white/90 hover:bg-white text-[#8B0000] 
      px-5 sm:px-7 py-2 sm:py-2.5 rounded-full 
      text-[12px] sm:text-sm font-medium border-2 border-[#E7B10A]/50 shadow-sm
      transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_4px_14px_rgba(255,180,0,0.35)] backdrop-blur"
    >
      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#FF6A00] group-hover:rotate-12 transition-transform duration-300" />
      Offers
    </button>
  </Link>

</div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-end w-[42%] sm:w-auto mt-4 sm:mt-0">
        {/* Glow Behind Image */}
        <div className="absolute inset-0 m-auto w-[68%] sm:w-[72%] max-w-[420px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,200,90,0.45),rgba(255,150,50,0.12),transparent)] blur-sm pointer-events-none" />

        <Image
          src={heroimg}
          alt="Puja Samagri Kalash Thali"
          className="w-[145px] sm:w-[230px] md:w-[350px] lg:w-[420px] object-contain drop-shadow-[0_12px_26px_rgba(150,70,0,0.28)]"
          priority
        />
      </div>

    </section>
  );
}
