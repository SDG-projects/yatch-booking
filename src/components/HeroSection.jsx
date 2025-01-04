import React, { Suspense } from "react";
import "./styles/hero.css";
const HeroSection = () => {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h1>
          Experience the ultimate in luxury and freedom with{" "}
          <span className="companyName">Golden Yacht Rentals.</span>
        </h1>
        <p>
          Indulge in unparalleled luxury, personalized experiences, and
          unforgettable adventures
          {/* Our expertly curated yacht rentals, tailored to your every need,
          ensure an unforgettable journey on the open waters */}
        </p>
        <div>
          <button className="cta-button">Explore Our Yachts</button>
          <button className="cta-button">Plan Your Journey</button>
        </div>
      </div>
      <div className="bgvd-overlay"></div>
      <Suspense fallback={<div className="background-video">loading</div>}>
        <video autoPlay loop muted className="background-video">
          <source src="/video/yacht.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Suspense>
    </div>
  );
};

export default HeroSection;
