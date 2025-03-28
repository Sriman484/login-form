import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      sessionStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <>
      <div className="text-white text-center py-4" style={{ backgroundColor: "#212529" }}>
        <h1 className="fw-bold">SETTINGS</h1>
      </div>

      <div className="d-flex vh-100">
        <div className="bg-dark text-white d-flex flex-column align-items-center py-4" style={{ width: "25%" }}>
          <ul className="list-unstyled text-center mt-3 w-100">
            <li className="mb-3">
              <Link to="/" className="nav-link py-2 px-3 sidebar-link">🏠 Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/profile" className="nav-link py-2 px-3 sidebar-link">👤 Profile</Link>
            </li>
            <li className="mb-3">
              <Link to="/settings" className="nav-link py-2 px-3 sidebar-link active">⚙️ Settings</Link>
            </li>
          </ul>
        </div>

        <div className="settings-container flex-grow-1 d-flex justify-content-center align-items-center">
          <div className="settings-card p-5 shadow-lg text-center rounded-4" style={{ background: "#ffffff", width: "50%" }}>
            <h2 className="settings-title fw-bold text-primary">Settings</h2>
            <p className="settings-text text-muted">
              Manage your preferences and account settings here.
            </p>
            <button className="btn btn-danger mt-4 px-4 py-2 fw-bold rounded-3" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          .sidebar-link {
            display: block;
            font-weight: 500;
            border-radius: 8px;
            transition: 0.3s;
            color: white;
          }
          .sidebar-link:hover, .sidebar-link.active {
            background-color: #495057;
          }
        `}
      </style>
    </>
  );
}

export default Settings;