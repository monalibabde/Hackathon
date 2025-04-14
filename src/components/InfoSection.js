import React from 'react';
import { FaLeaf, FaLightbulb, FaRecycle } from 'react-icons/fa';
import './InfoSection.css';

function InfoSection() {
  return (
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
  );
}

export default InfoSection;
