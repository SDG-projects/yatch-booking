import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPackages } from "../data/Services";
import "../components/styles/Packages.css"; // Import the external CSS

function Packages() {
  const nav = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(getPackages());
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        {packages.map((value, i) => (
          <div className="card" key={i}>
            <img src={value.imgs} alt={value.name} />
            <div className="card-overlay">
              <h1 className="card-title">{value.name}</h1>
              <button
                className="card-button"
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
        ))}
        {/* Custom Package Card */}
        <div className="card">
          <img src={"/img/yacht.png"} alt="Custom Package" />
          <div className="card-overlay">
            <h1 className="card-title">Custom Pack</h1>
            <button
              className="card-button"
              onClick={() => nav("/packages/custom_pack&-1")}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;