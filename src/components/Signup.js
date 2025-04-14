// src/components/SignUpPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this
import "./SignUpPage.css";

const SignUpPage = () => {
  const [role, setRole] = useState("");
  const [, setLicenseFile] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const handleFileChange = (e) => {
    setLicenseFile(e.target.files[0]);
  };

  const handleRegister = () => {
    alert(`Registered as ${role}`);
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>

      <input type="text" placeholder="Name" className="signup-input" />
      <input type="email" placeholder="Email" className="signup-input" />
      <input type="password" placeholder="Password" className="signup-input" />
      <input type="address" placeholder="Address" className="signup-input" />

      <label className="role-label">Select Your Role</label>
      <select
        className="signup-select"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">-- Choose Role --</option>
        <option value="User">User</option>
        <option value="Shopkeeper">Shopkeeper</option>
        <option value="Recycle Hub">Recycle Hub</option>
      </select>

      {(role === "Shopkeeper" || role === "Recycle Hub") && (
        <div className="upload-section">
          <label className="upload-label">Upload License Image</label>
          <input type="file" onChange={handleFileChange} />
        </div>
      )}

      <div className="signup-button-container">
        <button className="btn back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
        <button className="btn signup-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
