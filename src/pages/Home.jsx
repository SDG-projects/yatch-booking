import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
// import Products from "../components/Products";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/Products";
import Package from "../components/Package";

function Home() {
  useEffect(() => {}, []);
  return (
    <div>
      <HeroSection />
      {/* <Products /> */}
      <ProductSection />
    </div>
  );
}

export default Home;
