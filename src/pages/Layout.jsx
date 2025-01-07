import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./style.css";
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div style={{ minHeight: "50vh", background: "var(--primary-color)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
