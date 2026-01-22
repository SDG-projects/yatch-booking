import { useEffect, useState } from "react";
import { db } from "/src/data/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getProducts } from "../../data/Services";
import { Product } from "../Products";
const ProductPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
    console.log(products);
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => {
          console.log(`Rendering product: ${product.name}`);
          // return (
          //   <div key={product.id}>
          //     <h3>{product.name}</h3>
          //     {product.images && product.images.length > 0 ? (
          //       <img src={product.images[0]} alt={product.name} width="100" />
          //     ) : (
          //       <p>No image available</p>
          //     )}
          //     <p>Price: ${product.price}</p>
          //   </div>
          // );
          return <Product product={product} notNeed={true} />;
        })
      )}
    </div>
  );
};

export default ProductPanel;