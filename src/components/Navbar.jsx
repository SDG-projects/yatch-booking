import React, { useEffect, useState } from "react";
import "./styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { getPackages, getServices } from "../data/Services";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [activePage, setActivePage] = useState("/home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false); // Packages dropdown state
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Services dropdown state

  const services = getServices();
  const packs = getPackages();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    setActivePage(path);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu
    setIsPackagesOpen(false); // Close Packages dropdown
    setIsServicesOpen(false); // Close Services dropdown
  };

  const handlePackagesClick = () => {
    setIsPackagesOpen(!isPackagesOpen); // Toggle Packages dropdown
    setIsServicesOpen(false); // Close Services dropdown
  };

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen); // Toggle Services dropdown
    setIsPackagesOpen(false); // Close Packages dropdown
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <div className="logo">
          <Link to={"/"}>
            <img src={"/img/yatchlogo.png"} alt="Yacht Logo" width={200} height={200} />
          </Link>
        </div>
      </div>
      <button
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li className={activePage === "/home" || activePage === "/" ? "active" : ""}>
          <Link to={"/home"} onClick={handleLinkClick}>Home</Link>
        </li>
        <li className={activePage === "/vipRental" ? "active" : ""}>
          <Link to={"/vipRental"} onClick={handleLinkClick}>VIP Yacht Rental</Link>
        </li>
        <li>
          <div
            className={`services ${isPackagesOpen ? "open" : ""}`}
          >
            <summary onClick={handlePackagesClick}>Packages</summary>
            {isPackagesOpen && (
              <ul className="serviceList">
                {packs.map((value, i) => (
                  <li key={i} className="service">
                    <Link
                      to={
                        "/packages/" +
                        value.name
                          .toLowerCase()
                          .replaceAll(" ", "_")
                          .replaceAll("/", "-")
                          .replaceAll("&", "-") +
                        "&" +
                        i
                      }
                      onClick={handleLinkClick}
                    >
                      {value.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={"/packages/custom_pack&-1"} onClick={handleLinkClick}>
                    Custom Package
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div
            className={`services ${isServicesOpen ? "open" : ""}`}
          >
            <summary onClick={handleServicesClick}>Services</summary>
            {isServicesOpen && (
              <ul className="serviceList">
                {services.map((value, i) => (
                  <li key={i} className="service">
                    <Link
                      to={
                        "/services/" +
                        value.name
                          .toLowerCase()
                          .replaceAll(" ", "_")
                          .replaceAll("/", "-")
                      }
                      onClick={handleLinkClick}
                    >
                      {value.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li className={activePage === "/about" ? "active" : ""}>
          <Link to={"/about"} onClick={handleLinkClick}>About</Link>
        </li>
        <li className={activePage === "/contact" ? "active" : ""}>
          <Link to={"/contact"} onClick={handleLinkClick}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
