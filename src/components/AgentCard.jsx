import React from "react";
import "../styles/AgentCard.css";

function AgentCard({ icon, agentName, agentNumber, onClick, isSelected }) {
  return (
    <div
      className={`agentSelector ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="agentIconContainer">
        <span>
          <img
            className={`agentIcon ${isSelected ? "selected" : ""}`}
            src={icon}
            alt={`${agentName} icon`}
          />
        </span>
      </div>
      <span className={`${isSelected ? "selected" : ""}`}>{agentNumber}</span>
      <h2 className={`${isSelected ? "selected" : ""}`}>{agentName}</h2>
    </div>
  );
}

export default AgentCard;
