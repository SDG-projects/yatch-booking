import React from "react";
import PannellumViewer from "../components/PannellumViewer";
import CustomPackage from "./CustomPackage";
import { Link } from "react-router-dom";

function Packages() {
  const config = {
    type: "equirectangular",
    panorama: "/img/df.jpg",
    autoRotate: 2,
  };

  return (
    <div>
      Packages
      <Link to={"/customPack"}>Custom Package</Link>
      {/* <PannellumViewer config={config} /> */}
    </div>
  );
}

export default Packages;