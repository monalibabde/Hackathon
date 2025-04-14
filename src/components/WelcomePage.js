import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="eco-heading">🌱 Welcome to <span className="eco-name">EcoBot</span> ♻️</h1>
        <p className="eco-subtitle">Your companion for smarter and greener e-waste management </p>

        <div className="button-container">
          <button className="btn login-btn" onClick={() => navigate('/login')}>
            🔐 Login
          </button>
          <button className="btn register-btn" onClick={() => navigate('/signup')}>
            📝 Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
