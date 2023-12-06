import React from "react";
import AgentMenu from "./components/AgentMenu";
import valorantBg from "./assets/videos/agent-background-generic.mp4";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={valorantBg} autoPlay loop muted />
      <div className="content">
        <Header />
        <AgentMenu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
