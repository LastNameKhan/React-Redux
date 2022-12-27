import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Dashboard from "./Pages/Dashboard";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);  
    background: linear-gradient(to right, #414345, #232526);
    color: whitesmoke
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
