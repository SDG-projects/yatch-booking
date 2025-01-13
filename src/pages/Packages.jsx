import React, { useEffect, useState } from "react";
import PannellumViewer from "../components/PannellumViewer";
import CustomPackage from "./CustomPackage";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductSection, { Product } from "../components/Products";
import Package from "../components/Package";
import { getPackages } from "../data/Services";

function Packages() {
  // console.log(useParams());
  // const { packName } = useParams();
  // const config = {
  //   type: "equirectangular",
  //   panorama: "/img/df.jpg",
  //   autoRotate: 2,
  // };
  const nav = useNavigate();

  const [packages, setPackages] = useState();
  useEffect(() => {
    setPackages(getPackages());
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          minHeight: "90vh",
        }}
      >
        {packages?.map((value, i) => {
          return (
            <div
              className="card"
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // flexBasis: "30%",

                width: "300px",
                height: "200px",
                // backgroundColor: "black",
                position: "relative",
                // boxShadow: "5px 5px 5px gray",
              }}
            >
              <img
                // className="card"
                src={value.imgs}
                alt={value.name}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  // zIndex: "-1",
                  borderRadius: "10px",
                }}
              />
              <div
                style={{
                  zIndex: "2",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "10px",
                  backgroundColor: "rgb(255,255,255,0.4)",
                  padding: "10px",
                }}
              >
                <h1
                  style={{
                    fontFamily: "Playwrite AU SA , serif",
                    color: "var(--accent-color)",
                  }}
                >
                  {value.name}
                </h1>
                <button
                  onClick={() =>
                    nav(
                      "/packages/" +
                        value.name
                          .toLowerCase()
                          .replaceAll(" ", "_")
                          .replaceAll("/", "-")
                          .replaceAll("&", "-") +
                        "&" +
                        i
                    )
                  }
                >
                  Explore
                </button>
              </div>
            </div>
          );
        })}
        <div
          className="card"
          // key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // flexBasis: "30%",

            width: "300px",
            height: "200px",
            // backgroundColor: "black",
            position: "relative",
            // boxShadow: "5px 5px 5px gray",
          }}
        >
          <img
            // className="card"
            src={"/img/yacht.png"}
            alt={"CustomPackage"}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              // zIndex: "-1",
              borderRadius: "10px",
            }}
          />
          <div
            style={{
              zIndex: "2",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
              backgroundColor: "rgb(255,255,255,0.4)",
              padding: "10px",
            }}
          >
            <h1
              style={{
                fontFamily: "Playwrite AU SA , serif",
                color: "var(--accent-color)",
              }}
            >
              Custom Pack
            </h1>
            <button onClick={() => nav("/packages/custom_pack&-1")}>
              Explore
            </button>
          </div>
        </div>
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
        {/* <Package details={false} /> */}
      </div>
    </>
  );
}

export default Packages;
