"use client";

import Image from "next/image";
import { Flower2, MapPin, Loader2, ArrowRight } from "lucide-react";
import { categoryData } from "../data/CategoryData";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Categories() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleCategoryClick = (categoryName) => {
    const location = JSON.parse(localStorage.getItem("userLocation"));

    if (!location || !location.lat) {
      setSelectedCategory(categoryName);
      setShowModal(true);
    } else {
      router.push(
        `/shop?category=${encodeURIComponent(categoryName)}&lat=${location.lat}&lng=${location.lng}`
      );
    }
  };

  const handleGetLocation = () => {
    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const locationData = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };

        localStorage.setItem("userLocation", JSON.stringify(locationData));
        setShowModal(false);
        setLoading(false);

        router.push(
          `/shop?category=${encodeURIComponent(selectedCategory)}&lat=${locationData.lat}&lng=${locationData.lng}`
        );
      },
      () => {
        setError("Location permission denied. Please allow location access.");
        setLoading(false);
      }
    );
  };

  return (
    <section className="relative overflow-hidden py-16 bg-[#FFF8EF]">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            <Flower2 size={16} />
            Sacred Collection
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Shop by Puja Category
          </h2>

          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Premium pooja essentials, kits and decor items crafted for daily rituals and festivals.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.name)}
              className="group text-left rounded-3xl bg-white shadow-md hover:shadow-2xl border border-orange-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-orange-50">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold drop-shadow">
                    {cat.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-white to-orange-50">
                <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">
                  {cat.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-600">
                    Explore Products
                  </span>

                  <span className="h-9 w-9 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-orange-600 transition">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
              <MapPin className="text-orange-600" size={26} />
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-900">
              Allow Location Access
            </h2>

            <p className="mt-2 text-center text-sm text-gray-500">
              We’ll show nearby shops and available products for your selected category.
            </p>

            {error && (
              <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              onClick={handleGetLocation}
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-500 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 hover:bg-orange-600 disabled:bg-gray-300 disabled:shadow-none transition"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Fetching Location..." : "Use Current Location"}
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="mt-3 w-full rounded-2xl py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}