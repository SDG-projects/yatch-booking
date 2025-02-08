import React, { useState, useEffect } from "react";
import "../components/styles/AdminPanel.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// const yachtList = [
//   "Yacht 1",
//   "Yacht 2",
//   "Yacht 3",
//   "Yacht 4",
//   "Yacht 5",
//   // Add all 50+ yacht names here
// ];

// const AdminPanel = () => {
//   const [selectedYacht, setSelectedYacht] = useState(yachtList[0]);
//   const [yachtPrice, setYachtPrice] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [yachtsData, setYachtsData] = useState({});

//   // Load yacht data from localStorage
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("yachtsData")) || {};
//     setYachtsData(storedData);
//     if (storedData[selectedYacht]) {
//       setYachtPrice(storedData[selectedYacht].price);
//       setImageUrl(storedData[selectedYacht].image);
//     }
//   }, [selectedYacht]);

//   // Save data to localStorage
//   const handleSave = () => {
//     const updatedData = {
//       ...yachtsData,
//       [selectedYacht]: { price: yachtPrice, image: imageUrl },
//     };
//     setYachtsData(updatedData);
//     localStorage.setItem("yachtsData", JSON.stringify(updatedData));
//     alert(`Updated details for ${selectedYacht}!`);
//   };

//   return (
//     <div className="admin-container">
//       <h2>Admin Panel - Update Yacht Details</h2>

//       {/* Yacht Selection Dropdown */}
//       <label>Select Yacht:</label>
//       <select
//         value={selectedYacht}
//         onChange={(e) => setSelectedYacht(e.target.value)}
//       >
//         {yachtList.map((yacht) => (
//           <option key={yacht} value={yacht}>
//             {yacht}
//           </option>
//         ))}
//       </select>

//       <label>Yacht Price:</label>
//       <input
//         type="text"
//         value={yachtPrice}
//         onChange={(e) => setYachtPrice(e.target.value)}
//         placeholder="Enter yacht price"
//       />

//       <label>Yacht Image URL:</label>
//       <input
//         type="text"
//         value={imageUrl}
//         onChange={(e) => setImageUrl(e.target.value)}
//         placeholder="Enter image URL"
//       />

//       <button onClick={handleSave}>Save Changes</button>
//     </div>
//   );
// };

const AdminPanel = ({ children }) => {
  const nav = useNavigate();
  const auth = getAuth();
  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        nav("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div style={{ display: "flex" }}>
      {/* <h1>AdminPanel</h1> */}

      <nav className="dashboard-nav">
        <ul>
          {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li> */}
          {/* <li>
            <Link to="/packages">Packages</Link>
          </li> */}
          <li>
            <Link to="productPanel">Products</Link>
          </li>
          <li onClick={() => logout()}>logout</li>
        </ul>
      </nav>

      <div className="PanelContainer" style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminPanel;
