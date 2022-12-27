import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    background: #200122;
    background: -webkit-linear-gradient(to right, #6f0000, #200122);
    background: linear-gradient(to right, #6f0000, #200122);
    color: whitesmoke
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
