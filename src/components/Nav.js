import React from 'react';
import logo from '../logo.png';
import './Nav.css';

function Nav({ onNavChange }) {
  return (
    <div className="container-fluid bg-dark">
      <div className="d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo" />
        <ul className="d-flex flex-row justify-content-around m-0 w-50 align-items-center nav">
          <li className="d-flex align-items-center nav-item" onClick={onNavChange("Home")} ><a className="nav-link active" href="/">Home</a></li>
          <li className="d-flex align-items-center nav-item"><a href="/" className="nav-link">Menu</a></li>
          <li className="d-flex align-items-center nav-item"><a href="/" className="nav-link">Subscription</a></li>
          <li className="d-flex align-items-center nav-item"><a href="/" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;