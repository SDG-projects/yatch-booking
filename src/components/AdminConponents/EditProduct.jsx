import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, storage } from "/src/data/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
    feet: "",
    capacity: "",
    complementary: "",
    images: [],
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);
        if (!productSnap.exists()) {
          console.error("Product not found!");
          return;
        }
        setProduct(productSnap.data());
        setUpdatedProduct(productSnap.data());
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, "products", id), updatedProduct);
      alert("Product updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageRef = ref(storage, `Products/${id}_${file.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);
    setUpdatedProduct((prev) => ({ ...prev, images: [...prev.images, imageUrl] }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Product</h2>
      <label>Name: <input type="text" value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} /></label>
      <label>Price: <input type="number" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} /></label>
      <label>Size: <input type="text" value={updatedProduct.feet} onChange={(e) => setUpdatedProduct({ ...updatedProduct, feet: e.target.value })} /></label>
      <label>Capacity: <input type="text" value={updatedProduct.capacity} onChange={(e) => setUpdatedProduct({ ...updatedProduct, capacity: e.target.value })} /></label>
      <label>Complementary: <input type="text" value={updatedProduct.complementary} onChange={(e) => setUpdatedProduct({ ...updatedProduct, complementary: e.target.value })} /></label>
      <label>Upload New Image: <input type="file" onChange={handleImageUpload} /></label>
      <button onClick={handleUpdate}>Save Changes</button>
      <button onClick={() => navigate("/admin")}>Cancel</button>
    </div>
  );
};

export default EditProduct;
