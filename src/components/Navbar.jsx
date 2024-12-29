import React, { useEffect, useRef, useState } from "react";
import "./styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/home");
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
  const location = useLocation();
  const menu = useRef();
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    setActivePage(path);
    // console.log(activePage);
  }, [location]);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    a;
  };
  // useEffect(() => {
  //   const eventL = document.body.addEventListener("click", (e) => {
  //     console.log(
  //       e.target,
  //       menu.current,
  //       menu.current.children.includes(e.target)
  //     );
  //   });
  //   return () => {
  //     removeEventListener("click", eventL);
  //   };
  // }, []);
  //   const handlePageChange = (page) => {
  //     setActivePage(page);
  //   };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo">
          <Link to={"/"}>
            <img
              src={"/img/yatchlogo.png"}
              alt=""
              width={"100"}
              height={"100"}
            />
            <h3>GYR</h3>
          </Link>
        </div>
      </div>
      <button className="navbar-toggle" onClick={handleToggle}>
        <i className="fa-solid fa-bars"></i>{" "}
      </button>
      <ul
        className={`navbar-menu ${isOpen ? "open" : ""}`}
        ref={menu}
        // onMouseLeave={() => {
        //   setIsOpen(false);
        // }}
      >
        <button className="navbar-toggle" onClick={handleToggle}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <li
          className={
            activePage === "/home" || activePage === "/" ? "active" : ""
          }
        >
          <Link to={"/home"}>Home</Link>
        </li>
        {/* <li className={activePage === "/products" ? "active" : ""}>
          <Link to={"/products"}>Products</Link>
        </li> */}
        <li className={activePage === "/vipRental" ? "active" : ""}>
          <Link to={"/vipRental"}>VIP Yacht Rental</Link>
        </li>
        <li className={activePage === "/packages" ? "active" : ""}>
          <Link to={"/packages"}>Packages</Link>
        </li>
        <li>
          <details
            className={`services ${activePage === "/services" ? "active" : ""}`}
          >
            <summary>Services</summary>
            <ul className="serviceList">
              {service.map((value, i) => (
                <Link to={"/services"}>
                  <li key={i} className="service">
                    {value}
                  </li>
                </Link>
              ))}
            </ul>
          </details>
        </li>
        <li className={activePage === "/extras" ? "active" : ""}>
          <Link to={"/extras"}>Extras</Link>
        </li>
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
