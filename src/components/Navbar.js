import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          <span className="purple">Crypto Trends </span>
          <span className="minty">search</span>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
