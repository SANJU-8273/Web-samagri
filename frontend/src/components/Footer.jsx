"use client";

import Link from "next/link";
import { Instagram, Youtube, MessageCircle, Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" container mx-auto relative bg-[rgb(92,26,27)] text-[#FFF8E7] overflow-hidden">
      {/* 🌅 Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#400F0F] via-[#5C1A1B] to-[#7A2424]" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      {/* 🔥 Decorative Floating Diyas */}
      <div className="absolute inset-0 opacity-[0.07] flex justify-center">
        {[...Array(18)].map((_, i) => (
          <Flame key={i} className="h-6 w-6 text-[#D4AF37] mx-2 animate-pulse" />
        ))}
      </div>

      {/* 🌸 Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 🪔 Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-7 w-7 text-[#FF9933]" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
                Samagri
              </h2>
            </div>
            <p className="text-sm text-[#FFF8E7]/90 leading-relaxed max-w-xs">
              Your trusted source for premium Puja Samagri and festival kits — 
              blending devotion with convenience, delivered to your doorstep.
            </p>
          </div>

          {/* ⚡ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Shop", href: "/shop" },
                { name: "About Us", href: "/About" },
                { name: "Contact", href: "/Contact" },
                { name: "FAQs", href: "/FAQs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FF9933] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🌸 Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* 🌿 Socials */}
          <div className="text-center lg:text-right">
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
              Stay Connected
            </h3>
            <div className="flex justify-center lg:justify-end gap-4 mb-4">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: MessageCircle, href: "https://wa.me/919999999999" },
                { icon: Youtube, href: "https://youtube.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full border-2 border-[#D4AF37]/70 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#5C1A1B] transition-all hover:scale-105"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-[#FFF8E7]/80">Made with devotion in India 🇮🇳</p>
          </div>
        </div>

        {/* ⚖️ Bottom bar */}
        <div className="border-t border-[#D4AF37]/30 pt-6 text-center text-xs text-[#FFF8E7]/80">
          <p>
            © {new Date().getFullYear()} <span className="text-[#D4AF37] font-medium">Samagri</span>. 
            All rights reserved. Crafted with devotion 🪔
          </p>
        </div>
      </div>
    </footer>
  );
}
