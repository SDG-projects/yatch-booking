import React from "react";
import { getProducts } from "../data/Services";
import { Link, useNavigate } from "react-router-dom";
import "./styles/vippage.css";
import { handleWhatsAppRedirect } from "./Products";

const VIPRental = () => {
  const products = getProducts().filter((product) => product.isVIP);
  const handleProductClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    UseNavigate(`/productdetail/${product.id}`);
  };
  return (
    <div className="vip-rental-container">
      <h1 className="vip-title">VIP Yachts</h1>
      <hr className="styled-line"/>
      <div className="vip-yachts-list">
        {products.map((product) => (
          <div key={product.id} className="vip-yacht-card">
            <div className="vip-yacht-image-container">
              <img
                src={product.images[0]}
                alt={product.name}
                className="vip-yacht-image"
              onClick={handleProductClick}/>
            </div>
            <div className="vip-yacht-info" onClick={handleProductClick}>
              <h3 className="vip-yacht-name">{product.name}</h3>
              <p><strong>Price:</strong> <span className="vip-yacht-price">{product.price}</span></p>
              <p><strong>Size:</strong> {product.feet}</p>
              <p><strong>Capacity:</strong> {product.capacity}</p>
              <div className="product-actions">
                        <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppRedirect(product);
                          }}
                        >
                          <span>Book By</span>
                          <img src="./img/whatsapp2.png" alt="" />
                        </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VIPRental;
