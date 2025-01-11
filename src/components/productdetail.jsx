import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { getProducts } from "../data/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/productdetail.css";
import { handleWhatsAppRedirect } from "../components/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = getProducts();
    const selectedProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(selectedProduct);

    // Check if there's a stored scroll position and restore it
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="product-detail-container">
      <button
        className="back-button"
        onClick={() => {
          const scrollPosition = window.scrollY;
          sessionStorage.setItem("scrollPosition", scrollPosition);
          navigate(-1);
        }}
      >
        <i className="fa-solid fa-backward"></i>
        Go Back
      </button>
      <div className="product-detail-content">
        <div className="product-detail-image-container">
          <Slider {...sliderSettings} className="product-detail-slider">
            {product.images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="product-detail-image"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-detail-info">
          <h1 className="product-title">{product.name}</h1>
          <p>
            <strong>Price:</strong>
            <span className="pd-detail-price">{product.price}</span>
          </p>
          <p>
            <strong>Size:</strong> {product.feet}
          </p>
          <p>
            <strong>Capacity:</strong> {product.capacity}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <div className="book-now-btn1">
            <button
              className="book-now-button2"
              onClick={()=>handleWhatsAppRedirect(product)}
            >
              <span>Book By</span>
              <img src="../img/whatsapp2.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
