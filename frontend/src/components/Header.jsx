"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Flame, Menu, X } from "lucide-react";
import { useCart } from "../app/context/CartContext";
import { UserButton, useUser, useClerk } from "@clerk/nextjs"; // ⭐ Clerk import

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, cartCount } = useCart();

  const { user } = useUser();          // ⭐ Logged-in user check
  const { openSignIn } = useClerk();   // ⭐ Modal open function

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <header
      className={`container mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out rounded-b-2xl ${
        isScrolled
          ? "bg-gradient-to-r from-[#D9C29A]/95 via-[#E8D6B3]/95 to-[#F3E5C6]/95 backdrop-blur-xl border-b border-[#C9A875]/40 shadow-sm"
          : "bg-gradient-to-r from-[#E8D6B3]/80 via-[#F3E5C6]/80 to-[#FFF7E3]/80 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-2.5">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 group select-none"
        >
          <Flame
            className={`transition-all duration-300 ${
              isScrolled ? "h-6 w-6" : "h-8 w-8"
            } text-[#FF7A00] drop-shadow-[0_0_7px_rgba(255,122,0,0.35)] group-hover:rotate-12`}
          />
          <span
            className={`font-bold bg-gradient-to-r from-[#FF7A00] to-[#C46E00] bg-clip-text text-transparent transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Samagri
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[#2A1A00] font-medium text-sm tracking-wide group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D47C00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Search */}
          <div
            className={`hidden lg:flex relative transition-all duration-300 ${
              isScrolled ? "w-52" : "w-64"
            }`}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#2A1A00]" />
            <input
              type="text"
              placeholder="Search Puja items..."
              className="w-full pl-12 pr-4 py-2 rounded-full border border-[#00000020] bg-white text-[#2A1A00] placeholder-[#00000060] focus:outline-none focus:ring-2 focus:ring-[#D47C00]/30 text-sm"
            />
          </div>

          {/* Cart */}
          <button onClick={openCart} className="relative group">
            <div className="flex items-center justify-center h-10 w-10 rounded-full border border-[#00000025] bg-white hover:scale-110 transition-all hover:shadow-md">
              <ShoppingCart className="h-5 w-5 text-[#2A1A00]" />
            </div>

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-[#D47C00] text-white text-xs font-semibold rounded-full border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* 🔐 USER AUTH BUTTON */}
          {user ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox:
                    "h-10 w-10 rounded-full border border-[#00000025] bg-white hover:scale-110 transition-all hover:shadow-md",
                },
              }}
            />
          ) : (
            <button
              onClick={() => openSignIn({})}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-[#00000025] bg-white hover:scale-110 transition-all hover:shadow-md"
            >
              <User className="h-5 w-5 text-[#2A1A00]" />
            </button>
          )}

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-[#00000025] bg-white hover:scale-110 transition-all"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#2A1A00]" />
            ) : (
              <Menu className="h-6 w-6 text-[#2A1A00]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5C88A] shadow-md">
          <div className="flex flex-col items-center gap-6 py-5 text-[#2A1A00] font-medium text-base tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="relative px-3 py-1 group"
              >
                <span className="group-hover:text-[#D47C00] transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
