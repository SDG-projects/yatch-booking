import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "yachts"));
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id, productImage) => {
    await deleteDoc(doc(db, "yachts", id));
    if (productImage) await deleteObject(ref(storage, productImage));
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Products</h2>
      <Link to="/admin/addProduct">Add Product</Link>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.productImage} alt={product.name} width={100} />
            <p>{product.name} - {product.feet} feet - ${product.price}</p>
            <Link to={`/admin/editProduct/${product.id}`}>Edit</Link>
            <button onClick={() => handleDelete(product.id, product.productImage)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;