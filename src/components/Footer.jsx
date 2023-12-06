import React from "react";
// import valorantLogo from "../assets/images/valorantLogo.png"
// import riotGamesLogo from "../assets/images/riotGamesLogo.png"
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        All the content belongs to{" "}
        <a href="https://playvalorant.com/en-us/" target="_blank">
          Valorant
        </a>{" "}
        by Riot Games. This page was created for practicing React and is
        based on{" "}
        <a href="https://playvalorant.com/en-us/agents/" target="_blank">
          Valorant agents
        </a>
        .
      </p>
      {/* <span>
          <img
            src={valorantLogo}
            alt={"Valorant Logo"}
            className="logo"
          />
        </span>
      <span>
          <img
            src={riotGamesLogo}
            alt={"Valorant Logo"}
            className="logo"
          />
        </span> */}
    </div>
  );
}

export default Footer;
