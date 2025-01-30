import React from "react";
import HeroSection from "../components/HeroSection";
// import Products from "../components/Products";
import BackgroundVideo from "../components/HeroSection";
import ProductSection from "../components/Products";
import Package from "../components/Package";

function Home() {
  return (
    <div>
      <BackgroundVideo />
      <ProductSection />
    </div>
  );
}

export default Home;
