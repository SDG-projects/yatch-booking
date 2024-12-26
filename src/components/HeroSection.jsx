import React from "react";
import "./styles/hero.css";
function HeroSection() {
  return (
    <section className="hero" style={{ backgroundColor: "blue" }}>
      {/* HeroSection */}
      {/* <img src="/img/img32.webp" alt="" /> */}
      <div className="heroText">
        <div className="slogan">Where luxury meets endless horizons</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ducimus
          voluptate?
        </div>
        <div className="CTA">
          <button>Discover More</button>
          <button>{"!>"} </button>
        </div>
      </div>
      <div className="heroLinks">
        <span>FB</span>
        <span>TW</span>
        <span>IG</span>
        <span>YT</span>
      </div>
    </section>
  );
}

export default HeroSection;
