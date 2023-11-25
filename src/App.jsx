import agents from "./data/agents.json";

function App() {
  return (
    <div>
      {agents.map((agent) => (
        <div key={agent.number}>
          <h1>{agent.number}</h1>
          <h2>{agent.name}</h2>
          <h2>{agent.role}</h2>
          <p>{agent.biography}</p>
          <p>{agent.released}</p>
          <p>{agent.origin}</p>

          <ul>
            {agent.abilities.map((ability, index) => (
              <li key={index}>
                <p>{ability.name}</p>
                <p>{ability.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
