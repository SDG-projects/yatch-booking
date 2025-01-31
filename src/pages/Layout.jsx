import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./style.css";
import AIChat from "../components/AIChat";
import { getOffers } from "../data/Services";
import Offers from "../components/Offers";

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
    </div>
  );
}

export default Layout;
