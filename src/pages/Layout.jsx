import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
  return (
    <div className="layout">
      <Navbar />
      <div style={{ minHeight: "50vh", background: "var(--primary-color)" }}>
        <Outlet />
      </div>
      <AIChat />
      <Offers />
      <Footer />
      <ScrollUP />
    </div>
  );
}

export default Layout;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRmY73ds4KvtmlMKf1ADLUnZ1Eb9wkQaU",
  authDomain: "goldenyacht.firebaseapp.com",
  projectId: "goldenyacht",
  storageBucket: "goldenyacht.firebasestorage.app",
  messagingSenderId: "979784409844",
  appId: "1:979784409844:web:b56520bff062b10a12b4a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
