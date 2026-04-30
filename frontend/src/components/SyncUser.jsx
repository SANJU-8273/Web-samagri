"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function SyncUser() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const sendUser = async () => {
      try {
        console.log("➡️ Sending user to backend...");

        const res = await fetch("http://localhost:5000/api/users/sync", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clerkId: user.id,
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
            image: user.imageUrl,
          }),
        });

        const data = await res.json();

        console.log("✅ Backend response:", data);
      } catch (err) {
        console.log("❌ ERROR:", err.message);
      }
    };

    sendUser();
  }, [user, isLoaded]);

  return null;
}