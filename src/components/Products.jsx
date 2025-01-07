import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/products.css";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../data/Services";
import { FaWhatsapp } from "react-icons/fa";

export const Product = ({ product, sliderSettings }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    // Navigate to the product detail page
    navigate(`/productdetail/${product.id}`);
  };

  return (
    <div key={product.id} className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <Slider {...sliderSettings} className="product-slider">
        {product.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={product.name}
              className="product-image"
              onClick={handleProductClick}
            />
          </div>
        ))}
      </Slider>
      <div className="product-info" onClick={handleProductClick}>
        <p className="product-detail">
          Price: <span>{product.price}</span>
        </p>
        <p className="product-detail">
          Size: <span>{product.feet}</span>
        </p>
        <p className="product-detail">
          Capacity: <span>{product.capacity}</span>
        </p>
      </div>
      <div className="product-actions">
        <button className="btn btn-primary">
          Book By <span>{<FaWhatsapp />}</span>
        </button>
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
