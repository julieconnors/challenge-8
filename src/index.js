import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function StatCard(props) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{props.icon}</span>
        <strong>{props.label}</strong>
      </div>
      <p>{props.number}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      <StatCard icon="👉" label="Points" number={3000} />
      <StatCard icon="⚡" label="Lightnings" number={6540} />
      <StatCard icon="🤙" label="Shakas" number={337010} />
      <StatCard icon="💎" label="Diamonds" number={98661} />

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
