"use client";

import { useState, useEffect } from "react";

export default function AddressSection() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("shippingAddress");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const updated = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(updated);
    localStorage.setItem("shippingAddress", JSON.stringify(updated));
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 tracking-tight">
        Delivery Address
      </h2>

      <div className="grid gap-6 text-sm text-gray-800">

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-medium text-gray-600 pl-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-medium text-gray-600 pl-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3"
            placeholder="+91 9876543210"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-medium text-gray-600 pl-1">
            Email Address
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3"
            placeholder="example@mail.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-medium text-gray-600 pl-1">
            Complete Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3"
            placeholder="House No, Street, Area, Landmark"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-600 pl-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3"
              placeholder="Mumbai"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-600 pl-1">
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3"
              placeholder="400001"
            />
          </div>

        </div>
      </div>
    </div>
  );
}