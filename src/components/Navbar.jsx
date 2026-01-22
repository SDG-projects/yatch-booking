import React, { useEffect, useState, useContext } from "react";
import "./styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { getPackages, getServices } from "../data/Services";
import { DataContext } from "../data/context";

// /*************  ✨ Codeium Command 🌟  *************/
// import React, { useEffect, useState, useContext } from "react";
// import "./styles/navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import { getPackages } from "../data/Services";
// import { DataContext } from "../data/context";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("/home");
  const [isScrolled, setScrolled] = useState(false);
  const [isPackagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { services } = useContext(DataContext);
  console.log(services);
  const packages = getPackages();
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname.toLowerCase());
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeDropdowns = () => {
    setMenuOpen(false);
    setPackagesDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const togglePackagesDropdown = () => {
    setPackagesDropdownOpen(!isPackagesDropdownOpen);
    setServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
    setPackagesDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <div className="logo">
          <Link to="/">
            <img
              src="/img/yatchlogo.png"
              alt="Yacht Logo"
              width={160}
              height={160}
            />
          </Link>
        </div>
      </div>
      <button
        className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li
          className={
            activePage === "/home" || activePage === "/" ? "active" : ""
          }
        >
          <Link to="/home" onClick={closeDropdowns}>
            Home
          </Link>
        </li>
        <li className={activePage === "/vipRental" ? "active" : ""}>
          <Link to="/vipRental" onClick={closeDropdowns}>
            VIPYacht
          </Link>
        </li>
        <li>
          <div className={`services ${isPackagesDropdownOpen ? "open" : ""}`}>
            <summary onClick={togglePackagesDropdown}>Packages</summary>
            {isPackagesDropdownOpen && (
              <ul className="serviceList">
                {packages.map((pack, index) => (
                  <li key={index} className="service">
                    <Link
                      to={`/packages/${pack.name
                        .toLowerCase()
                        .replaceAll(" ", "_")
                        .replaceAll("/", "-")
                        .replaceAll("&", "-")}&${index}`}
                      onClick={closeDropdowns}
                    >
                      {pack.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/packages/custom_pack&-1" onClick={closeDropdowns}>
                    Custom Package
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className={`services ${isServicesDropdownOpen ? "open" : ""}`}>
            <summary onClick={toggleServicesDropdown}>Services</summary>
            {isServicesDropdownOpen && (
              <ul className="serviceList">
                {services?.map((service, index) => (
                  <li key={index} className="service">
                    <Link
                      to={`/services/${service.name}`}
                      onClick={closeDropdowns}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li className={activePage === "/about" ? "active" : ""}>
          <Link to="/about" onClick={closeDropdowns}>
            About
          </Link>
        </li>
        <li className={activePage === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={closeDropdowns}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
/******  0ab1361f-28df-4bc3-8c01-c823efcda3af  *******/
