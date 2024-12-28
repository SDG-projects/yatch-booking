import React from "react";
import "./styles/hero.css";
const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="./video/yatchvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1>Welcome to Golden Yatch Rentals</h1>
        <p>Experience the ultimate yacht adventure.</p>
        <button className="cta-button">Explore Now</button>
      </div>
    </div>
  );
};


export default BackgroundVideo;
