import React from 'react';
import logo from '../logo.png';
import './Nav.css';

function Nav({ nav, onNavChange }) {
  return (
    <div className="container-fluid bg-dark">
      <div className="d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo" />

        <ul className="d-flex flex-row justify-content-around m-0 w-50 align-items-center nav nav-tabs border-0">
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Home")} ><p className= {`nav-link m-0 ${nav === "Home" ? "active":""}`}>Home</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Menu")} ><p className={`nav-link m-0 ${nav === "Menu" ? "active":""}`}>Menu</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Subscription")} ><p className={`nav-link m-0 ${nav === "Subscription" ? "active":""}`}>Subscription</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Contact")} ><p className={`nav-link m-0 ${nav === "Contact" ? "active":""}`}>Contact</p></li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;