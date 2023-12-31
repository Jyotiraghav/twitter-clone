import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Tweets from "./components/Tweets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      {/* Include the Tweets component here */}
      <Tweets />
    </div>
  );
}

export default App;
