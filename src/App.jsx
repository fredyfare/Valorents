import React from "react";
import AgentMenu from "./components/AgentMenu";
import valorantBg from "./assets/videos/agent-background-generic.mp4";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={valorantBg} autoPlay loop muted />
      <div className="content">
        <AgentMenu />
      </div>
    </div>
  );
}

export default App;
