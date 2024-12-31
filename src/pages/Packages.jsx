import React from "react";
import PannellumViewer from "../components/PannellumViewer";
import CustomPackage from "./CustomPackage";
import { Link, useParams } from "react-router-dom";
import ProductSection, { Product } from "../components/Products";
import Package from "../components/Package";

function Packages() {
  // console.log(useParams());
  const { id } = useParams();
  const config = {
    type: "equirectangular",
    panorama: "/img/df.jpg",
    autoRotate: 2,
  };

  return (
    <div>
      Packages
      {/* <Link to={"/customPack"}>Custom Package</Link>
      {id ? (
        <Product
          product={{
            id: 1,
            name: "Luxury Yacht A",
            images: ["/img/img32.webp", "/img/img32.webp", "/img/img32.webp"],
            price: "$5000",
            feet: "85 ft",
            capacity: "20 People",
          }}
        />
      ) : (
        <ProductSection />
      )} */}
      {/* <PannellumViewer config={config} /> */}
      <Package />
    </div>
  );
}

export default Packages;
