import React, { useEffect } from "react";
import AgentMenu from "./components/AgentMenu";
import videoSource from "./assets/videos/agent-background-generic.mp4";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <AgentMenu />
    </div>
  );
}

export default App;
