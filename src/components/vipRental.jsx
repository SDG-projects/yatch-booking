import React from "react";
import { getProducts } from "../data/Services";
import { Link, useNavigate } from "react-router-dom";
import "./styles/vippage.css";
import { handleWhatsAppRedirect, Product } from "./Products";

const VIPRental = () => {
  const nav = useNavigate();
  const products = getProducts().filter((product) => product.isVIP);
  const handleProductClick = (product) => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    console.log(product.id);
    nav(`/productdetail/${product.id}`);
  };
  return (
    <div className="vip-rental-container">
      <h1 className="vip-title">VIP Yachts</h1>
      <hr className="styled-line" />
      <div className="vip-yachts-list">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default VIPRental;
