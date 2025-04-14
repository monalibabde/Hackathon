import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './HomePage.css';  // Ensure the correct path to your CSS file
import { FaLeaf, FaLightbulb, FaRecycle } from 'react-icons/fa';  // Ensure react-icons is installed

function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="container">
        <h1 className="eco-heading">🌱 Welcome to <span className="eco-name">EcoBot</span> ♻️</h1>
          <nav>
            <ul>
            <li><Link to="/welcome" className="link">Login/Signup</Link></li> {/* Link to WelcomePage */}
              <li><a href="#">Rewards</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Make E-Waste Disposal Easy, Smart & Rewarding 🌱</h1>
          <p>EcoCycle helps you recycle electronics, earn rewards, and track your carbon impact – all in one platform.</p>
        </div>
      </section>

      <section className="info-section">
        <h2 className="info-title">Why Choose EcoCycle?</h2>
        <div className="info-boxes">
          <div className="info-box">
            <FaRecycle className="info-icon" />
            <h3>Reduce E-Waste</h3>
            <p>Safely dispose of old electronics and reduce environmental pollution.</p>
          </div>
          <div className="info-box">
            <FaLeaf className="info-icon" />
            <h3>Track Carbon Impact</h3>
            <p>See your positive impact on the planet with detailed insights.</p>
          </div>
          <div className="info-box">
            <FaLightbulb className="info-icon" />
            <h3>Earn Rewards</h3>
            <p>Get rewarded for doing the right thing – recycle and redeem points.</p>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="container">
          <h2>Why E-Waste is a Big Problem</h2>
          <p>
            India generates millions of tons of e-waste each year, most of which ends up in landfills or gets handled
            unsafely. This causes pollution, health issues, and waste of valuable materials.
          </p>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <h2>EcoCycle: The Smart Solution</h2>
          <ul>
            <li>📍 Locate nearby recycling or repair centers</li>
            <li>🚚 Schedule pickups with ease</li>
            <li>🌿 Track how much CO₂ you save</li>
            <li>🏆 Earn green points and rewards</li>
            <li>💬 Chat with our AI bot for instant help</li>
          </ul>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2025 EcoCycle – Created by Team TechnoMinds</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
