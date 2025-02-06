import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./style.css";
import AIChat from "../components/AIChat";
import { getOffers } from "../data/Services";
import Offers from "../components/Offers";

function ScrollUP() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    const getScrollY = window.addEventListener("scroll", () =>
      setScrollY(window.scrollY)
    );
    // return () => removeEventListener("scroll", getScrollY);
  });
  return (
    <>
      {scrollY > window.innerHeight && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            left: 10,
            bottom: 10,
            backgroundColor: "blue",
            zIndex: 10,
            borderRadius: "100px 100px 20px 20px ",
            // padding: "5px",
            fontWeight: "bolder",
            fontSize: "2rem",
            padding: "3px 20px",
            height: "max-contant",
          }}
        >
          ^
        </button>
      )}
    </>
  );
}
function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="layout">
      <Navbar />
      <div style={{ minHeight: "50vh", background: "var(--primary-color)" }}>
        <Outlet />
      </div>
      {/* <AIChat /> */}
      <Offers />
      <Footer />
      <ScrollUP />
    </div>
  );
}

export default Layout;
