import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/Services";
import "./styles/productdetail.css"
const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = getProducts();
    const selectedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);
    console.log("Product:", selectedProduct);
    console.log("Product images:", selectedProduct.images);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="product-detail-section">
      <h1 className="product-name">{product.name}</h1>
      <div className="product-detail-content">
        <img src={product.images[0]} alt={product.name} className="product-image" />
        <div className="product-info">
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Size:</strong> {product.feet}</p>
          <p><strong>Capacity:</strong> {product.capacity}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
      <button className="btn btn-primary">Book Now</button>
    </div>
  );
};

export default ProductDetail;

