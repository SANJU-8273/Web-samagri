"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import CategorySection from "../../components/Categories";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryQuery = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productSectionRef = useRef(null);

  const normalize = (value) =>
    String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

  const ultraSmoothScroll = (targetY) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 900;
    let startTime = null;

    const animationStep = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animationStep);
      }
    };

    requestAnimationFrame(animationStep);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`
        );

        if (!res.ok) {
          throw new Error("Products fetch failed");
        }

        const data = await res.json();

        const productList = Array.isArray(data)
          ? data
          : data.products || [];

        console.log("ALL PRODUCTS:", productList);
        console.log("CATEGORY QUERY:", categoryQuery);

        setProducts(productList);
      } catch (error) {
        console.log("Product fetch error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!categoryQuery) {
      setFilteredProducts(products);
      return;
    }

    if (normalize(categoryQuery) === "custom combos") {
      router.push("/Customize");
      return;
    }

    const updated = products.filter((p) => {
      return normalize(p.category) === normalize(categoryQuery);
    });

    console.log("FILTERED PRODUCTS:", updated);

    setFilteredProducts(updated);

    setTimeout(() => {
      if (productSectionRef.current) {
        const topPos =
          productSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          20;

        ultraSmoothScroll(topPos);
      }
    }, 200);
  }, [categoryQuery, products, router]);

  return (
    <div className="min-h-screen mx-auto container bg-[#FFF8E7]">
      <CategorySection />

      <div className="container mx-auto px-4 py-10" ref={productSectionRef}>
        <div className="text-center mb-12">
          <h1 className="text-[#5C1A1B] text-3xl md:text-4xl font-bold">
            {categoryQuery || "Explore Our Collection"}
          </h1>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}