"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function SyncUser() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const sendUser = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          console.log("❌ NEXT_PUBLIC_API_URL missing hai");
          return;
        }

        const res = await fetch(`${apiUrl}/api/sync-user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clerkId: user.id,
            name: user.fullName || "",
            email: user.primaryEmailAddress?.emailAddress || "",
            image: user.imageUrl || "",
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          console.log("❌ Backend error:", data);
          return;
        }

        console.log("✅ User synced:", data);
      } catch (err) {
        console.log("❌ ERROR:", err.message);
      }
    };

    sendUser();
  }, [isLoaded, user?.id]);

  return null;
}