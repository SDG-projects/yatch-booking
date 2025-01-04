import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/products.css";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export const Product = ({ product, sliderSettings }) => {
  const nav = useNavigate();
  return (
    <div key={product.id} className="product-card">
      <h3 className="product-name">{product.name}</h3>
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
        <button
          className="btn btn-primary"
          onClick={() => {
            const phoneNumber = "971555930716"; 
    const message = `Hi, I am interested in booking the product: ${product.name}. Price: ${product.price}, Size: ${product.feet}, Capacity: ${product.capacity}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappDesktopUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isDesktop = /Windows|Macintosh/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappAppUrl;
    } else if (isDesktop) {
      const appCheck = window.navigator.msLaunchUri || window.navigator.mozApps;

      if (appCheck) {
        window.location.href = whatsappDesktopUrl;
      } else {
        const newWindow = window.open(whatsappWebUrl, "_blank");
        if (!newWindow) {
          alert("Please allow pop-ups or click here: " + whatsappWebUrl);
        }
      }
    }
          }}
        >
          <FaWhatsapp /> Book on WhatsApp
        </button>
        <button className="btn btn-primary">
          <FaEnvelope /> Book Now
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
    {
      id: 4,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 5,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 6,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 7,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 8,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 9,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 10,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 11,
      name: "Elite Yacht C",
      images: ["./img/img32.webp", "./img/img32.webp", "./img/img32.webp"],
      price: "$10,000",
      feet: "120 ft",
      capacity: "50 People",
    },
    {
      id: 12,
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
      <h2 className="section-title">
        One of the Best Yacht Rentals in Dubai
      </h2>
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
