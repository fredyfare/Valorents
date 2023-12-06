import React from "react";
import "../styles/AgentCard.css";

function AgentCard({ icon, agentName, agentNumber, onClick }) {
  return (
    <div className="agentSelector" onClick={onClick}>
      <div className="agentIconContainer">
        <span>
          <img className="agentIcon" src={icon} alt={`${agentName} icon`} />
        </span>
      </div>
      <span>{agentNumber}</span>
      <h2>{agentName}</h2>
    </div>
  );
}

export default AgentCard;
