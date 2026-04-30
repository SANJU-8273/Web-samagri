"use client";

import { useEffect, useState } from "react";
import AddressSection from "../../components/Order/AddressSection";
import DeliveryOptions from "../../components/Order/DeliveryOptions";
import PaymentSection from "../../components/Order/PaymentSection";
import OrderSummary from "../../components/Order/OrderSummary";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [buyNowItem, setBuyNowItem] = useState(null);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    const savedPayment = localStorage.getItem("paymentMethod");
    const savedDelivery = localStorage.getItem("deliveryMethod");

    if (savedPayment) setPaymentMethod(savedPayment);
    if (savedDelivery) setDeliveryMethod(savedDelivery);
  }, []);

  useEffect(() => {
    if (type === "buyNow") {
      const data = localStorage.getItem("buyNowProduct");
      if (data) {
        setBuyNowItem(JSON.parse(data));
      }
    }
  }, [type]);

  return (
    <div className="container mx-auto grid lg:grid-cols-3 gap-8 py-10 px-4">
      <div className="space-y-6 lg:col-span-2">
        <AddressSection />

        <DeliveryOptions
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
        />

        <PaymentSection
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      </div>

      <div>
        <OrderSummary
          paymentMethod={paymentMethod}
          deliveryMethod={deliveryMethod}
          buyNowItem={buyNowItem}
        />
      </div>
    </div>
  );
}