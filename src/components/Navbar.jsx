import React, { useEffect, useRef, useState } from "react";
import "./styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/home");
  const [isScrolled, setIsScrolled] = useState(false);
  const service = [
    "Romantic Private Dinner",
    "Private chef",
    "Yacht Catering",
    "Live BBQ with private chef",
    "Private DJ",
    "Private Fishing",
    "Luxury video and photoshoot",
    "Private Artist Singer",
    "Private Saxophone Artist",
    "Private Dancers",
    "Private Bartender",
    "Private Magician",
    "Private Professional Massage Therapists",
    "Private Tour Guide",
    "Private Hostesses",
    "Private Waiters",
    "Professional Hospitality Crew",
    "Live Seafood BBQ and Private Chef",
    "Sushi Menus and a Private Chef",
    "Vegetarian Menus Crafted by a Private Chef",
    "Premium Alcoholic Drinks",
    "Exclusive Champagnes",
    "Open Bar",
    "Yacht Decorations",
    "Birthday Decorations",
    "Proposal and Anniversary Decorations",
    "Roses/Flower decorations",
    "VIP Transport",
  ];
  const packs = ["Birthday pack", "wedding", "honeymoon"];
  const location = useLocation();
  const menu = useRef();

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
          <Link to={"/home"}>Home</Link>
        </li>
        <li className={activePage === "/vipRental" ? "active" : ""}>
          <Link to={"/vipRental"}>VIP Yacht Rental</Link>
        </li>
        {/* <li className={activePage === "/packages" ? "active" : ""}>
          <Link to={"/packages"}>Packages</Link>
        </li> */}
        <li>
          <details
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
                      value
                        .toLowerCase()
                        .replaceAll(" ", "_")
                        .replaceAll("/", "-")
                    }
                    className="navbar-link"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li>
          <details
            className={`services ${activePage === "/services" ? "active" : ""}`}
          >
            <summary>Services</summary>
            <ul className="serviceList">
              {service.map((value, i) => (
                <li
                  key={i}
                  className={`service ${
                    activePage === "/" + value ? "active" : ""
                  }`}
                >
                  <Link
                    to={
                      "/services/" +
                      value
                        .toLowerCase()
                        .replaceAll(" ", "_")
                        .replaceAll("/", "-")
                    }
                    className="navbar-link"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
        {/* <li className={activePage === "/extras" ? "active" : ""}>
          <Link to={"/extras"}>Extras</Link>
        </li> */}
        <li className={activePage === "/about" ? "active" : ""}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={activePage === "/contact" ? "active" : ""}>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
