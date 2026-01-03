import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="options-grid">
        <button onClick={() => alert("Manage Products clicked")}>📦 Manage Products</button>
        <button onClick={() => alert("View Users clicked")}>👥 View Users</button>
        <button onClick={() => alert("Orders clicked")}>🛒 Orders</button>
        <button onClick={() => alert("Site Settings clicked")}>⚙️ Site Settings</button>
        <button onClick={() => alert("Reports clicked")}>📊 Reports</button>
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;