import React, { useEffect, useState, useContext } from "react";
import { getProducts } from "../data/Services";
import { Link, useNavigate } from "react-router-dom";
import "./vippage.css";
import { handleWhatsAppRedirect, Product } from "./Products";
import { DataContext } from "../data/context";

const VIPRental = () => {
  const nav = useNavigate();
  // const [products, setProducts] = useState([]);
  const { getVipProducts } = useContext(DataContext);
  const products = getVipProducts();
  // getProducts().then((data) => {
  //   setProducts(data.filter((product) => product.isVIP));
  // });
  // useEffect(() => {
  //   setProducts(getVipProducts());
  // }, []);
  const handleProductClick = (product) => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    // console.log(product.id);
    nav(`/productdetail/${product.id}`);
  };
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
