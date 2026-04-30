"use client";

import { Star, Flame } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 🌟 Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#800000] mb-3">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Flame className="h-6 w-6 text-[#D4AF37]" fill="#D4AF37" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>

        {/* 💬 Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFF8E7] rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* 👤 Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-[#800000] object-cover"
                />
                <div>
                  <h4 className="text-[#800000] font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.location}</p>
                </div>
              </div>

              {/* ⭐ Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "text-[#D4AF37] fill-[#D4AF37]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* 🗣️ Comment */}
              <p className="text-gray-700 leading-relaxed italic mb-4">
                “{t.comment}”
              </p>

              {/* 🪔 Divider */}
              <div className="flex justify-center pt-4 border-t border-[#D4AF37]/30">
                <Flame className="h-4 w-4 text-[#FF9933]" fill="#FF9933" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
