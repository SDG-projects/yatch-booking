import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProducts } from "../data/Services";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/products.css";

export const handleWhatsAppRedirect = (product) => {
  const phoneNumber = "971555930716";
  const message = `Hi, I am interested in booking the Yacht: ${product.name}. 
  Price: ${product.price}, Size: ${product.feet}, Capacity: ${product.capacity}`;
  const encodedMessage = encodeURIComponent(message);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  const newWindow = window.open(whatsappUrl, "_blank");
  if (!newWindow) {
    alert(
      "Unable to open WhatsApp. Please enable pop-ups or copy this link: " +
        whatsappUrl
    );
  }
};

export const Product = ({ product, sliderSettings }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(`/productdetail/${product.id}`);
  };

  return (
    <div key={product.id} className="product-card">
      <h3 className="product-name"><span> GOLDEN YATCH- </span><br></br>{product.name}</h3>
      <Slider {...sliderSettings} className="product-slider">
        {product.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={product.name}
              className="product-image"
              onClick={handleProductClick}
            width={300} height={300}/>
          </div>
        ))}
      </Slider>
      <div className="product-info" onClick={handleProductClick}>
        <p className="product-detail">
          <i className="fa-solid fa-money-bill-wave"></i>
          Price: <span className="pd-price">{product.price} AED</span>
        </p>
        <p className="product-detail">
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          Size: <span className="pd-ft">{product.feet}</span>
        </p>
        <p className="product-detail">
          Capacity: Up to <span>{product.capacity}</span>
        </p>
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
  );
};

const ProductSection = () => {
  const products = getProducts();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section id="products" className="product-section">
      <h1 className="section-title">Best Yatch Rental Dubai</h1>
      <p>Unforgettable Yachting Experiences at Your Fingertips</p>
      <hr className="styled-line" />
      <div className="product-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            sliderSettings={sliderSettings}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductSection;
