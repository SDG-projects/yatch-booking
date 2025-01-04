import React, { Suspense } from "react";
import { useNavigate } from 'react-router-dom'; 
import "./styles/hero.css";
import ProductSection from "./Products";
import Services from "../pages/Services";
const BackgroundVideo = () => {
  const navigate = useNavigate();  
  const handleRedirect = () => {
    navigate('/products'); 
  };
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h1>Welcome to <span className="golden">GoldenYatch Rentals</span></h1>
        <p>Experience the ultimate yacht adventure.</p>
        <button className="cta-button" onClick={handleRedirect}>Explore Now</button>
        <button className="cta-button">Plan Your Journey</button>
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

export default BackgroundVideo;
