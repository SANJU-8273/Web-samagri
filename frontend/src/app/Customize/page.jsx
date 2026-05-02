"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { Plus, Minus } from "lucide-react";

export default function CustomKitPage() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.log("❌ API URL missing hai");
      return;
    }

    const res = await fetch(`${apiUrl}/api/products`);

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();

    // ✅ Safe handling of response
    if (Array.isArray(data)) {
      setProducts(data);
    } else if (Array.isArray(data.products)) {
      setProducts(data.products);
    } else {
      console.log("⚠️ Unexpected response format:", data);
      setProducts([]);
    }

  } catch (error) {
    console.log("❌ Products fetch error:", error.message);
  }
};

    fetchProducts();
  }, []);

  const isValidImage = (url) => {
    return (
      typeof url === "string" &&
      (url.startsWith("http://") ||
        url.startsWith("https://") ||
        url.startsWith("/"))
    );
  };

  const getProductImage = (product) => {
    const imageUrl = product.images?.[0] || product.image;

    if (isValidImage(imageUrl)) {
      return imageUrl;
    }

    return "/placeholder.png";
  };

  const selectableProducts = products.filter(
    (p) => p.category !== "Custom Combos" && p.category !== "Festival Kits"
  );

  const weightMultipliers = {
    "50g": 0.5,
    "100g": 1,
    "250g": 2.5,
    "500g": 5,
    "1kg": 10,
  };

  const toggleItem = (product) => {
    const exists = selectedItems.find((item) => item._id === product._id);

    if (exists) {
      setSelectedItems(selectedItems.filter((item) => item._id !== product._id));
    } else {
      setSelectedItems([
        ...selectedItems,
        { ...product, quantity: 1, weight: "100g" },
      ]);
    }
  };

  const updateQuantity = (_id, inc) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item._id === _id
          ? { ...item, quantity: Math.max(1, item.quantity + inc) }
          : item
      )
    );
  };

  const updateWeight = (_id, weightValue) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, weight: weightValue } : item
      )
    );
  };

  const totalPrice = selectedItems.reduce((sum, item) => {
    const multiplier = weightMultipliers[item.weight] || 1;
    return sum + Number(item.price || 0) * multiplier * item.quantity;
  }, 0);

  const handleAddToCart = () => {
    if (selectedItems.length === 0) return;

    const customProduct = {
      _id: "custom_" + Date.now(),
      name: "Custom Puja Kit",
      category: "Custom Combos",
      images: [getProductImage(selectedItems[0])],
      items: selectedItems,
      price: Math.round(totalPrice),
      quantity: 1,
    };

    addToCart(customProduct);
    alert("Custom kit added to cart!");
  };

  return (
    <div className="min-h-screen mx-auto container bg-gradient-to-b from-[#FFF8EF] to-[#FBEEDD] p-4 sm:p-6 pb-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-5">Create Your Custom Puja Kit</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectableProducts.map((product) => {
              const isSelected = selectedItems.some(
                (i) => i._id === product._id
              );

              const selectedItem = selectedItems.find(
                (i) => i._id === product._id
              );

              return (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow border overflow-hidden"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={getProductImage(product)}
                      alt={product.name || "Product Image"}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-green-700 font-semibold mt-1">
                      ₹{product.price}
                    </p>

                    <button
                      onClick={() => toggleItem(product)}
                      className={`w-full mt-2 py-2 rounded text-white ${
                        isSelected ? "bg-red-500" : "bg-green-600"
                      }`}
                    >
                      {isSelected ? "Remove" : "Add"}
                    </button>

                    {isSelected && selectedItem && (
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between items-center border rounded p-2">
                          <button onClick={() => updateQuantity(product._id, -1)}>
                            <Minus size={14} />
                          </button>

                          <span>{selectedItem.quantity}</span>

                          <button onClick={() => updateQuantity(product._id, 1)}>
                            <Plus size={14} />
                          </button>
                        </div>

                        <select
                          value={selectedItem.weight}
                          onChange={(e) =>
                            updateWeight(product._id, e.target.value)
                          }
                          className="w-full border rounded p-2"
                        >
                          <option value="50g">50g</option>
                          <option value="100g">100g</option>
                          <option value="250g">250g</option>
                          <option value="500g">500g</option>
                          <option value="1kg">1kg</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1 bg-white rounded-xl p-4 shadow sticky top-5 h-fit">
          <h2 className="text-xl font-bold mb-4">Your Custom Kit</h2>

          {selectedItems.length === 0 ? (
            <p className="text-sm text-gray-500">No items selected</p>
          ) : (
            selectedItems.map((item) => (
              <div key={item._id} className="mb-3 border-b pb-2">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-600">
                  {item.quantity} × {item.weight}
                </p>
              </div>
            ))
          )}

          <h3 className="font-bold mt-4 text-lg">₹{Math.round(totalPrice)}</h3>

          <button
            onClick={handleAddToCart}
            disabled={selectedItems.length === 0}
            className="w-full mt-4 py-3 bg-yellow-500 text-white rounded-xl disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Add Custom Kit
          </button>
        </div>
      </div>
    </div>
  );
}