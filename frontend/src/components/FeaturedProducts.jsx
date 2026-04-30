"use client";

import { useState, useEffect } from "react";
import { Flower2 } from "lucide-react";
import ProductCard from "./ProductCard";

export default function FeaturedProducts({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("bestsellers");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        setProducts(data.products);
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const bestSellers = products.filter((p) => p.rating >= 4.8).slice(0, 4);
  const newArrivals = products.slice(0, 4);
  const festivalSpecials = products
    .filter((p) => p.category === "Festival Kits")
    .slice(0, 4);

  const tabs = [
    { id: "bestsellers", label: "Best Sellers", items: bestSellers },
    { id: "all", label: "All", items: products.slice(0, 4) },
    { id: "new", label: "New Arrivals", items: newArrivals },
    { id: "festival", label: "Festival", items: festivalSpecials },
  ];

  const activeItems = tabs.find((t) => t.id === activeTab)?.items || [];

  return (
    <section className="py-10 bg-gradient-to-br from-[#FFF7EA] via-[#FFE9C2] to-[#FFF3D1]">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Featured Products
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-16 bg-gray-300" />
            <Flower2 className="h-6 w-6 text-amber-600" />
            <div className="h-0.5 w-16 bg-gray-300" />
          </div>

          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Discover our best-selling and newly arrived products
          </p>
        </div>

        <div className="flex justify-center gap-3 md:gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all border ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#FF8A1A] to-[#FFB444] text-white border-transparent shadow-lg scale-[1.05]"
                  : "bg-white text-[#7A4A00] border-[#F2C76E] hover:bg-[#FFF3D6]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {activeItems.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}