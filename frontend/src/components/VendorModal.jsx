"use client";

import { useState } from "react";

export default function VendorModal({ close, setIsVendor }) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 save vendor
    localStorage.setItem("isVendor", "true");

    setSuccess(true);
    setIsVendor(true);

    setTimeout(() => {
      close();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-xl">

        {!success ? (
          <>
            <h2 className="text-lg font-bold mb-4 text-center">
              Register as Vendor
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                required
                placeholder="Name"
                className="w-full border p-2 rounded"
              />

              <input
                required
                placeholder="Shop Name"
                className="w-full border p-2 rounded"
              />

              <input
                required
                placeholder="Phone"
                className="w-full border p-2 rounded"
              />

              <button className="w-full bg-orange-500 text-white py-2 rounded">
                Submit
              </button>
            </form>

            <button onClick={close} className="mt-3 text-sm w-full">
              Cancel
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-green-600 font-bold">
              ✅ Successfully Registered
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}