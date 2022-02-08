import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <Link className="link" to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          <span className="purple">Crypto Trends </span>
          <span className="minty">search</span>
        </h1>
      </div>
    </Link>
  );
}

export default Navbar;
