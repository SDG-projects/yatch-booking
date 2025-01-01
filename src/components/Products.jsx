import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/products.css";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa'; // For WhatsApp icon

export const Product = ({ product, sliderSettings }) => {
  const nav = useNavigate();
  return (
    <div key={product.id} className="product-card">
      <Slider {...sliderSettings} className="product-slider">
        {product.images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={product.name} className="product-image" />
          </div>
        ))}
      </Slider>
      <div
        className="product-info"
        onClick={() => {
          nav("/package/" + product.id);
        }}
      >
        <h3 className="product-name">{product.name}</h3>
        <p className="product-detail">
          Price: <span> {product.price}</span>
        </p>
        <p className="product-detail">
          Size: <span> {product.feet}</span>
        </p>
        <p className="product-detail">
          Capacity: <span>{product.capacity}</span>
        </p>
      </div>
      <div className="product-actions">
        <button className="btn btn-primary">
          <FaWhatsapp /> Book Now
        </button>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Luxury Yacht A",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$5000",
      feet: "85 ft",
      capacity: "20 People",
    },
    {
      id: 2,
      name: "Premium Yacht B",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$7000",
      feet: "100 ft",
      capacity: "30 People",
    },
    {
      id: 3,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="product-section">
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} sliderSettings={sliderSettings} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
