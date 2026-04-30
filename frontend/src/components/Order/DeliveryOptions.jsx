"use client";

import { useEffect } from "react";
import { Truck, Rocket } from "lucide-react";

export default function DeliveryOptions({
  deliveryMethod,
  setDeliveryMethod,
}) {
  useEffect(() => {
    if (deliveryMethod) {
      localStorage.setItem("deliveryMethod", deliveryMethod);
    }
  }, [deliveryMethod]);

  const options = [
    {
      id: "standard",
      title: "Standard Delivery",
      sub: "Delivers in 4–6 Days",
      price: "Free",
      icon: <Truck className="h-5 w-5 text-blue-600" />,
    },
    {
      id: "express",
      title: "Express Delivery",
      sub: "Delivers in 1–2 Days",
      price: "₹79",
      icon: <Rocket className="h-5 w-5 text-purple-600" />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Delivery Method
      </h2>

      <div className="grid gap-4">
        {options.map((opt) => {
          const active = deliveryMethod === opt.id;

          return (
            <label
              key={opt.id}
              onClick={() => setDeliveryMethod(opt.id)}
              className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${
                active
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center gap-3">
                {opt.icon}

                <div>
                  <p className="font-medium text-sm">{opt.title}</p>
                  <p className="text-xs text-gray-600">{opt.sub}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm">{opt.price}</span>

                <input
                  type="radio"
                  checked={active}
                  readOnly
                  className="h-4 w-4 accent-blue-600"
                />
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}