"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { PackagePlus, MapPin, Loader2, ImagePlus } from "lucide-react";

export default function AddProductPage() {
  const router = useRouter();
  const { getToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    images: [],
    description: "",
    brand: "India Traditional",
    category: "",
    location: "",
    lat: "",
    lng: "",
    price: "",
    discount: "",
    countInStock: "",
    ecoFriendly: false,
    madeInIndia: true,
    whatsInside: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    setForm((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Your browser location support nahi karta");
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          );

          const data = await res.json();

          setForm((prev) => ({
            ...prev,
            location: data.display_name || `${lat}, ${lng}`,
            lat,
            lng,
          }));
        } catch (error) {
          console.log(error);
          alert("Location address fetch nahi ho paya");
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        console.log(error);
        setLocationLoading(false);
        alert("Location permission allow karo");
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.images.length) {
      alert("Kam se kam ek product image select karo");
      return;
    }

    if (!form.location || !form.lat || !form.lng) {
      alert("Please current location detect karo");
      return;
    }

    try {
      setLoading(true);

     const token = await getToken({ template: undefined });

if (!token) {
  alert("Please login first");
  setLoading(false);
  return;
}

console.log("TOKEN:", token);

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("brand", form.brand);
      formData.append("category", form.category);
      formData.append("location", form.location);
      formData.append("lat", form.lat);
      formData.append("lng", form.lng);
      formData.append("price", form.price);
      formData.append("discount", form.discount || 0);
      formData.append("countInStock", form.countInStock);
      formData.append("ecoFriendly", form.ecoFriendly);
      formData.append("madeInIndia", form.madeInIndia);
      formData.append("whatsInside", form.whatsInside);

      form.images.forEach((image) => {
        formData.append("images", image);
      });

      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Product add nahi hua");
        return;
      }

      alert("Product successfully add ho gaya");
      router.push("/Dashboard");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <PackagePlus />
          </div>

          <div>
            <h1 className="text-2xl font-black text-gray-900">
              Add New Product
            </h1>
            <p className="text-sm text-gray-500">
              Product logged-in vendor ke naam se database me save hoga.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Product Name
            </label>
            <input
              name="name"
              placeholder="Enter product name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-gray-200 bg-white p-3 font-medium outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative">
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 py-3 pr-10 font-medium text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              >
                <option value="">Select Category</option>
                <option value="Festival Kits">🎉 Festival Kits</option>
                <option value="Daily Pooja Items">🪔 Daily Pooja Items</option>
                <option value="Eco Friendly">🌿 Eco Friendly</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-[38px] text-gray-400">
                ▼
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Current Product Location
              </label>

              <div className="flex gap-2">
                <input
                  name="location"
                  placeholder="Detect current location"
                  value={form.location}
                  readOnly
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-3 text-sm font-medium outline-none"
                />

                <button
                  type="button"
                  onClick={getCurrentLocation}
                  disabled={locationLoading}
                  className="flex min-w-[115px] items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600 disabled:opacity-60"
                >
                  {locationLoading ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <MapPin size={18} />
                  )}
                  Detect
                </button>
              </div>

              {form.lat && form.lng && (
                <p className="mt-1 text-xs text-gray-400">
                  Lat: {form.lat} | Lng: {form.lng}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Price ₹
              </label>
              <input
                name="price"
                type="number"
                placeholder="499"
                value={form.price}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-gray-200 bg-white p-3 font-medium outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Discount %
              </label>
              <input
                name="discount"
                type="number"
                placeholder="10"
                value={form.discount}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-white p-3 font-medium outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Stock
              </label>
              <input
                name="countInStock"
                type="number"
                placeholder="20"
                value={form.countInStock}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-gray-200 bg-white p-3 font-medium outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Product Images
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-orange-200 bg-orange-50/50 p-6 text-center transition hover:bg-orange-50">
              <ImagePlus className="mb-2 text-orange-500" size={34} />
              <span className="font-bold text-gray-800">
                Click to upload product images
              </span>
              <span className="mt-1 text-xs text-gray-500">
                PNG, JPG, WEBP supported
              </span>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                required
                className="hidden"
              />
            </label>

            <div className="mt-3 flex flex-wrap gap-3">
              {form.images.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="h-20 w-20 rounded-2xl border object-cover"
                />
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Product Description
            </label>
            <textarea
              name="description"
              placeholder="Write product details, quality, usage, etc."
              value={form.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full resize-none rounded-2xl border border-gray-200 bg-white p-3 font-medium outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              What's Inside
            </label>
            <input
              name="whatsInside"
              placeholder="Diya, Roli, Chawal, Agarbatti"
              value={form.whatsInside}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-200 bg-white p-3 font-medium outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div className="grid gap-3 rounded-2xl border border-orange-100 bg-orange-50/60 p-4 md:grid-cols-2">
            <label className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                name="ecoFriendly"
                checked={form.ecoFriendly}
                onChange={handleChange}
                className="h-4 w-4 accent-orange-500"
              />
              🌿 Eco Friendly Product
            </label>

            <label className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                name="madeInIndia"
                checked={form.madeInIndia}
                onChange={handleChange}
                className="h-4 w-4 accent-orange-500"
              />
              🇮🇳 Made in India
            </label>
          </div>

          <button
            disabled={loading}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 font-black text-white shadow-md transition hover:scale-[1.01] hover:shadow-lg active:scale-95 disabled:opacity-60"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            {loading ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}