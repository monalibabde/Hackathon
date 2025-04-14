// src/components/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the hook
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    alert(`Logging in as ${role} with email: ${email}`);
  };

  return (
    <div className="login-container">
      <h1>Login to EcoBot</h1>

      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />

      <label className="role-label">Select Your Role</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="login-select"
      >
        <option value="">-- Choose Role --</option>
        <option value="User">User</option>
        <option value="Shopkeeper">Shopkeeper</option>
        <option value="Recycle Hub">Recycle Hub</option>
      </select>

      <div className="login-button-container">
        <button className="btn back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
        <button className="btn login-btn" onClick={handleLogin}>
          Login →
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
