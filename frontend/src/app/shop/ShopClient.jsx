"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import CategorySection from "../../components/Categories";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productSectionRef = useRef(null);

  const ultraSmoothScroll = (targetY) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 900;
    let startTime = null;

    const animationStep = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      const ease = 1 - Math.pow(1 - progress / duration, 3);

      window.scrollTo(0, startY + distance * ease);

      if (progress < duration) {
        requestAnimationFrame(animationStep);
      }
    };

    requestAnimationFrame(animationStep);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
const data = await res.json();

        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryQuery?.toLowerCase() === "custom combos") {
      window.location.href = "/Customize";
    }
  }, [categoryQuery]);

  useEffect(() => {
    if (!categoryQuery) {
      setFilteredProducts(products);
      return;
    }

    if (categoryQuery.toLowerCase() === "custom combos") return;

    const updated = products.filter(
      (p) =>
        p.category.trim().toLowerCase() ===
        categoryQuery.trim().toLowerCase()
    );

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
  }, [categoryQuery, products]);

  return (
    <div className="min-h-screen mx-auto container bg-[#FFF8E7]">
      <CategorySection />

      <div className="container mx-auto px-4 py-10" ref={productSectionRef}>
        <div className="text-center mb-12">
          <h1 className="text-[#5C1A1B] text-3xl md:text-4xl font-bold">
            {categoryQuery ? categoryQuery : "Explore Our Collection"}
          </h1>
        </div>

        {filteredProducts.length > 0 ? (
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