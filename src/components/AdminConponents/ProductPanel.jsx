import { useEffect, useState } from "react";
import { db } from "/src/data/firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("📡 Fetching products from Firestore...");
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
        console.log("✅ Fetched products:", productList);
      } catch (error) {
        console.error("🚨 Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? <p>No products found</p> : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {product.images && product.images.length > 0 ? (
              <img src={product.images[0]} alt={product.name} width="100" />
            ) : <p>No image available</p>}
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductPanel;
