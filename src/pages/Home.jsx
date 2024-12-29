import React from "react";
import HeroSection from "../components/HeroSection";
// import Products from "../components/Products";
import BackgroundVideo from "../components/HeroSection";
import ProductSection from "../components/Products";

function Home() {
  return (
    <div>
      <BackgroundVideo />
      {/* <Products /> */}
      <ProductSection />
    </div>
  );
}

export default Home;
