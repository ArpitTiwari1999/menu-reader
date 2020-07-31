import React,{ useState} from 'react';
import logo from '../logo.png';
import './Nav.css';
function Nav({ nav, onNavChange }) {
  const [responsive, setResponsive] = useState(false);

  return (
    <div className="container-fluid bg-dark">
      <div className="d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo" />
        <ul className={`justify-content-around m-0 w-50 align-items-center nav nav-tabs border-0`}>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Home")} ><p className= {`nav-link m-0 ${nav === "Home" ? "active":""}`}>Home</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Menu")} ><p className={`nav-link m-0 ${nav === "Menu" ? "active":""}`}>Menu</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Subscription")} ><p className={`nav-link m-0 ${nav === "Subscription" ? "active":""}`}>Subscription</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Contact")} ><p className={`nav-link m-0 ${nav === "Contact" ? "active":""}`}>Contact</p></li>
        </ul>
        <p className="icon m-0 p-1" style={{color: "#495057", backgroundColor: "#fff", borderColor: "#dee2e6 #dee2e6 #fff", borderRadius:"0.25rem", border: "1px solid transparetn"}}>{nav}</p>
        <i onClick={()=> setResponsive(!responsive)} className="fa fa-bars icon text-light"></i>
      </div>
      <ul className={`justify-content-around m-0 w-100 align-items-center nav nav-tabs border-0 ${responsive?"icon":""}`}>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Home")} ><p className= {`nav-link m-0 ${nav === "Home" ? "active":""}`}>Home</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Menu")} ><p className={`nav-link m-0 ${nav === "Menu" ? "active":""}`}>Menu</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Subscription")} ><p className={`nav-link m-0 ${nav === "Subscription" ? "active":""}`}>Subscription</p></li>
          <li className="d-flex align-items-center nav-item header-link" onClick={(e) => onNavChange("Contact")} ><p className={`nav-link m-0 ${nav === "Contact" ? "active":""}`}>Contact</p></li>
        </ul>
    </div>
  );
}
export default Nav;