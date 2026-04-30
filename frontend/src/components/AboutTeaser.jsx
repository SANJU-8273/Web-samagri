"use client";

import Link from "next/link";

import  ImageWithFallback  from "./Fallback/ImageWithFallback";

export default function AboutTeaser() {
  return (
    <section className="py-16 bg-[#FFF8E7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 🖼️ Image Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1732382642488-b5cc395e685c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWphJTIwdGhhbGklMjBpdGVtc3xlbnwxfHx8fDE3NjI5MjAzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Puja Thali"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/30 to-transparent"></div>
          </div>

          {/* 🪔 Content Section */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#FF9933]/20 to-[#D4AF37]/20 rounded-full text-[#800000] mb-4">
                About Samagri
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#800000] mb-4">
                Bringing Purity & Tradition to Your Doorstep
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Samagri brings purity and tradition to your doorstep — authentic items for every puja.
              We carefully curate each product to ensure you receive only the finest quality samagri
              for your spiritual journey.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From daily worship essentials to complete festival kits, every item is sourced with
              devotion and packed with care, making your puja experience seamless and sacred.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/About">
                <button className="bg-[#FFF8E7] hover:bg-white text-[#800000] border-2 border-[#FF9933] rounded-full px-8">
                  Know More
                </button>
              </Link>
            </div>

            {/* 📊 Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl text-[#FF9933] font-bold">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#FF9933] font-bold">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#FF9933] font-bold">100%</div>
                <div className="text-sm text-gray-600">Authentic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
