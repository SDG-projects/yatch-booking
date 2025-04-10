import React, { useEffect, useState, useContext } from "react";
import { getProducts } from "../data/Services";
import { Link, useNavigate } from "react-router-dom";
import "./vippage.css";
import { handleWhatsAppRedirect, Product } from "./Products";
import { DataContext } from "../data/context";

const VIPRental = () => {
  const nav = useNavigate();
  const { products } = useContext(DataContext);

  useEffect(() => {
    try {
      if (products && Array.isArray(products)) {
        const vipProducts = products.filter((product) => product.isVIP);
        if (!vipProducts.length) {
          console.warn("No VIP products found.");
        }
      } else {
        console.error("Products data is invalid or undefined.");
      }
    } catch (error) {
      console.error("An error occurred while filtering VIP products:", error);
    }
  }, [products]);
  return (
    <div className="vip-rental-container">
      <h1 className="vip-title">VIP Yachts</h1>
      <hr className="styled-line" />
      <div className="vip-yachts-list">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default VIPRental;
