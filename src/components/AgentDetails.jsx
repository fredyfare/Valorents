import React from "react";
import valorantAgents from "../assets/images/valorantAgents.png";
import "../styles/AgentDetails.css";

function AgentDetails({ agentDetails }) {
  if (!agentDetails) {
    return (
      <div className="valorant-agents">
        <img src={valorantAgents} className="valorant-agents-img" />
      </div>
    );
  }

  return (
    <div className="agentDetails">
      <div className="main-info">
        <div className="biography">
          <h1>{agentDetails.name}</h1>
          <br />
          <p>// Biography</p>
          <br />
          <p>{agentDetails.biography}</p>
        </div>
        <div className="data">
          <p>// Role</p>
          <br />
          <p>{agentDetails.role}</p>
          <br />
          <p>// Released</p>
          <br />
          <p>{agentDetails.released}</p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-icons">
          {agentDetails.abilities.map((ability, index) => (
            <div className="skill-icon-container" key={index}>
              <img className="skill-icon" src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29aa6cc80f1caa7b/5eaf8607af7e315106b47daa/TX_Brimstone_Q.png" />
            </div>
          ))}
        </div>
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
      <div className="agent-image">
        <h1>{agentDetails.name}</h1>
        <p>{agentDetails.biography}</p>
      </div>
    </div>
  );
}

export default AgentDetails;
