import React, { useEffect, useRef, useState } from "react";
import "./styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { getPackages, getServices } from "../data/Services";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const services = getServices();
  const packs = getPackages();
  const location = useLocation();
  const menu = useRef();
  const packagesRef = useRef();
  const serviceRef = useRef();

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

  const handleServiceToggle = () => {
    setIsServiceOpen(!isServiceOpen);
    // When services are opened, close the packages
    if (packagesRef.current) {
      packagesRef.current.open = false;
    }
  };

  const handlePackagesToggle = () => {
    // When packages are opened, close the services
    if (serviceRef.current) {
      serviceRef.current.open = false;
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on link click
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <div className="logo">
          <Link to={"/"}>
            <img src={"/img/yatchlogo.png"} alt="" width={100} height={100} />
          </Link>
        </div>
      </div>
      <button
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`} ref={menu}>
        <li
          className={
            activePage === "/home" || activePage === "/" ? "active" : ""
          }
        >
          <Link to={"/home"} onClick={handleLinkClick}>Home</Link>
        </li>
        <li className={activePage === "/vipRental" ? "active" : ""}>
          <Link to={"/vipRental"} onClick={handleLinkClick}>VIP Yacht Rental</Link>
        </li>
        <li>
          <details
            onClick={handlePackagesToggle}
            ref={packagesRef}
            className={`services ${activePage === "/packages" ? "active" : ""}`}
          >
            <summary>Packages</summary>
            <ul className="serviceList">
              {packs.map((value, i) => (
                <li
                  key={i}
                  className={`service ${
                    activePage === "/" + value ? "active" : ""
                  }`}
                >
                  <Link
                    to={
                      "/packages/" +
                      value.name
                        .toLowerCase()
                        .replaceAll(" ", "_")
                        .replaceAll("/", "-")
                    }
                    className="navbar-link"
                    onClick={handleLinkClick}
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li>
          <details
            ref={serviceRef}
            onClick={handleServiceToggle}
            className={`services ${activePage === "/services" ? "active" : ""}`}
          >
            <summary>Services</summary>
            <ul className={`serviceList ${isServiceOpen ? "open" : ""}`}>
              {services.map((value, i) => (
                <li
                  key={i}
                  className={`service ${
                    activePage ===
                    "/services/" +
                      value.name
                        .toLowerCase()
                        .replaceAll(" ", "_")
                        .replaceAll("/", "-")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to={
                      "/services/" +
                      value.name
                        .toLowerCase()
                        .replaceAll(" ", "_")
                        .replaceAll("/", "-")
                    }
                    className="navbar-link"
                    onClick={handleLinkClick}
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
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

