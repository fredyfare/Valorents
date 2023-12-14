import React, { useState, createContext } from "react";
import Header from "./components/Header";
import AgentMenu from "./components/AgentMenu";
import WeaponMenu from "./components/WeaponMenu";
import Footer from "./components/Footer";
import valorantBg from "./assets/videos/agent-background-generic.mp4";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [agentDetails, setAgentDetails] = useState(null);
  const [currSection, setCurrSection] = useState("");

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={valorantBg} autoPlay loop muted />
      <div className="content">
        <AppContext.Provider
          value={{ agentDetails, setAgentDetails, currSection, setCurrSection }}
        >
          <Header />
          {currSection === "AGENTS" ? <AgentMenu /> : <WeaponMenu />}

          <Footer />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
