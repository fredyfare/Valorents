import React from "react";
import "../styles/AgentCard.css"

function AgentCard({ key, icon, agentName, agentNumber }) {
  return (
    <div className="agentSelector" key={key}>
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
