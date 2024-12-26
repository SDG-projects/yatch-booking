import React from "react";
import Card from "./Card";
import "./styles/products.css";
function Product({ name, details, imgs, Description }) {
  const bookLink = `https://wa.me/${"9393939393"}?text=${details}`;
  return (
    <Card style={{ width: "300px" }}>
      <div className="product">
        <div className="cardImgs">
          {imgs.map((value, index) => {
            return <img src={value} key={index} alt="" />;
          })}
        </div>
        <div className="description">{Description}</div>
        <div className="CTA">
          <a href={bookLink}>book now</a>
        </div>
      </div>
    </Card>
  );
}

function Products() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        margin: "10px",
        marginTop: "20px",
      }}
    >
      <Product
        imgs={["/img/yacht.png", "/img/yacht.png", "/img/yacht.png"]}
        Description={
          "lorem dlkflhs dflksh diwebkfde p oideva us the ow butifulw one in theworld son vwe "
        }
      />
      <Product
        imgs={["/img/yacht.png", "/img/yacht.png", "/img/yacht.png"]}
        Description={
          "lorem dlkflhs dflksh diwebkfde p oideva us the ow butifulw one in theworld son vwe "
        }
      />
      <Product
        imgs={["/img/yacht.png", "/img/yacht.png", "/img/yacht.png"]}
        Description={
          "lorem dlkflhs dflksh diwebkfde p oideva us the ow butifulw one in theworld son vwe "
        }
      />
    </div>
  );
}

export default Products;
