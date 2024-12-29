import React, { Suspense } from "react";
import "./styles/hero.css";
const BackgroundVideo = () => {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h1>Welcome to Golden Yatch Rentals</h1>
        <p>Experience the ultimate yacht adventure.</p>
        <button className="cta-button">Explore Now</button>
      </div>
      <Suspense fallback={<div className="background-video">loading</div>}>
        <video autoPlay loop muted className="background-video">
          <source src="/video/yacht.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Suspense>
    </div>
  );
};

export default BackgroundVideo;
