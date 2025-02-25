import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  return (
    <nav>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/services">Services</Link>
      <button onClick={() => signOut(auth)}>Logout</button>
    </nav>
  );
};

export default Navbar;
