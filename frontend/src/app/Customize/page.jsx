"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { Check, Plus, Minus } from "lucide-react";

export default function CustomKitPage() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

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
      setSelectedItems(
        selectedItems.filter((item) => item._id !== product._id)
      );
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

  const totalPrice = selectedItems.reduce(
    (sum, item) =>
      sum + item.price * weightMultipliers[item.weight] * item.quantity,
    0
  );

  const handleAddToCart = () => {
    const customProduct = {
      _id: "custom_" + Date.now(),
      name: "Custom Puja Kit",
      category: "Custom Combos",
      items: selectedItems,
      price: totalPrice,
    };

    addToCart(customProduct);
  };

  return (
    <div className="min-h-screen mx-auto container bg-gradient-to-b from-[#FFF8EF] to-[#FBEEDD] p-4 sm:p-6 pb-28">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {selectableProducts.map((product) => {
              const isSelected = selectedItems.some(
                (i) => i._id === product._id
              );

              const selectedItem = selectedItems.find(
                (i) => i._id === product._id
              );

              return (
                <div key={product._id} className="bg-white rounded-xl shadow border">

                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="font-semibold text-sm">{product.name}</h3>

                    <p className="text-sm text-green-700">₹{product.price}</p>

                    <button
                      onClick={() => toggleItem(product)}
                      className="w-full mt-2 py-2 rounded bg-green-600 text-white"
                    >
                      {isSelected ? "Remove" : "Add"}
                    </button>

                    {isSelected && (
                      <div className="mt-3 space-y-2">

                        <div className="flex justify-between items-center">
                          <button
                            onClick={() =>
                              updateQuantity(product._id, -1)
                            }
                          >
                            <Minus size={14} />
                          </button>

                          <span>{selectedItem.quantity}</span>

                          <button
                            onClick={() =>
                              updateQuantity(product._id, 1)
                            }
                          >
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
                          <option>50g</option>
                          <option>100g</option>
                          <option>250g</option>
                          <option>500g</option>
                          <option>1kg</option>
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

          {selectedItems.map((item) => (
            <div key={item._id} className="mb-3 border-b pb-2">
              <p>{item.name}</p>
              <p>
                {item.quantity} × {item.weight}
              </p>
            </div>
          ))}

          <h3 className="font-bold mt-4">₹{totalPrice}</h3>

          <button
            onClick={handleAddToCart}
            disabled={selectedItems.length === 0}
            className="w-full mt-4 py-3 bg-yellow-500 text-white rounded-xl"
          >
            Add Custom Kit
          </button>
        </div>
      </div>
    </div>
  );
}