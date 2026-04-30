"use client";

import {
  Flower2, Heart, Leaf, Users as People,
  Package, MapPin, Shield
} from "lucide-react";

export default function About() {

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Purity",
      description: "Every product is sourced with devotion and authenticity.",
    },
    {
      icon: <People className="h-8 w-8" />,
      title: "Convenience",
      description: "All puja essentials delivered right to your doorstep.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Eco-friendly choices respecting nature and tradition.",
    },
  ];

  const stats = [
    { number: "500+", label: "Products", icon: <Package className="h-7 w-7" /> },
    { number: "10,000+", label: "Happy Customers", icon: <People className="h-7 w-7" /> },
    { number: "50+", label: "Cities Served", icon: <MapPin className="h-7 w-7" /> },
    { number: "100%", label: "Authentic Items", icon: <Shield className="h-7 w-7" /> },
  ];

  return (
    <div className="min-h-screen mx-auto container bg-[#FFF8E7]">

      {/* 🌟 PREMIUM HERO */}
      <section className="relative h-[460px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1616435577207-ca90abc6b732?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.55]"
        />

        {/* Deep Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5C1A1B]/70 via-[#7A180C]/40 to-[#FF9933]/30" />

        {/* Soft Glow at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide drop-shadow-xl">
            About <span className="text-[#D4AF37]">Samagri</span>
          </h1>

          {/* Gold Underline */}
          <div className="flex justify-center mb-5">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-100 opacity-95 leading-relaxed">
            Blending tradition with authenticity — making your spiritual journey
            pure, simple, and deeply connected.
          </p>
        </div>
      </section>


      {/* 📘 STORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

          <img
            src="https://images.unsplash.com/photo-1732382642488-b5cc395e685c?auto=format&fit=crop&w=1600&q=80"
            className="rounded-2xl h-[420px] object-cover shadow-xl"
          />

          <div>
            <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-[#FF9933]/20 to-[#D4AF37]/20 rounded-full text-[#800000] mb-4">
              Our Story
            </span>

            <h2 className="text-[#800000] text-3xl font-bold mb-6 leading-tight">
              The Journey of Samagri
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Samagri was created with a vision to make traditional puja and ritual essentials
              accessible to every home in India.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Each product is handpicked from trusted artisans to maintain purity and authenticity.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Today, we proudly serve thousands of families—helping them celebrate traditions with grace,
              devotion, and ease.
            </p>
          </div>

        </div>
      </section>

      {/* 🧘 FOUNDER NOTE */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">

          <Flower2 className="h-12 w-12 text-[#D4AF37] mx-auto mb-6" />

          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 
            border-l-4 border-[#D4AF37] pl-6 py-4 leading-relaxed">
            "Every product is chosen with the same devotion that you bring to your prayers.
            Our aim is to make your spiritual journey effortless while preserving the sanctity of every ritual."
          </blockquote>

          <p className="text-[#800000] font-semibold text-lg">— Founder, Samagri</p>

        </div>
      </section>

      {/* 🎯 VALUES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-[#800000] text-3xl font-bold">Our Values</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <Flower2 className="h-6 w-6 text-[#D4AF37]" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={i}
                className="bg-[#FFF8E7] p-10 rounded-2xl shadow-md hover:shadow-xl 
                transition-all text-center border border-[#D4AF37]/10"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full 
                  bg-gradient-to-br from-[#FF9933]/20 to-[#D4AF37]/20 text-[#800000] mx-auto mb-4">
                  {v.icon}
                </div>

                <h3 className="text-[#800000] text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-700 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 🏆 FINAL PREMIUM STATS SECTION */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C1A1B] tracking-tight">
              Our Achievements
            </h2>
            <p className="text-[#7A4A3A] mt-3 text-base md:text-lg">
              Trusted by thousands of families across India.
            </p>
            <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center flex flex-col items-center"
              >
                {/* Icon */}
                <div className="text-[#C6A664] mb-4">
                  {s.icon}
                </div>

                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-bold text-[#5C1A1B]">
                  {s.number}
                </h3>

                {/* Label */}
                <p className="text-[#7A4A3A] text-sm mt-2 tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}
