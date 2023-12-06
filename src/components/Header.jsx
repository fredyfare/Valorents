import React from "react";
import vLogo from "../assets/images/vLogo.png";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="header">
      <span>
        <img src={vLogo} className="logo" />
      </span>
      <p className="header-content">ALORENTS</p>
    </nav>
  );
}

export default Header;
