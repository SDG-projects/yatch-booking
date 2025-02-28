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

  const handleAddProduct = async () => {
    try {
      await addDoc(collection(db, "products"), newProduct);
      alert("Product added successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageRef = ref(storage, `Products/${file.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);
    setNewProduct((prev) => ({ ...prev, images: [...prev.images, imageUrl] }));
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Product Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
