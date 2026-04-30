"use client"; 


import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import AboutTeaser from "../../components/AboutTeaser";
import Testimonials from "../../components/Testimonials";
import Newsletter from "../../components/Newsletter";

export default function Home({ onAddToCart }) {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={onAddToCart} />
      <AboutTeaser />
      <Testimonials />
      <Newsletter />
      
    </main>
  );
}
