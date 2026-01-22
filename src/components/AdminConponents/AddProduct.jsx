import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "/src/data/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    feet: "",
    capacity: "",
    complementary: "",
    images: [],
  });

  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const imageRef = ref(storage, `Products/${file.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);

    setNewProduct((prev) => ({
      ...prev,
      images: [...prev.images, imageUrl],
    }));
    setUploading(false);
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || newProduct.images.length === 0) {
      alert("Please fill in all required fields and upload at least one image.");
      return;
    }

    try {
      await addDoc(collection(db, "products"), newProduct);
      alert("Product added successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Product Name" onChange={(e) => setNewProduct((prev) => ({ ...prev, name: e.target.value }))} />
      <input type="text" placeholder="Price" onChange={(e) => setNewProduct((prev) => ({ ...prev, price: e.target.value }))} />
      <input type="text" placeholder="Feet" onChange={(e) => setNewProduct((prev) => ({ ...prev, feet: e.target.value }))} />
      <input type="text" placeholder="Capacity" onChange={(e) => setNewProduct((prev) => ({ ...prev, capacity: e.target.value }))} />
      <input type="text" placeholder="Complementary Services" onChange={(e) => setNewProduct((prev) => ({ ...prev, complementary: e.target.value }))} />

      <input type="file" onChange={handleImageUpload} />
      {uploading && <p>Uploading image...</p>}

      <button onClick={handleAddProduct} disabled={uploading}>Add Product</button>
    </div>
  );
};

export default AddProduct;
