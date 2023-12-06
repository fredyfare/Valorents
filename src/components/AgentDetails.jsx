import React from "react";
import "../styles/AgentDetails.css"

function AgentDetails({ agentDetails }) {
  if (!agentDetails) {
    return null;
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
