import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ProductForm from "../components/ProductForm";

const ProductUpdate = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "yachts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id, ...docSnap.data() });
      }
    };
    fetchProduct();
  }, [id]);

  return <div>{product ? <ProductForm product={product} /> : <p>Loading...</p>}</div>;
};

export default ProductUpdate;
