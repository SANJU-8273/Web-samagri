"use client";

import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <>
      {children}

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2500,
          style: {
            fontSize: "14px",
            borderRadius: "10px",
            padding: "10px 15px",
          },
        }}
      />
    </>
  );
} 