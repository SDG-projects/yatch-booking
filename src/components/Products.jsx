import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/products.css";

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
  };

  return (
    <section className="product-section">
      <h2 className="section-title">Our Yachts</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Slider {...sliderSettings} className="product-slider">
              {product.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={product.name} className="product-image" />
                </div>
              ))}
            </Slider>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-detail">Price: {product.price}</p>
              <p className="product-detail">Size: {product.feet}</p>
              <p className="product-detail">Capacity: {product.capacity}</p>
            </div>
            <div className="product-actions">
              <button className="btn btn-primary">Book Now</button>
              <button className="btn btn-secondary">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

