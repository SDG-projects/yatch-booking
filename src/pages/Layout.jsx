import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./style.css";
import AIChat from "../components/AIChat";
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div style={{ minHeight: "50vh", background: "var(--primary-color)" }}>
        <Outlet />
      </div>
      <AIChat />
      <Footer />
    </div>
  );
}

export default Layout;
