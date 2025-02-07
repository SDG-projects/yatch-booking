import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/Services";
import { Product } from "../Products";

function ProductPanel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  });
  return (
    <div>
      <div className="title">
        <h1>ProductPanel</h1>
      </div>
      <div className="productsCon">
        <div className="action">
          <div className="searchCon">
            <input type="text" name="" id="search" />
            <button>search</button>
          </div>
          <button>+</button>
        </div>
        <div className="products">
          <div className="product-grid">
            {products.map((product) => (
              <Product product={product} notNeed={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPanel;
