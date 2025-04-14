import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="images/logo.png" alt="EcoBot" className="logo" />
        <nav>
          <ul>
            {/* <li><a href="#">Home</a></li> */}
            {/* <li><a href="#">Pickup</a></li> */}
            {/* <li><a href="#">Vendors</a></li> */}
            <li><a href="#">Login/Signup</a></li>
            <li><a href="#">Rewards</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
