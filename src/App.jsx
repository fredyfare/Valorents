import React, { useState, createContext } from "react";
import AgentMenu from "./components/AgentMenu";
import valorantBg from "./assets/videos/agent-background-generic.mp4";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const AppContext = createContext();

function App() {
  const [agentDetails, setAgentDetails] = useState(null);

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={valorantBg} autoPlay loop muted />
      <div className="content">
        <AppContext.Provider value={{ agentDetails, setAgentDetails }}>
          <Header />
          <AgentMenu />
          <Footer />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
