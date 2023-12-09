import React, { useEffect, useState } from "react";
import valorantAgents from "../assets/images/valorantAgents.png";
import "../styles/AgentDetails.css";

function AgentDetails({ agentDetails }) {
  const [currAbility, setCurrAbility] = useState("Q");
  const [animationType, setAnimationType] = useState("");
  const [leftPartAnimation, setLeftPartAnimation] = useState("");

  const handleClick = (abilityKey) => {
    setCurrAbility(abilityKey);
  };

  useEffect(() => {
    setCurrAbility("Q");
    setAnimationType("fadeInImage 2s ease-in-out forwards");
    setLeftPartAnimation("pullUp 1s ease-in-out forwards");

    const timer = setTimeout(() => {
      setAnimationType("");
      setLeftPartAnimation("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [agentDetails]);

  if (!agentDetails) {
    return (
      <div className="valorant-agents">
        <img src={valorantAgents} className="valorant-agents-img" />
      </div>
    );
  }

  return (
    <div className="agentDetails">
      <div className="left-part" style={{ animation: leftPartAnimation }}>
        <div className="main-info">
          <div className="biography">
            <h1>{agentDetails.name}</h1>
            <br />
            <p>// Biography</p>
            <br />
            <p>{agentDetails.biography}</p>
          </div>
          <div className="data">
            <div className="data-left">
              <p>// Role</p>
              <p>
                {agentDetails.role}{" "}
                <img
                  className="role-icon"
                  src={
                    new URL(
                      `../assets/icons/${agentDetails.role}.png`,
                      import.meta.url
                    ).href
                  }
                />
              </p>
              <p>// Released</p>
              <p>{agentDetails.released}</p>
            </div>
            <div className="data-right">
              {agentDetails.role === "CONTROLLER" ? (
                <p>
                  <strong className="role-type">Controllers </strong>are experts
                  in slicing up dangerous territory to set their team up for
                  success.
                </p>
              ) : agentDetails.role === "SENTINEL" ? (
                <p>
                  <strong className="role-type">Sentinels </strong>are defensive
                  experts who can lock down areas and watch flanks, both on
                  attacker and defender rounds.
                </p>
              ) : agentDetails.role === "INITIATOR" ? (
                <p>
                  <strong className="role-type">Initiators </strong>
                  challenge angles by setting up their team to enter contested
                  ground and push defenders away.
                </p>
              ) : (
                <p>
                  <strong className="role-type">Duelists </strong>are
                  self-sufficient fraggers who their team expects, through
                  abilities and skills, to get high frags and seek out
                  engagements first.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skills-icons">
            {agentDetails.abilities.map((ability, index) => (
              <div
                className={
                  ability.key === currAbility
                    ? "skill-icon-container skill-selected"
                    : "skill-icon-container"
                }
                key={index}
                onClick={() => handleClick(ability.key)}
              >
                <img
                  className="skill-icon"
                  src={
                    agentDetails.name === "KAY/O"
                      ? new URL(
                          `../assets/icons/skills/KAYO_${ability.key}.png`,
                          import.meta.url
                        ).href
                      : new URL(
                          `../assets/icons/skills/${agentDetails.name}_${ability.key}.png`,
                          import.meta.url
                        ).href
                  }
                />
              </div>
            ))}
          </div>
          <div className="skill-info-container">
            <div className="skill-info-left">
              <video
                className="skill-video"
                src={
                  agentDetails.name === "KAY/O"
                    ? new URL(
                        `../assets/videos/skills/KAYO_${currAbility}.mp4`,
                        import.meta.url
                      ).href
                    : new URL(
                        `../assets/videos/skills/${agentDetails.name}_${currAbility}.mp4`,
                        import.meta.url
                      ).href
                }
                autoPlay
                loop
                muted
              />
            </div>
            <div className="skill-info-right">
              {(!currAbility
                ? agentDetails.abilities.find((ability) => ability.key === "Q")
                : agentDetails.abilities.find(
                    (ability) => ability.key === currAbility
                  )) &&
                agentDetails.abilities
                  .filter((ability) =>
                    !currAbility
                      ? ability.key === "Q"
                      : ability.key === currAbility
                  )
                  .map((ability, index) => (
                    <div className="skill-info" key={index}>
                      <h2 className="skill-name">
                        {ability.key} - {ability.name}
                      </h2>
                      <br />
                      <br />
                      <p>{ability.description}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="agent-image-container">
          <img
            className="agent-image"
            style={{ animation: animationType }}
            src={
              agentDetails.name === "KAY/O"
                ? new URL(`../assets/images/agents/kayo.png`, import.meta.url)
                    .href
                : new URL(
                    `../assets/images/agents/${agentDetails.name.toLowerCase()}.png`,
                    import.meta.url
                  ).href
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AgentDetails;
