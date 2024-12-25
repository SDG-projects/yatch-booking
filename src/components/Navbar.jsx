import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import "./styles/navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/home");
  const location = useLocation();
  const menu = useRef();
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    setActivePage(path);
    // console.log(activePage);
  }, [location]);
  const handleToggle = () => {
    setIsOpen(!isOpen);
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
      {/* <div className="navbar-brand">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" width={"100%"} height={"100%"} />
          </Link>
        </div>
      </div> */}
      <button className="navbar-toggle" onClick={handleToggle}>
        <i className="fa-solid fa-bars">:</i>{" "}
      </button>
      <ul
        className={`navbar-menu ${isOpen ? "open" : ""}`}
        ref={menu}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <button className="navbar-toggle" onClick={handleToggle}>
          <i className="fa-solid fa-xmark">x</i>
        </button>
        <li
          className={
            activePage === "/home" || activePage === "/" ? "active" : ""
          }
        >
          <Link to={"/home"}>Home</Link>
        </li>
        <li className={activePage === "/about" ? "active" : ""}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={activePage === "/products" ? "active" : ""}>
          <Link to={"/products"}>Products</Link>
        </li>
        <li className={activePage === "/contact" ? "active" : ""}>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
