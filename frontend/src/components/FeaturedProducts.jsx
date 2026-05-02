"use client";

import { useState, useEffect } from "react";
import { Flower2 } from "lucide-react";
import ProductCard from "./ProductCard";

export default function FeaturedProducts({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // ✅ DEFAULT FIX
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is missing");
}

const res = await fetch(`${API_URL}/api/products`);

if (!res.ok) {
  throw new Error(`API Error: ${res.status}`);
}

const data = await res.json();

setProducts(data.products || data || []);
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const bestSellers = products.filter((p) => p.rating >= 4.5).slice(0, 8);
  const newArrivals = products.slice(0, 8);
  const festivalSpecials = products
    .filter((p) => p.category === "Pooja Kits")
    .slice(0, 8);

  const tabs = [
    { id: "all", label: "All", items: products },
    { id: "bestsellers", label: "Best Sellers", items: bestSellers },
    { id: "new", label: "New Arrivals", items: newArrivals },
    { id: "festival", label: "Festival", items: festivalSpecials },
  ];

  const activeItems =
    tabs.find((t) => t.id === activeTab)?.items || [];

  return (
    <section className="py-14 bg-gradient-to-br from-[#FFF7EA] via-[#FFE9C2] to-[#FFF3D1]">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Featured Products
          </h2>

          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-0.5 w-16 bg-gray-300" />
            <Flower2 className="h-6 w-6 text-amber-600" />
            <div className="h-0.5 w-16 bg-gray-300" />
          </div>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Discover our best-selling and latest arrivals
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-md scale-105"
                  : "bg-white border border-orange-200 text-orange-700 hover:bg-orange-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-500">
            Loading products...
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {/* PRODUCTS */}
        {!loading && !error && activeItems.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {activeItems.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && activeItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found 😔
          </p>
        )}
      </div>
    </section>
  );
}