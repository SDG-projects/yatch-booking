import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/Products";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      console.log("Scroll position:", scrollY); // Debugging scroll behavior
      setIsScrolled(scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <HeroSection isScrolled={isScrolled} />
      <ProductSection />
    </div>
  );
};

export default App;
