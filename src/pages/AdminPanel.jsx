import React, { useState, useEffect } from "react";
import "../components/styles/AdminPanel.css";

const yachtList = [
  "Yacht 1",
  "Yacht 2",
  "Yacht 3",
  "Yacht 4",
  "Yacht 5",
  // Add all 50+ yacht names here
];

const AdminPanel = () => {
  const [selectedYacht, setSelectedYacht] = useState(yachtList[0]);
  const [yachtPrice, setYachtPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [yachtsData, setYachtsData] = useState({});

  // Load yacht data from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("yachtsData")) || {};
    setYachtsData(storedData);
    if (storedData[selectedYacht]) {
      setYachtPrice(storedData[selectedYacht].price);
      setImageUrl(storedData[selectedYacht].image);
    }
  }, [selectedYacht]);

  // Save data to localStorage
  const handleSave = () => {
    const updatedData = {
      ...yachtsData,
      [selectedYacht]: { price: yachtPrice, image: imageUrl },
    };
    setYachtsData(updatedData);
    localStorage.setItem("yachtsData", JSON.stringify(updatedData));
    alert(`Updated details for ${selectedYacht}!`);
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel - Update Yacht Details</h2>

      {/* Yacht Selection Dropdown */}
      <label>Select Yacht:</label>
      <select
        value={selectedYacht}
        onChange={(e) => setSelectedYacht(e.target.value)}
      >
        {yachtList.map((yacht) => (
          <option key={yacht} value={yacht}>
            {yacht}
          </option>
        ))}
      </select>

      <label>Yacht Price:</label>
      <input
        type="text"
        value={yachtPrice}
        onChange={(e) => setYachtPrice(e.target.value)}
        placeholder="Enter yacht price"
      />

      <label>Yacht Image URL:</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
      />

      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default AdminPanel;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCcDqVvMOR--LhfIzBiHZQER-amydfwSU4",
//   authDomain: "sample-5ae73.firebaseapp.com",
//   projectId: "sample-5ae73",
//   storageBucket: "sample-5ae73.firebasestorage.app",
//   messagingSenderId: "20514869022",
//   appId: "1:20514869022:web:1e1f7d656528111fe1830f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
