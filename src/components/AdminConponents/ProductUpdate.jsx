import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./form.css";
import { addProducts, getProducts, updateProducts } from "../../data/Services";
const ProductUpdate = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    isVIP: false,
    images: [],
    capacity: "",
    complementary: "",
    name: "",
    feet: 0,
    price: 0,
  });

  const [toster, setToster] = useState({});
  useEffect(() => {
    id &&
      getProducts(id).then((data) => {
        // console.log(data);
        setProduct(data[0]);
      });
    console.log(id, product);
    // return () => setProduct([]);
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);
  function onUpdateProduct() {
    updateProducts(product)
      .then(() => {
        setToster({
          message: "Document successfully updated!",
          status: "success",
        });
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        setToster({
          message: "Error updating document: try again (or) call Admin",
          status: "danger",
        });

        console.error("Error updating document: ", error);
      });
  }
  function validateForm() {}
  function onAddProduct() {
    addProducts(product)
      .then(() => {
        setToster({ message: "successfuly added", status: "success" });
      })
      .catch(() => {
        setToster({ message: "error while  adding", status: "success" });
      });
  }
  return (
    <div className="product-update">
      <h2>{id ? "Update" : "Add"} Product</h2>
      <div>
        {toster && <p className={"tost " + toster.status}>{toster.message}</p>}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={product?.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Capacity:</label>
          <input
            type="text"
            onChange={(e) =>
              setProduct({ ...product, capacity: e.target.value })
            }
            value={product?.capacity}
          />
        </div>
        <div className="form-group">
          <label>Complementary:</label>
          <textarea
            value={product?.complementary}
            onChange={(e) =>
              setProduct({ ...product, complementary: e.target.value })
            }
          />
          {/* {errors.complementary && (
            <div className="error">{errors.complementary}</div>
          )} */}
        </div>
        <div className="form-group">
          <label>Feet:</label>
          <input
            type="number"
            value={product?.feet}
            onChange={(e) => setProduct({ ...product, feet: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Images:</label>
          {product?.images?.map((image, index) => (
            <div key={index}>
              <input
                type="text"
                value={image}
                onChange={(e) =>
                  setProduct((prevProduct) => ({
                    ...prevProduct,
                    images: prevProduct.images.map((img, i) =>
                      i === index ? e.target.value : img
                    ),
                  }))
                }
              />
              <button
                type="button"
                onClick={() =>
                  setProduct((prevProduct) => ({
                    ...prevProduct,
                    images: prevProduct.images.filter(
                      (image, i) => i !== index
                    ),
                  }))
                }
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={(e) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                images: [...prevProduct.images, ""],
              }))
            }
          >
            Add Image
          </button>
        </div>
        <div className="form-group">
          <label>Is VIP:</label>
          <select
            defaultChecked={"false"}
            onChange={(e) => setProduct({ ...product, isVIP: e.target.value })}
            value={product?.isVIP}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            value={product?.price}
          />
        </div>
        <button
          onClick={() => (id ? onUpdateProduct() : onAddProduct())}
          // type="submit"
        >
          {id ? "Update" : "Add"} Product
        </button>
      </div>
    </div>
  );
};

export default ProductUpdate;
