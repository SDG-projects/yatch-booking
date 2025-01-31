import React from "react";
import HeroSection from "../components/HeroSection";
// import Products from "../components/Products";
import BackgroundVideo from "../components/HeroSection";
import ProductSection from "../components/Products";
import Package from "../components/Package";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <BackgroundVideo />
      {/* <Products /> */}
      <ProductSection />
      {/* <Testimonials /> */}
    </div>
  );
}

export default Home;
