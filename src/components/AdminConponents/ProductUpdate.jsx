import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./form.css";
import { getProducts } from "../../data/Services";
const ProductUpdate = ({ onUpdateProduct }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  getProducts(id).then((data) => setProduct(data[0]));
  console.log(id, product);

  const [name, setName] = useState(product?.name);
  const [capacity, setCapacity] = useState(product?.capacity);
  const [complementary, setComplementary] = useState(product?.complementary);
  const [feet, setFeet] = useState(product?.feet);
  const [images, setImages] = useState(product?.images);
  const [isVIP, setIsVIP] = useState(product?.isVIP);
  const [price, setPrice] = useState(product?.price);

  const [errors, setErrors] = useState({});

  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((image, i) => i !== index));
  };

  const handleImageChange = (index, value) => {
    setImages(images.map((image, i) => (i === index ? value : image)));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!capacity) newErrors.capacity = "Capacity is required";
    // if (!complementary) newErrors.complementary = "Complementary is required";
    if (!feet) newErrors.feet = "Feet is required";
    if (!price) newErrors.price = "Price is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const updatedProduct = {
        name,
        capacity,
        complementary,
        feet,
        images,
        isVIP,
        price,
      };
      onUpdateProduct(updatedProduct);
    }
  };

  return (
    <div className="product-update">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Capacity:</label>
          <input
            type="text"
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
          />
          {errors.capacity && <div className="error">{errors.capacity}</div>}
        </div>
        <div className="form-group">
          <label>Complementary:</label>
          <textarea
            value={complementary}
            onChange={(event) => setComplementary(event.target.value)}
          />
          {/* {errors.complementary && (
            <div className="error">{errors.complementary}</div>
          )} */}
        </div>
        <div className="form-group">
          <label>Feet:</label>
          <input
            type="number"
            value={feet}
            onChange={(event) => setFeet(event.target.valueAsNumber)}
          />
          {errors.feet && <div className="error">{errors.feet}</div>}
        </div>
        <div className="form-group">
          <label>Images:</label>
          {images?.map((image, index) => (
            <div key={index}>
              <input
                type="text"
                value={image}
                onChange={(event) =>
                  handleImageChange(index, event.target.value)
                }
              />
              <button type="button" onClick={() => handleRemoveImage(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddImage}>
            Add Image
          </button>
        </div>
        <div className="form-group">
          <label>Is VIP:</label>
          <select
            value={isVIP}
            onChange={(event) => setIsVIP(event.target.value === "true")}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.valueAsNumber)}
          />
          {errors.price && <div className="error">{errors.price}</div>}
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
