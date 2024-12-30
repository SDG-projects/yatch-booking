import React from "react";
import "./styles/products.css"; // Include styles for this component

const ProductSection = () => {
  const products = [
    {
      name: "Product 1",
      image: "../img/img32webp",
      price: "$100",
      feet: "30ft",
      capacity: "10 people",
      whatsappNumber: "1234567890",
      email: "email1@example.com",
    },
    {
      name: "Product 2",
      image: "path/to/image2.jpg",
      price: "$120",
      feet: "35ft",
      capacity: "12 people",
      whatsappNumber: "1234567891",
      email: "email2@example.com",
    },
    {
      name: "Product 3",
      image: "path/to/image3.jpg",
      price: "$150",
      feet: "40ft",
      capacity: "15 people",
      whatsappNumber: "1234567892",
      email: "email3@example.com",
    },
  ];

  return (
    <div className="product-section" style={{ backgroundColor: "black", padding: "20px" }}>
      {products.map((product, index) => (
        <div className="product" key={index}>
          <h3 className="product-name" style={{ color: "white" }}>{product.name}</h3>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          width={200} height={200}/>
          <div className="product-details" style={{ color: "white" }}>
            <p>Price per day: {product.price}</p>
            <p>Feet: {product.feet}</p>
            <p>Capacity: {product.capacity}</p>
          </div>
          <div className="product-actions">
            <a
              href={`https://wa.me/${product.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="product-button whatsapp-button"
            >
              <i className="fa fa-whatsapp"></i> Book Now
            </a>
            <a
              href={`mailto:${product.email}`}
              className="product-button email-button"
            >
              <i className="fa fa-envelope"></i> Book Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;