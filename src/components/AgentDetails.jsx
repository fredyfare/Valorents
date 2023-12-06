import React from "react";
import valorantAgents from "../assets/images/valorantAgents.png"
import "../styles/AgentDetails.css"

function AgentDetails({ agentDetails }) {
  if (!agentDetails) {
    return(
      <div className="valorant-agents">
        <img src={valorantAgents} className="valorant-agents-img" />
      </div>
    );
  }

  return (
    <div className="agentDetails">
      <h2>{agentDetails.name}</h2>
      <p>{agentDetails.biography}</p>
      <p>Role: {agentDetails.role}</p>
      <h3>Abilities</h3>
      <ul>
        {agentDetails.abilities.map((ability, index) => (
          <li key={index}>
            <strong>
              {ability.name} ({ability.key}):
            </strong>{" "}
            {ability.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentDetails;
