import React from "react";
import "./App.css";
import logo from "./logo.png";

const App = () => {
  return (
    <div className="App">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </div>
  );
};

export default App;
