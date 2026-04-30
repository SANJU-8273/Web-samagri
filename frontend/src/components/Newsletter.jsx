"use client";

import { useState } from "react";
import { Sparkles, Mail, Flower2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    setMessage("✅ Thank you for subscribing! 🙏 You're now part of Samagri family.");
    setEmail("");
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <section className="container relative py-24 bg-[#FFF8E7] overflow-hidden">
      {/* 🌅 Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E7] via-[#FFFAF0] to-[#FFF8E7]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-floral.png')] opacity-[0.04]" />

      {/* 🌸 Main Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center max-w-5xl">
        {/* ✨ Icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="p-5 bg-gradient-to-tr from-[#FF9933]/30 to-[#D4AF37]/40 rounded-full shadow-md">
            <Sparkles className="h-9 w-9 text-[#FF9933]" />
          </div>
        </div>

        {/* 🪔 Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#5C1A1B] leading-tight mb-5">
          Join the <span className="text-[#D4AF37]">Divine Circle</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Get <span className="text-[#FF9933] font-medium">festival offers</span>,{" "}
          <span className="text-[#D4AF37] font-medium">spiritual insights</span>, and
          special <span className="text-[#800000] font-semibold">Samagri updates</span> directly to your inbox.
        </p>

        {/* 💌 Form Box */}
        <div className="w-full max-w-3xl bg-white/70 backdrop-blur-lg rounded-3xl border border-[#D4AF37]/30 shadow-xl p-8 sm:p-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <div className="relative flex-grow w-full">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-[#D4AF37]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-14 pr-4 h-14 rounded-full border-2 border-[#FF9933]/40 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none bg-white/90 text-[#5C1A1B] text-base sm:text-lg placeholder-[#B06600]/60 shadow-sm transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="whitespace-nowrap bg-gradient-to-r from-[#FF9933] to-[#D4AF37] hover:from-[#FF9933]/90 hover:to-[#D4AF37]/90 text-white rounded-full px-10 sm:px-12 h-14 font-semibold text-base sm:text-lg shadow-md hover:shadow-xl transition-all border border-[#D4AF37]/50"
            >
              Subscribe
            </button>
          </form>

          {/* 🔔 Success / Error Message */}
          {message && (
            <p
              className={`mt-6 text-sm sm:text-base text-center ${
                message.includes("❌")
                  ? "text-red-600"
                  : "text-green-600 font-medium"
              }`}
            >
              {message}
            </p>
          )}
        </div>

        {/* 🌼 Decorative Elements */}
        <div className="flex justify-center mt-12 opacity-80">
          <Flower2 className="h-8 w-8 text-[#D4AF37]" />
          <Flower2 className="h-8 w-8 text-[#FF9933] rotate-180 mx-3" />
          <Flower2 className="h-8 w-8 text-[#D4AF37]" />
        </div>

        {/* 🔒 Privacy Note */}
        <p className="text-xs sm:text-sm text-gray-600 mt-8">
          🔒 We respect your privacy — unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  );
}
