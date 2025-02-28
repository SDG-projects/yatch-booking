import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ProductPanel from "./ProductPanel";
import EditProduct from "./EditProduct"; // Import the edit product page
import AddProduct from "./AddProduct"; // Import the add product page

const Dashboard = () => {
  return (

      <div>
        <h2>Admin Dashboard</h2>
        <Routes>
          <Route path="/admin" element={<ProductPanel />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
        </Routes>
      </div>
  );
};

export default Dashboard;
