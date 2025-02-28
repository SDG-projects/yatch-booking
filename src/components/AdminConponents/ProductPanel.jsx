import { useEffect, useState } from "react";
import { db } from "/src/data/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./form.css"

const ProductPanel = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", productId));
        setProducts(products.filter((product) => product.id !== productId));
        alert("Product deleted successfully.");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div>
      <h2>Admin Panel - Manage Products</h2>
      <button onClick={() => navigate("/admin/add-product")}>➕ Add New Product</button>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <img src={product.images[0]} alt={product.name} width="100" />
              <p>Price: {product.price} AED</p>
              <p>Size: {product.feet} feet</p>
              <p>Capacity: {product.capacity}</p>
              <button onClick={() => navigate(`/admin/edit-product/${product.id}`)}>✏️ Edit</button>
              <button onClick={() => handleDelete(product.id)}>🗑️ Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPanel;
