import React from "react";

function Card({ style, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: "8px",
        boxShadow: "5px 5px 5px gray",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
