import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
