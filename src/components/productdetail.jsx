import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/productdetail.css";
import { handleWhatsAppRedirect } from "../components/Products";
import Image from "./utils/Image";
import Loading from "./Loading"; // Using your existing loading component
import { DataContext } from "../data/context";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { products } = useContext(DataContext);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       console.log(`📡 Fetching product details for ID: ${id}`);
  //       const productRef = doc(db, "products", id);
  //       const productSnap = await getDoc(productRef);

  //       if (!productSnap.exists()) {
  //         console.log("❌ Product not found in Firestore.");
  //         setProduct(null);
  //       } else {
  //         setProduct(productSnap.data());
  //         console.log("✅ Product details loaded:", productSnap.data());
  //       }
  //     } catch (error) {
  //       console.error("🚨 Error fetching product details:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProduct();

  //   // Restore scroll position
  //   const scrollPosition = sessionStorage.getItem("scrollPosition");
  //   if (scrollPosition) {
  //     window.scrollTo(0, parseInt(scrollPosition, 10));
  //   }
  // }, [id]);
  useEffect(() => {
    setProduct(products);
    setLoading(false);
  }, [id]);
  if (loading) return <Loading />;
  if (!product) return <p style={{ color: "white" }}>Product not found...</p>;

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
            {product?.images?.map((img, index) => (
              <div key={index} className="image-wrapper">
                {!imageLoaded && <div className="skeleton-loader"></div>}
                <Image
                  url={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`product-detail-image ${
                    imageLoaded ? "loaded" : "loading"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-detail-info">
          <h1 className="product-title">{product?.name}</h1>
          <p>
            <strong>Price:</strong>
            <span className="pd-detail-price">{product?.price} AED</span>
          </p>
          <p>
            <strong>Size:</strong> {product?.feet}
          </p>
          <p>
            <strong>Capacity:</strong> {product?.capacity}
          </p>
          <p>
            <strong>Complementary:</strong> {product?.complementary}
          </p>
          <div className="book-now-btn">
            <button
              className="book-now-button"
              onClick={() => handleWhatsAppRedirect(product)}
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
