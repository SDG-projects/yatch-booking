import React, { useEffect, useState } from "react";
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
            // padding: "5px",
          }}
        >
          ^
        </button>
      )}
    </>
  );
}

function Layout() {
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
