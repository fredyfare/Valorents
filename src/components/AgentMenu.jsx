import React from "react";
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
import AgentCard from "./AgentCard";

function AgentMenu() {
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

  return (
    <div className="agentList">
      {agents.map((agent) => (
        // <div className="agentSelector" key={agent.number}>
        //   <div className="agentIconContainer">
        //     <span>
        //       <img
        //         className="agentIcon"
        //         src={
        //           agent.name === "KAY/O"
        //             ? agentIcons["kayo"]
        //             : agentIcons[agent.name.toLowerCase()]
        //         }
        //         alt={`${agent.name} icon`}
        //       />
        //     </span>
        //   </div>
        //   <span>{agent.number}</span>
        //   <h2>{agent.name}</h2>
        // </div>
        <AgentCard
          key={agent.number}
          icon={
            agent.name === "KAY/O"
              ? agentIcons["kayo"]
              : agentIcons[agent.name.toLowerCase()]
          }
          agentName={agent.name}
          agentNumber={agent.number}
        />
      ))}
    </div>
  );
}

export default AgentMenu;
