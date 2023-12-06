import React, { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
import AgentDetails from "./AgentDetails";
import agents from "../data/agents.json";
import brimstone from "../assets/icons/brimstone.png";
import viper from "../assets/icons/viper.png";
import omen from "../assets/icons/omen.png";
import killjoy from "../assets/icons/killjoy.png";
import cypher from "../assets/icons/cypher.png";
import sova from "../assets/icons/sova.png";
import sage from "../assets/icons/sage.png";
import phoenix from "../assets/icons/phoenix.png";
import jett from "../assets/icons/jett.png";
import reyna from "../assets/icons/reyna.png";
import raze from "../assets/icons/raze.png";
import breach from "../assets/icons/breach.png";
import skye from "../assets/icons/skye.png";
import yoru from "../assets/icons/yoru.png";
import astra from "../assets/icons/astra.png";
import kayo from "../assets/icons/kayo.png";
import chamber from "../assets/icons/chamber.png";
import neon from "../assets/icons/neon.png";
import fade from "../assets/icons/fade.png";
import harbor from "../assets/icons/harbor.png";
import gekko from "../assets/icons/gekko.png";
import deadlock from "../assets/icons/deadlock.png";
import iso from "../assets/icons/iso.png";
import "../styles/AgentMenu.css";

function AgentMenu() {
  const [currAgent, setCurrAgent] = useState("");
  const [agentDetails, setAgentDetails] = useState(null);

  const agentIcons = {
    brimstone,
    viper,
    omen,
    killjoy,
    cypher,
    sova,
    sage,
    phoenix,
    jett,
    reyna,
    raze,
    breach,
    skye,
    yoru,
    astra,
    kayo,
    chamber,
    neon,
    fade,
    harbor,
    gekko,
    deadlock,
    iso,
  };

  const handleClick = (agentName) => {
    setCurrAgent(agentName);
  };

  useEffect(() => {
    const selectedAgent = agents.find((agent) => agent.name === currAgent);
    setAgentDetails(selectedAgent);
    console.log(selectedAgent);
  }, [currAgent]);

  return (
    <div className="agentContainer">
      <div className="agentMenu">
        {agents.map((agent) => (
          <AgentCard
            key={agent.number}
            icon={
              agent.name === "KAY/O"
                ? agentIcons["kayo"]
                : agentIcons[agent.name.toLowerCase()]
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
