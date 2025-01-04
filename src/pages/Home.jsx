import React, { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
// import Products from "../components/Products";
// import HeroSection from "../components/HeroSection";
import ProductSection from "../components/Products";
import Package from "../components/Package";
import About from "../components/About";

function Home() {
  const home = useRef(null);
  useEffect(() => {
    // home.current.scrollIntoView({ behavier: "smooth" });
  }, []);
  return (
    <div ref={home}>
      <HeroSection />
      {/* <Products /> */}
      <ProductSection />
      <About />
    </div>
  );
}

export default Home;
