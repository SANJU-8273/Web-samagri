"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  User,
  Search,
  Flame,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../app/context/CartContext";
import { UserButton, useUser, useClerk } from "@clerk/nextjs";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔥 NEW STATES
  const [showVendorModal, setShowVendorModal] = useState(false);
  const [isVendor, setIsVendor] = useState(false);

  const { openCart, cartCount } = useCart();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // 🔥 check vendor status
    const vendor = localStorage.getItem("isVendor");
    if (vendor === "true") setIsVendor(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <>
      <header
        className={`container mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out rounded-b-2xl ${
          isScrolled
            ? "bg-gradient-to-r from-[#D9C29A]/95 via-[#E8D6B3]/95 to-[#F3E5C6]/95 backdrop-blur-xl border-b border-[#C9A875]/40 shadow-sm"
            : "bg-gradient-to-r from-[#E8D6B3]/80 via-[#F3E5C6]/80 to-[#FFF7E3]/80 backdrop-blur-md border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-2.5">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <Flame className="h-7 w-7 text-[#FF7A00]" />
            <span className="font-bold text-xl bg-gradient-to-r from-[#FF7A00] to-[#C46E00] bg-clip-text text-transparent">
              Samagri
            </span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D47C00] group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* SEARCH */}
            <div className="hidden lg:flex relative w-56">
              <Search className="absolute left-3 top-2 text-gray-500" />
              <input
                placeholder="Search..."
                className="pl-10 pr-3 py-2 w-full rounded-full border bg-white"
              />
            </div>

            {/* CART */}
            <button onClick={openCart} className="relative">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* AUTH */}
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button onClick={() => openSignIn({})}>
                <User />
              </button>
            )}

            {/* 🔥 VENDOR BUTTON */}
            {user && !isVendor && (
              <button
                onClick={() => setShowVendorModal(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
              >
                Register as Vendor
              </button>
            )}

            {/* 🔥 DASHBOARD */}
            {user && isVendor && (
              <Link
                href="/Dashboard"
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
              >
                Dashboard
              </Link>
            )}

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
          </div>
        </div>
      </header>

      {/* 🔥 VENDOR MODAL */}
{showVendorModal && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">

    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-7 w-[90%] max-w-md shadow-2xl border border-gray-200">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowVendorModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
      >
        <X />
      </button>

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-center mb-1">
        Become a Vendor 🏪
      </h2>
      <p className="text-center text-gray-500 text-sm mb-5">
        Start selling your products with Samagri
      </p>

      {/* FORM */}
      <div className="space-y-4">
        <input
          placeholder="Shop Name"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <input
          placeholder="City"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <input
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </div>

      {/* SUBMIT */}
      <button
        onClick={() => {
          localStorage.setItem("isVendor", "true");
          setIsVendor(true);
          setShowVendorModal(false);

          // Show success toast
          const toast = document.createElement("div");
          toast.innerText = "🎉 You are now a Vendor!";
          toast.className =
            "fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-xl shadow-lg animate-slideUp";
          document.body.appendChild(toast);

          setTimeout(() => {
            toast.remove();
          }, 3000);
        }}
        className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.03] active:scale-[0.97] transition"
      >
        Submit
      </button>

      {/* CANCEL */}
      <button
        onClick={() => setShowVendorModal(false)}
        className="w-full mt-3 text-gray-500 hover:text-black transition"
      >
        Cancel
      </button>
    </div>
  </div>
)}
    </>
  );
}