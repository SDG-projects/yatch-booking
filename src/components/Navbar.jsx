import React, { useEffect, useState } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Add scroll listener to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src="./img/gyrlogo.png" alt="Website Logo" />
        </a>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? "✖" : "☰"}
        </button>
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#vip-yacht" className="navbar-link">
              VIP Yacht Rental
            </a>
          </li>
          <li className="navbar-item">
            <a href="#packages" className="navbar-link">
              Packages
            </a>
          </li>
           
          <li className="navbar-item">
            <a href="#services" className="navbar-link">
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="#extras" className="navbar-link">
              Extras
            </a>
          </li>
          <li className="navbar-item">
            <button className="navbar-button">Contact</button>
          </li>
        </ul>
        {/* Mobile Menu */}
        <ul
          className={`navbar-menu-mobile ${isMobile ? "menu-active" : ""}`}
        >
          <li className="navbar-item">
            <a
              href="#vip-yacht"
              className="navbar-link"
              onClick={() => setIsMobile(false)}
            >
              VIP Yacht Rental
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#packages"
              className="navbar-link"
              onClick={() => setIsMobile(false)}
            >
              Packages
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#services"
              className="navbar-link"
              onClick={() => setIsMobile(false)}
            >
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#extras"
              className="navbar-link"
              onClick={() => setIsMobile(false)}
            >
              Extras
            </a>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-button"
              onClick={() => setIsMobile(false)}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
