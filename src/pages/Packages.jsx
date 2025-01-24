import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPackages } from "../data/Services";

function Packages() {
  const nav = useNavigate();
  const [packages, setPackages] = useState();

  useEffect(() => {
    setPackages(getPackages());
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {packages?.map((value, i) => (
        <div
          className="card"
          key={i}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          <img
            src={value.imgs}
            alt={value.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "15px 15px 0 0",
            }}
          />
          <div
            style={{
              padding: "15px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "20px",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {value.name}
            </h1>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                border: "none",
                borderRadius: "25px",
                background: "linear-gradient(135deg, #ffaf3f, #d9803f)",
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = "linear-gradient(135deg, #d9803f, #ffaf3f)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background = "linear-gradient(135deg, #ffaf3f, #d9803f)")
              }
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
      <div
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={"/img/yacht.png"}
          alt={"Custom Package"}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "15px 15px 0 0",
          }}
        />
        <div
          style={{
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "20px",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            Custom Pack
          </h1>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              border: "none",
              borderRadius: "25px",
              background: "linear-gradient(135deg, #ffaf3f, #d9803f)",
              color: "#fff",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "linear-gradient(135deg, #d9803f, #ffaf3f)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "linear-gradient(135deg, #ffaf3f, #d9803f)")
            }
            onClick={() => nav("/packages/custom_pack&-1")}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Packages;
