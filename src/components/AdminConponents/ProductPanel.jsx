import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/Services";
import { Product } from "../Products";
import { Link } from "react-router-dom";

function ProductPanel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
    // console.log("hi");
  }, []);
  return (
    <div>
      <div className="title">
        <h1>ProductPanel</h1>
      </div>
      <div className="productsCon">
        <div className="action">
          {/* <div className="searchCon">
            <input type="text" name="" id="search" />
            <button>search</button>
          </div> */}
          <button>
            <Link to="/admin/addProduct">+</Link>
          </button>
        </div>
        <div className="products">
          <div className="product-grid">
            {products.map((product, i) => (
              <Product key={i} product={product} notNeed={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPanel;
