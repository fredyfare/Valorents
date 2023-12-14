import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import vLogo from "../assets/images/vLogo.png";
import "../styles/Header.css";

function Header() {
  const { setAgentDetails, currSection, setCurrSection } = useContext(AppContext);

  const handleLogoClick = () => {
    setAgentDetails(null);
  };

  const handleSectionClick = (sectionName) => {
    setCurrSection(sectionName);
    console.log(currSection)
  };

  return (
    <nav className="header">
      <div className="logo-container" onClick={handleLogoClick}>
        <span>
          <img src={vLogo} className="logo" />
        </span>
        <p className="header-content">ALORENTS</p>
      </div>
      <div className="section-menu">
        <div
          className={`agent-section ${currSection === "AGENTS" ? "selected" : ""}`}
          onClick={() => handleSectionClick("AGENTS")}
        >
          <p>AGENTS</p>
        </div>
        <div
          className={`collection-section ${currSection === "COLLECTION" ? "selected" : ""}`}
          onClick={() => handleSectionClick("COLLECTION")}
        >
          <p>COLLECTION</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
