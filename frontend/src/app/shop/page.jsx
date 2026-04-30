import { Suspense } from "react";
import ShopClient from "./ShopClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopClient />
    </Suspense>
  );
}
