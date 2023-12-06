import React, { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
import AgentDetails from "./AgentDetails";
import agents from "../data/agents.json";
import "../styles/AgentMenu.css";

function AgentMenu() {
  const [currAgent, setCurrAgent] = useState("");
  const [agentDetails, setAgentDetails] = useState(null);

  const handleClick = (agentName) => {
    setCurrAgent(agentName);
  };

  useEffect(() => {
    const selectedAgent = agents.find((agent) => agent.name === currAgent);
    setAgentDetails(selectedAgent);
  }, [currAgent]);

  return (
    <div className="agentContainer">
      <div className="agentMenu">
        {agents.map((agent) => (
          <AgentCard
            key={agent.number}
            icon={
              agent.name === "KAY/O"
                ? new URL(`../assets/icons/kayo.png`, import.meta.url).href
                : new URL(
                    `../assets/icons/${agent.name.toLowerCase()}.png`,
                    import.meta.url
                  ).href
            }
            agentName={agent.name}
            agentNumber={agent.number}
            onClick={() => handleClick(agent.name)}
          />
        ))}
      </div>
      <AgentDetails agentDetails={agentDetails} />
    </div>
  );
}

export default AgentMenu;
