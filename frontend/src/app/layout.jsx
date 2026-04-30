import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "../components/Providers";
import SyncUser from "../components/SyncUser";
import Script from "next/script";

export const metadata = {
  title: "Samagri Store",
  description: "Premium Puja Samagri Store built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className="-mt-8 bg-[#ff5e19e0]">

          {/* Razorpay script (IMPORTANT) */}
          <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="beforeInteractive"
          />

          {/* Sync Clerk user to backend */}
          <SyncUser />

          <CartProvider>
            <Providers>
              <Header />

              <main className="pt-20 min-h-screen">
                {children}
              </main>

              <CartDrawer />
              <Footer />
            </Providers>
          </CartProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}