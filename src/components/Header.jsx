import React, { useContext } from "react";
import { AppContext } from "../App";
import vLogo from "../assets/images/vLogo.png";
import "../styles/Header.css";

function Header() {
  const { agentDetails, setAgentDetails } = useContext(AppContext);

  const handleClick = () => {
    setAgentDetails(null);
  };

  return (
    <nav className="header">
      <div className="logo-container" onClick={handleClick}>
        <span>
          <img src={vLogo} className="logo" />
        </span>
        <p className="header-content">ALORENTS</p>
      </div>
    </nav>
  );
}

export default Header;
